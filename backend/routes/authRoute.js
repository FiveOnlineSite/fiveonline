const authController = require("../controllers/authController");
const express = require("express");
const authenticateAdmin = require("../middlewares/authenticateAdmin");

const route = express.Router();

route.post("/register", authController.register);

route.post("/login", authenticateAdmin, authController.login);

route.post("/logout", authenticateAdmin, authController.logout);

route.post("/refresh_token", authController.recreateAccessToken);

route.get("/user", authController.authUser);

route.get("/admin", authenticateAdmin, authController.authAdmin);

module.exports = route;
