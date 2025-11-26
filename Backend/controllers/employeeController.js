const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(201).send(employee);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.send(employees);
  } catch (e) {
    res.status(500).send();
  }
};
const getSingleEmployee = async (req, res) => {
  const { employeeId } = req.body;
  console.log("employee", employeeId);
  try {
    const employee = await Employee.findOne({ _id: employeeId });
    res.status(200).send(employee);
  } catch (e) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { createEmployee, getEmployees, getSingleEmployee };
