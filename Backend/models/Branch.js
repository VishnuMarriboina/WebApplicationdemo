const mongoose = require("mongoose");

const branchSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  manager: {
    type: String,
    required: true,
  },
  staff: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Branch", branchSchema, "branches");
