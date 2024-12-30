const express = require("express")
const router = express.Router()
const {registerEmployee,fetchEmployees,markAttendence,getAttendence,getAttendenceReport} = require("../controllers/register-controller")

router.post("/register",registerEmployee)
router.get("/employees",fetchEmployees)
router.post("/martAttendence",markAttendence)
router.get("/getAttendence",getAttendence)



module.exports = router