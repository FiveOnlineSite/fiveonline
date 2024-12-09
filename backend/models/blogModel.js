const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  blogcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BlogCategory",
    required: true,
  },
  blocks: [
    {
      blockType: {
        type: String, // "h1", "h2", "p", "image", etc.
        required: true,
      },
      content: {
        type: mongoose.Schema.Types.Mixed, // Allows flexibility for different block types
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Blog", blogSchema);
