const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["editor", "admin"],
    default: "editor",
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
