const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

const blogCategoryModel = mongoose.model("BlogCategory", blogCategorySchema);

module.exports = blogCategoryModel;
