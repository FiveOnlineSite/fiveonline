const blogController = require("../controllers/blogController");
const express = require("express");
const authenticateAdmin = require("../middlewares/authenticateAdmin");
const multer = require("multer");

const route = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/blog"); // Specify the folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Use a unique file name to avoid overwriting
  },
});

// Add a file filter to accept only .webp images
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/webp") {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only .webp images are allowed."), false); // Reject the file
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

route.post(
  "/",
  upload.fields([
    { name: "banner", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
    { name: "blockImages" },
  ]),
  blogController.createBlog
);

module.exports = route;
