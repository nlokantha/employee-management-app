import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Employees = () => {
  const router = useRouter()
  const [employees, setEmployees] = useState();
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.187:3000/api/get/employees"
      );
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEmployeeData();
  }, []);
  console.log(employees);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Pressable onPress={()=>router.back()}>
          <Ionicons
            style={{ marginLeft: 10 }}
            name="arrow-back"
            size={34}
            color="black"
          />
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            height: 40,
            marginHorizontal: 7,
            backgroundColor: "white",
          }}
        >
          <AntDesign name="search1" size={24} color="black" />
          <TextInput placeholder="Search" />
        </Pressable>
      </View>
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({});
