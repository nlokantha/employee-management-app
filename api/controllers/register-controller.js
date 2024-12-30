const Employee = require("../models/employee");
const Attendence = require("../models/attendence")
const moment = require("moment")

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

const markAttendence = async (req,res)=>{
  try{
    const {employeeId,employeeName,date,status} = req.body
    const existingAttendence = await Attendence.findOne({employeeId,date})

    if(existingAttendence){
      existingAttendence.status = status
      await existingAttendence.save()
      res.status(200).json({
        success:true,
        data:existingAttendence
      })
    }else{
      const newAttendence = new Attendence({
        employeeId,employeeName,date,status
      })
      await newAttendence.save()
      res.status(200).json({
        success:true,
        data:newAttendence
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

const getAttendence = async (req,res)=>{
  try{
    const {date} = req.query

    const attendenceData = await Attendence.find({date:date})

    if(attendenceData){
      res.status(200).json({
        success:true,
        data:attendenceData
      })
    }

  }catch(error){
    console.log(error);
    res.status(500).json({
      success:false,
      message:"error in get Attendence"
    })
    
  }
}

const getAttendenceReport = async (req,res)=>{
  try{
    const {month,year} = req.query
    console.log("req query params ",month,year)

    const startDate = moment(`${year}-${month}-01`,"YYYY-MM-DD").startOf("month").toDate()
    const endDate = moment(startDate).endOf("month").toDate()

    const report = await Attendence.aggregate([
      {
        $match:{
          $expr:{
            $and:[
              {
                $eq:[
                  {
                    $month :{ $dateFromString :{ dateString : "$date"}},
                  },
                  parseInt(req.query.month)
                ]
              },
              {
                $eq:[
                  {
                    $year :{ $dateFromString :{ dateString : "$year"}},
                  },
                  parseInt(req.query.year)
                ]
              }
            ]
          }
        }
      },
      {
        $group:{
          _id:"employeeId",
          present:{
            $sum : {
              $cond: { if: {$eq :["status","present"]},then:1,else:0}
            }
          },
          absent:{
            $sum : {
              $cond: { if: {$eq :["status","absent"]},then:1,else:0}
            }
          },
          halfday:{
            $sum : {
              $cond: { if: {$eq :["status","halfday"]},then:1,else:0}
            }
          },
          holiday:{
            $sum : {
              $cond: { if: {$eq :["status","holiday"]},then:1,else:0}
            }
          },

        }
      },
      {
        $lookup:{
          from:"employees",
          localField:"_id",
          foreignField:"employeeId",
          as:"employeeDetails"
        }
      },
      {
        $unwind:"$employeeDetails"
      },
      {
        $project:{
          _id:1,
          present:1,
          absent:1,
          halfday:1,
          name:"$employeeDetails.employeeId",
          designation:"$employeeDetails.designation",
          salary:"$employeeDetails.salary",
          employeeId:"$employeeDetails.employeeId"
        }
      }
    ])

    res.status(200).json({
      success:true,
      data:report
    })

  }catch(e){
    console.log(e)
    res.status(500).json({
      success:false,
      message:"some error occure"
    })

  }
}

module.exports = {
    registerEmployee,
    fetchEmployees,
    markAttendence,
    getAttendence,
    getAttendenceReport
}
