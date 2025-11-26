const express = require("express");
const router = express.Router();

const {
  createCompany,
  getCompanies,
  getSingleCompany,
} = require("../controllers/companyController");

router.post("/createcompanies", createCompany);
router.get("/allcompaniesdetails", getCompanies);
router.post("/singlecompanydetails", getSingleCompany);

module.exports = router;
