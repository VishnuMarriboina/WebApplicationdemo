const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
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
  industry: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  headquarters: {
    type: String,
    required: true,
  },
  establishedYear: {
    type: Number,
    required: true,
  },
  chairman: {
    type: String,
    required: true,
  },
  CEO: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Company", companySchema, "companies");
