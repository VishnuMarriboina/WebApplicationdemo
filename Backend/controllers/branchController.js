const { get } = require("mongoose");
const Branch = require("../models/Branch");

const createBranch = async (req, res) => {
  const { company, ...branchData } = req.body;

  if (!company) {
    return res.status(400).json({ error: "companyId is required" });
  }

  try {
    const branch = new Branch({ ...branchData, company });
    await branch.save();
    res.status(201).send(branch);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getBranches = async (req, res) => {
  const { company } = req.body;

  if (!company) {
    return res.status(400).json({ error: "companyId is required" });
  }

  try {
    const branches = await Branch.find({ company });
    res.status(200).send(branches);
  } catch (e) {
    res.status(500).send({ error: "Internal server error" });
  }
};

// Get a single branch by companyId and branchId
const getSingleBranch = async (req, res) => {
  const { company, branchId } = req.body;
  console.log("branchId", branchId);
  console.log("companyId", company);
  if (!company || !branchId) {
    return res
      .status(400)
      .json({ error: "Both companyId and branchId are required" });
  }

  try {
    const branch = await Branch.findOne({ _id: branchId, company });

    if (!branch) {
      return res.status(404).json({ error: "Branch not found" });
    }

    res.status(200).send(branch);
  } catch (e) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { createBranch, getBranches, getSingleBranch };
