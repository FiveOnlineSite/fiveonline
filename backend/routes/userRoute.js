const userController = require("../controllers/userController");
const express = require("express");
const adminMiddleware = require("../middlewares/authenticateAdmin");
const authorizeRole = require("../middlewares/authorizeRole");

const route = express.Router();

route.post(
  "/",
  adminMiddleware,
  authorizeRole("admin"),
  userController.createUser
);

route.patch("/:id", userController.updateUser);

route.delete("/:id", userController.deleteUser);

route.get("/:id", userController.getUser);

route.get("/", userController.getAllUsers);

module.exports = route;
