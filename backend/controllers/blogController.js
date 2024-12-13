const blogModel = require("../models/blogModel");

const createBlog = async (req, res) => {
  try {
    const { title, metaTitle, metaDescription, blogcategory, blocks } =
      req.body;

    if (!title || !metaTitle || !metaDescription || !blogcategory) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Parse blocks if sent as a JSON string
    const parsedBlocks = Array.isArray(blocks)
      ? blocks
      : JSON.parse(blocks || "[]");

    // Validate blocks
    for (const block of parsedBlocks) {
      const { blockType, content } = block;

      if (!blockType || !content) {
        return res
          .status(400)
          .json({ message: "Each block must have a blockType and content." });
      }

      switch (blockType) {
        case "h1":
        case "h2":
        case "h3":
        case "p":
          if (typeof content !== "string") {
            return res
              .status(400)
              .json({ message: `Content for ${blockType} must be a string.` });
          }
          break;

        case "image":
          if (!req.files || !req.files[block.content]) {
            return res.status(400).json({
              message: `Image upload required for blockType: ${blockType}.`,
            });
          }
          block.content = req.files[block.content][0].path; // Save image path
          break;

        case "custom code":
          // Basic validation for HTML content
          const htmlRegex = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
          if (!htmlRegex.test(content)) {
            return res
              .status(400)
              .json({ message: "Invalid HTML content for custom code block." });
          }
          break;

        default:
          return res.status(400).json({
            message: `Unsupported blockType: ${blockType}. Allowed types are h1, h2, h3, p, image, custom code.`,
          });
      }
    }

    // Handle the uploaded files for the banner and thumbnail
    const banner =
      req.files && req.files.banner ? req.files.banner[0].path : "";
    const thumbnail =
      req.files && req.files.thumbnail ? req.files.thumbnail[0].path : "";

    const newBlog = await blogModel.create({
      title,
      metaTitle,
      metaDescription,
      banner,
      thumbnail,
      blogcategory,
      blocks: parsedBlocks,
    });

    res.status(201).json({
      message: "Blog created successfully.",
      blog: {
        id: newBlog._id,
        title: newBlog.title,
        metaTitle: newBlog.metaTitle,
        metaDescription: newBlog.metaDescription,
        banner: newBlog.banner,
        thumbnail: newBlog.thumbnail,
        blogcategory: newBlog.blogcategory,
        blocks: newBlog.blocks,
        createdAt: newBlog.createdAt,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to create blog: ${error.message}` });
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

    res
      .status(200)
      .json({ message: "Category deleted successfully.", deletedUser: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to delete category: ${error.message}` });
  }
};

module.exports = {
  createBlog,
  updateBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  getAllBlogCategories,
};
