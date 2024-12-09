const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
  },
  review: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const testimonialModel = mongoose.model("Testimonial", testimonialSchema);

module.exports = testimonialModel;
