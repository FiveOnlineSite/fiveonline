const authModel = require("../models/authModel");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password, role = "admin" } = req.body;

    // Ensure the role is either "admin" or "editor"
    if (!["admin", "editor"].includes(role)) {
      return res
        .status(400)
        .json({ message: "Invalid role. Must be 'admin' or 'editor'." });
    }

    const newName = name.toLowerCase().replace(/ /g, "");

    const existingName = await authModel.findOne({ name: newName });
    if (existingName) {
      return res
        .status(400)
        .json({ message: "Name already exists. Try another." });
    }

    const existingEmail = await authModel.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "Email already exists. Try another." });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters." });
    }

    if (role && !["editor", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role provided." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new authModel({
      name: newName,
      email,
      password: hashedPassword,
      role: role || "editor", // Default role is admin if none provided
    });

    const accessToken = createAccessToken({ id: newUser._id });
    const refreshToken = createRefreshToken({ id: newUser._id });

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      path: "/api/auth/refresh_token",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    await newUser.save();

    res.status(200).json({
      message: "User registered successfully.",
      newUser,
      accessToken,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error in creating user: ${error.message}` });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1: Check if user exists in authModel or userModel
    let user = await authModel.findOne({ email });
    let modelType = "authModel";

    if (!user) {
      user = await userModel.findOne({ email });
      modelType = "userModel";
    }

    if (!user) {
      return res.status(400).json({
        message: "User email doesn't exist. Please register first.",
      });
    }

    // Step 2: Verify password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Password does not match. Please try again.",
      });
    }

    // Step 3: Generate tokens
    const access_token = createAccessToken({
      id: user._id,
      role: user.role,
      model: modelType, // Track which model the user belongs to
    });

    const refresh_token = createRefreshToken({
      id: user._id,
      role: user.role,
      model: modelType,
    });

    // Step 4: Store refresh token in a cookie
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      path: "/api/auth/refresh_token",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    // Step 5: Respond with user details
    res.status(200).json({
      message: "User logged in successfully.",
      access_token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        model: modelType,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in login due to ${error.message}`,
    });
  }
};

const logout = async (req, res) => {
  try {
    // Clearing the refresh token from cookie
    res.clearCookie("refresh_token", {
      path: "/api/auth/refresh_token",
    });

    // Response when successful
    return res.status(200).json({
      message: "User logged out successfully.",
    });
  } catch (error) {
    // Response when error
    return res.status(500).json({
      message: `Failed to logout the user. ${error.message}`,
    });
  }
};

// Creating access token again after login
const recreateAccessToken = async (req, res) => {
  try {
    // Taking refresh token from cookie
    const ref_token = req.cookies.refresh_token;

    // Checking refresh token
    if (!ref_token) {
      return res.status(400).json({
        message: "There is no refresh token. Please login now.",
      });
    }

    // Verify refresh token
    jwt.verify(ref_token, process.env.REFRESH_TOKEN, async (error, result) => {
      if (error) {
        return res.status(400).json({
          message: "Refresh token is invalid. Please login now.",
        });
      }

      // Check user
      const user = await userModel.findById(result.id);

      if (!user) {
        return res.status(400).json({
          message: "This user does not exist.",
        });
      }

      // Creating access token
      const access_token = createAccessToken({
        id: result.id,
      });

      // Response when successful
      return res.status(200).json({
        message: "Access token created successfully.",
        access_token,
      });
    });
  } catch (error) {
    // Response when error
    return res.status(400).json({
      message: `Failed to create access token. ${error.message}`,
    });
  }
};

const authUser = (req, res) => {
  res.status(200).json({
    message: "User is authenticated",
    valid: true,
  });
};

const authAdmin = (req, res) => {
  res.status(200).json({
    message: "Admin is authenticated",
    valid: true,
  });
};

// Creating access token
const createAccessToken = (payload) =>
  jwt.sign(payload, process.env.ACCESS_TOKEN, {
    expiresIn: "1d",
  });

// Creating refresh token
const createRefreshToken = (payload) =>
  jwt.sign(payload, process.env.REFRESH_TOKEN, {
    expiresIn: "30d",
  });

module.exports = {
  register,
  login,
  logout,
  recreateAccessToken,
  authAdmin,
  authUser,
};
