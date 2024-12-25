const Employee = require("../models/employee");

const registerEmployee = async (req, res) => {
  try{
    const {
        employeeId,
        employeeName,
        designation,
        joiningDate,
        dateOfBirth,
        salary,
        activeEmployee,
        phoneNumber,
        address,
      } = req.body;

      const newEmployee = new Employee({
        employeeId,
        employeeName,
        designation,
        joiningDate,
        dateOfBirth,
        salary,
        activeEmployee,
        phoneNumber,
        address,
      })

      await newEmployee.save()

      res.status(200).json({
        success:true,
        message:"new Employee registerd successfully",
        employee:newEmployee
      })
  }catch(error){
    console.log(error)
    res.status(500).json({
        success:false,
        message:"some error occured"
    })
  }
};

const fetchEmployees = async (req,res)=>{
    try{
        const employees = await Employee.find({})

        if(employees){
            res.status(200).json({
                success:true,
                message:"fetching successfully",
                data:employees,
            })
        }

    }catch(error){
        console.log(error)
    res.status(500).json({
        success:false,
        message:"some error occured"
    })
    }
}

module.exports = {
    registerEmployee,
    fetchEmployees
}
