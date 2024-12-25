const express = require("express")
const router = express.Router()
const {registerEmployee,fetchEmployees} = require("../controllers/register-controller")

router.post("/register",registerEmployee)
router.get("/employees",fetchEmployees)


module.exports = router