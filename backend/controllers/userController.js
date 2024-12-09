const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { name, email, password, role = "editor" } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res
      .status(201)
      .json({ message: "User created successfully.", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to create user: ${error.message}` });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const user = await userModel.findByIdAndUpdate(
      id,
      { name, email, role },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User updated successfully.", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to update user: ${error.message}` });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `Failed to fetch user: ${error.message}` });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password"); // Exclude passwords
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to fetch users: ${error.message}` });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully.", deletedUser: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to delete user: ${error.message}` });
  }
};

module.exports = { createUser, updateUser, deleteUser, getUser, getAllUsers };
