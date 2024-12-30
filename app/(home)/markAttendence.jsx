import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const MarkAttendence = () => {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(moment());
  const [employees, setEmployees] = useState([]);
  const [attendence, setAttendence] = useState([]);

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
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.202.187:3001/auth/employees"
      );
      setEmployees(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchAttendenceData = async () => {
    try {
      const response = await axios.get(
        `http://192.168.202.187:3001/auth/getAttendence`,
        {
          params: {
            date: currentDate.format("MMMM D,YYYY"),
          },
        }
      );

      console.log(response.data.data);
      setAttendence(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAttendenceData();
  }, [currentDate]);

  return (
    <View style={styles.container}>
      <Pressable>
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
      </Pressable>
      {/* employee list */}

      <View style={{ marginHorizontal: 12 }}>
        {employees.map((item, index) => (
          <Pressable
            onPress={() => {
              router.push({
                pathname: "/[user]",
                params: {
                  name: item?.employeeName,
                  id: item?.employeeId,
                  salary: item?.salary,
                  designation: item?.designation,
                },
              });
            }}
            key={index}
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
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
              <Text style={styles.avatarText}>
                {item?.employeeName?.charAt(0)}
              </Text>
            </View>
            <View>
              <Text style={styles.nameText}>{item?.employeeName}</Text>
              <Text style={styles.designationText}>
                {item?.designation} ({item?.employeeId})
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default MarkAttendence;

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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  designationText: {
    color: '#555',
    fontSize: 14,
  },
});
