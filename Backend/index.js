const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const companyRoutes = require("./routes/companyRoutes");
const branchRoutes = require("./routes/branchRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
dotenv.config();
const app = express();
// to connect mongoDB compass
mongoose
  .connect(process.env.MDB_URI)
  .then(() => {
    console.log("Connected to MongoDB Compass Successfully");
  })
  .catch((err) => {
    console.log("Failed to connect MongoDB Compass", err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/companies", companyRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/employees", employeeRoutes);

app.listen(5500, () => {
  console.log("Server is running  http://localhost:5500");
});
