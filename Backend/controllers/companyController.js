const { get } = require("mongoose");
const Company = require("../models/Company");

const createCompany = async (req, res) => {
  const company = new Company(req.body);
  try {
    await company.save();
    res.status(201).send(company);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({});
    res.send(companies);
  } catch (e) {
    res.status(500).send();
    console.log("err", e);
  }
};
const getSingleCompany = async (req, res) => {
  const { company } = req.body;
  try {
    const company = await Company.findOne({ _id: company });
    res.status(200).send(company);
  } catch (e) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { createCompany, getCompanies,getSingleCompany };
