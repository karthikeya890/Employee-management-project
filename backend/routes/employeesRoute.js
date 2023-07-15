const express = require("express");
const router = express.Router();
const {
  getAllEmployees,
  editEmployeeDetails,
  deleteEmployee,
  addEmployee,
} = require("../controllers/employeesController");

router.route("/").get(getAllEmployees);
router.route("/:id").put(editEmployeeDetails);
router.route("/:id").delete(deleteEmployee);
router.route("/").post(addEmployee);
module.exports = router;
