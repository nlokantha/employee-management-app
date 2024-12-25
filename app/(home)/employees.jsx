import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Employees = () => {
    const [employees,setEmployees] = useState();
    const fetchEmployeeData = async ()=>{
      try{
          const response = await axios.get("http://192.168.1.187:3000/api/get/employees")
          setEmployees(response.data)

      }catch(error){
          console.log(error)
      }
  }
    useEffect(()=>{
        fetchEmployeeData()
    },[])
    console.log(employees)

  return (
    <View>
      <Text>Employees</Text>
    </View>
  )
}

export default Employees

const styles = StyleSheet.create({})