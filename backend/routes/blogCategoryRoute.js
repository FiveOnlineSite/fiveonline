const blogCategoryController = require("../controllers/blogCategoryController");
const express = require("express");
const authenticateAdmin = require("../middlewares/authenticateAdmin");

const route = express.Router();

route.post("/", blogCategoryController.createBlogCategory);

route.patch("/:id", blogCategoryController.updateBlogCategory);

route.get("/:id", blogCategoryController.getBlogCategory);

route.get("/", blogCategoryController.getAllBlogCategories);

route.delete("/:id", blogCategoryController.deleteBlogCategory);

module.exports = route;
