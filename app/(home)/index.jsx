import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter()
  return (
    <ScrollView>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} styles={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text>Employee Management System</Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
            onPress={()=>router.push("/(home)/employees")}
              style={{
                backgroundColor: "#D3CCE3",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#D3CCE3",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Mark Attendence
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 7,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 7,
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                Attendence Report
              </Text>
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 7,
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                Summary Report
              </Text>
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 7,
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                All Generate Report
              </Text>
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 7,
                flexDirection: "row",
                alignItems: "center",
                padding: 12,
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                Overtime Employees
              </Text>
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:12}}>
            <View
              style={{
                backgroundColor: "#f79d00",
                borderRadius: 7,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex:1
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{marginTop:7}}>Attendence Criteria</Text>
            </View>
            <View
              style={{
                backgroundColor: "#ABCABA",
                borderRadius: 7,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex:1
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Feather
                  name="bar-chart"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{marginTop:7}}>Increased Workflow</Text>
            </View>
          </View>
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:12}}>
            <View
              style={{
                backgroundColor: "#D3CCE3",
                borderRadius: 7,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex:1
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{marginTop:7}}>Cost Savings</Text>
            </View>
            <View
              style={{
                backgroundColor: "#BDC3C7",
                borderRadius: 7,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex:1
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  backgroundColor: "white",
                }}
              >
                <Feather
                  name="bar-chart"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{marginTop:7}}>Employee Performance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
