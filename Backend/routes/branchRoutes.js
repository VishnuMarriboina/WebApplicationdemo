const express = require("express");
const router = express.Router();

const {
  getBranches,
  createBranch,
  getSingleBranch,
} = require("../controllers/branchController");

router.post("/createbranches", createBranch);
router.post("/allbranchesdetails", getBranches);
router.post("/singlebranchdetails", getSingleBranch);

module.exports = router;
