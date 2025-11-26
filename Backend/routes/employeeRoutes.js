const express = require("express");
const router = express.Router();

const {
  createEmployee,
  getEmployees,
  getSingleEmployee,
} = require("../controllers/employeeController");

router.post("/createemploye", createEmployee);
router.post("/allemployeesdetails", getEmployees);
router.post("/singleemployeedetails", getSingleEmployee);

module.exports = router;
