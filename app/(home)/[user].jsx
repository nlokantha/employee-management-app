import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import moment from "moment";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";

const User = () => {

  const { name, id, designation, salary } = useLocalSearchParams();
  const [currentDate, setCurrentDate] = useState(moment());
  const [attendenceStatus,setAttendenceStatus] = useState("present")


  const goToNextDay = () => {
    const nextDay = moment(currentDate).add(1, "days");
    setCurrentDate(nextDay);
  };

  const goToPrevDate = () => {
    const prevDay = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDay);
  };

  const formatDate = (date) => {
    return date.format("MMMM D,YYYY");
  };

  const submitAttendence = async ()=>{
    try{
        const attendenceData ={
          // employeeId,employeeName,date,status
          employeeId:id,
          employeeName:name,
          date:currentDate.format("MMMM D,YYYY"),
          status:attendenceStatus
        }

        const response = await axios.post("http://192.168.202.187:3000/auth/martAttendence",attendenceData)
        
        if(response.status == 200){
          Alert.alert(`Attendence Submitted Successfully for ${name}`)
        }

    }catch(e){
        console.log(e)
        Alert.alert("Attendence Failed to  submitted !")
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <AntDesign
            onPress={goToPrevDate}
            name="left"
            size={24}
            color="black"
          />
          <Text>{formatDate(currentDate)}</Text>
          <AntDesign
            onPress={goToNextDay}
            name="right"
            size={24}
            color="black"
          />
        </View>
      </View>
      <Pressable style={{marginHorizontal:12,marginVertical:10,gap:10,flexDirection:"row"}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 8,
              padding: 10,
              backgroundColor: "#4b6cb7",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.avatarText}>{name?.charAt(0)}</Text>
          </View>
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.designationText}>
              {designation} ({id})
            </Text>
          </View>
      </Pressable>
      <Text style={{marginHorizontal:12,fontSize:16,fontWeight:"500"}}>Basic Pay - {salary}</Text>
      <View>
        <Text style={{marginHorizontal:12,fontSize:16,fontWeight:"500",marginTop:7,letterSpacing:3}}>ATTENDENCE</Text>
      </View>
      <View style={{flexDirection:"row",gap:16,alignItems:"center",marginHorizontal:12}}>
        <Pressable onPress={()=>setAttendenceStatus("present")} style={{borderRadius:8,backgroundColor:"#C4E0E5",padding:10,flexDirection:"row",gap:10,alignItems:"center",flex:1}}>
            {
                attendenceStatus == "present" ? (
                    <FontAwesome5 name="dot-circle" size={24} color="black"/>
                ):(
                    <Entypo name="circle" size={24} color={"black"}/>
                )
            }
            <Text>Present</Text>
        </Pressable>
        <Pressable onPress={()=>setAttendenceStatus("absent")} style={{borderRadius:8,backgroundColor:"#C4E0E5",padding:10,flexDirection:"row",gap:10,alignItems:"center",flex:1}}>
            {
                attendenceStatus == "absent" ? (
                    <FontAwesome5 name="dot-circle" size={24} color="black"/>
                ):(
                    <Entypo name="circle" size={24} color={"black"}/>
                )
            }
            <Text>Absent</Text>
        </Pressable>
      </View>
      <View style={{flexDirection:"row",gap:16,alignItems:"center",marginVertical:10,marginHorizontal:12}}>
        <Pressable onPress={()=>setAttendenceStatus("halfday")} style={{borderRadius:8,backgroundColor:"#C4E0E5",padding:10,flexDirection:"row",gap:10,alignItems:"center",flex:1}}>
            {
                attendenceStatus == "halfday" ? (
                    <FontAwesome5 name="dot-circle" size={24} color="black"/>
                ):(
                    <Entypo name="circle" size={24} color={"black"}/>
                )
            }
            <Text>Halfday</Text>
        </Pressable>
        <Pressable onPress={()=>setAttendenceStatus("holiday")} style={{borderRadius:8,backgroundColor:"#C4E0E5",padding:10,flexDirection:"row",gap:10,alignItems:"center",flex:1}}>
            {
                attendenceStatus == "holiday" ? (
                    <FontAwesome5 name="dot-circle" size={24} color="black"/>
                ):(
                    <Entypo name="circle" size={24} color={"black"}/>
                )
            }
            <Text>Holiday</Text>
        </Pressable>
      </View>
      <View style={{flexDirection:"row",marginHorizontal:12,marginVertical:8,gap:10}}>
        <TextInput style={{padding:10,borderWidth:1,borderColor:"#E0E0E0",borderRadius:10,flex:1}} placeholder="Advance/Loans" placeholderTextColor="black"/>
        <TextInput style={{padding:10,borderWidth:1,borderColor:"#E0E0E0",borderRadius:10,flex:1}} placeholder="Extra Bonus" placeholderTextColor="black"/>
      </View>
      <Pressable onPress={submitAttendence} style={{padding:10,marginHorizontal:12,backgroundColor:"#00c6ef",marginVertical:10,borderRadius:10}}>
        <Text style={{color:"white",textAlign:"center"}}>
            Submit
        </Text>
      </Pressable>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    marginHorizontal: "auto",
    marginVertical: 20,
    alignItems: "center",
    gap: 10,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  designationText: {
    color: "#555",
    fontSize: 14,
  },
});
