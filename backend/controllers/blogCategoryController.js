const blogCategoryModel = require("../models/blogCategoryModel");

const createBlogCategory = async (req, res) => {
  try {
    const { category } = req.body;

    const newCategory = await blogCategoryModel.create({
      category,
    });

    res.status(201).json({
      message: "Category created successfully.",
      category: newCategory,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to create category: ${error.message}` });
  }
};

const updateBlogCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;

    const user = await blogCategoryModel.findByIdAndUpdate(
      id,
      { category },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({ message: "Category updated successfully.", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to update category: ${error.message}` });
  }
};

const getBlogCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await blogCategoryModel.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json(category);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to fetch category: ${error.message}` });
  }
};

const getAllBlogCategories = async (req, res) => {
  try {
    const categories = await blogCategoryModel.find(); // Exclude passwords
    res.status(200).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to fetch categories: ${error.message}` });
  }
};

const deleteBlogCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await blogCategoryModel.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({
      message: "Category deleted successfully.",
      deletedCategory: category,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to delete category: ${error.message}` });
  }
};

module.exports = {
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  getAllBlogCategories,
};
