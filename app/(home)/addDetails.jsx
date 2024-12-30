import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const AddDetails = () => {
    const [name,setName] = useState("")
    const [employeeId,setEmployeeId] = useState("")
    const [dob,setDob] = useState("")
    const [mobileNo,setMobileNo] = useState("")
    const [joiningDate,setJoiningDate] = useState("")
    const [salary,setSalary] = useState("")
    const [address,setAddress] = useState("")
    const [designation,setDesignation] = useState("")

    const handleRegister =async ()=>{
        try{
            const employeeData = {
                employeeName:name,
                employeeId:employeeId,
                designation:designation,
                phoneNumber:mobileNo,
                dateOfBirth:dob,
                joiningDate:joiningDate,
                activeEmployee:true,
                salary:salary,
                address:address
            }
    
           const response =await axios.post("http://192.168.202.187:3000/auth/register",employeeData)
           if(response){
            Alert.alert("Registration Successful","You have been registered Successfully")

            setName("")
            setEmployeeId("")
            setDob("")
            setMobileNo("")
            setJoiningDate("")
            setSalary("")
            setAddress("")
            setDesignation("")
           }else{
            Alert.alert("Registration Fail","An error occurred")
           }

        }catch(error){
console.log(error)
        }
    }
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a New Employee
        </Text>

        <TextInput
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="Sri Lanka"
          placeholderTextColor="black"
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Full Name (First and Last Name)
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter your name"
            placeholderTextColor="black"
            value={name}
            onChangeText={(text)=>setName(text)}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Employee Id
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Employee Id"
            placeholderTextColor="black"
            value={employeeId}
            onChangeText={(text)=>setEmployeeId(text)}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Designation
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Designation"
            placeholderTextColor="black"
            value={designation}
            onChangeText={(text)=>setDesignation(text)}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Mobile Number
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Mobile Number"
            placeholderTextColor="black"
            value={mobileNo}
            onChangeText={(text)=>setMobileNo(text)}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Date Of Birth
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Date Of Birth"
            placeholderTextColor="black"
            value={dob}
            onChangeText={(text)=>setDob(text)}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Joining Date
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Joining Date"
            placeholderTextColor="black"
            value={joiningDate}
            onChangeText={(text)=>setJoiningDate(text)}
          />
        </View>

        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10}}>
            <Text>Active Employee</Text>
            <Text>True</Text>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Salary
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Salary"
            placeholderTextColor="black"
            value={salary}
            onChangeText={(text)=>setSalary(text)}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Address
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Address"
            placeholderTextColor="black"
            value={address}
            onChangeText={(text)=>setAddress(text)}
          />
        </View>

        <Pressable onPress={handleRegister} style={{backgroundColor:"#ABCABA",padding:10,marginTop:20,justifyContent:"center",alignItems:"center",borderRadius:5}}>
            <Text style={{fontWeight:"bold",color:"white"}}>Add Employee</Text>
        </Pressable>

      </View>
    </ScrollView>
  );
};

export default AddDetails;

const styles = StyleSheet.create({});
