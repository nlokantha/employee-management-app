import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SearchResult from "@/components/SearchResult";

const Employees = () => {
  const router = useRouter();
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.202.187:3000/auth/employees"
      );
      setEmployees(response.data.data);
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
          gap: 10,
        }}
      >
        <Pressable onPress={() => router.back()}>
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
            flex:1
          }}
        >
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholder="Search"
            style={{flex:1}}
          />
          {employees.length > 0 ? (
            <View>
              <Pressable>
                <AntDesign name="pluscircle" size={24} color="black" />
              </Pressable>
            </View>
          ) : null}
        </Pressable>
      </View>
      {employees.length > 0 ? (
        <SearchResult data={employees} input={input} setInput={setInput} />
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>No Data</Text>
          <Text>Press on the pluse button and add your employee</Text>
          <Pressable style={{marginTop:30}} onPress={() => router.push("/(home)/addDetails")}>
            <AntDesign name="pluscircle" size={24} color="#0072b1" />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({});
