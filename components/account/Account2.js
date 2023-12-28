import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Navbar from "../Navbar";
import { perfectSize } from "../Login";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
const Account2 = ({ navigation }) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <ScrollView>
        <View style={style.container}>
          <View style={style.firstContainer}>
            <Text style={[style.headings, { color: "green" }]}>HelloUser</Text>
          </View>
          <TouchableOpacity style={style.pma}>
            <View>
              <Text style={style.content}>Profile</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="greater-than"
                size={perfectSize(20)}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.pma}>
            <View>
              <Text style={style.content}>Myorders</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="greater-than"
                size={perfectSize(20)}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.pma}>
            <View>
              <Text style={style.content}>Address Book</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="greater-than"
                size={perfectSize(20)}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <View style={style.secondcontainer}>
            <Text style={style.SubHeading}>Account Settings </Text>
            <View style={style.Notification}>
              <Ionicons
                name="notifications-outline"
                size={perfectSize(22)}
                color="black"
              />
              <Text style={style.content}> Notification Settings</Text>
            </View>
            <View style={style.Notification}>
              <Ionicons
                name="md-headset-outline"
                size={perfectSize(22)}
                color="black"
              />
              <Text style={style.content}> Help Center</Text>
            </View>
            <View style={style.Notification}>
              <Ionicons
                name="wallet-outline"
                size={perfectSize(22)}
                color="black"
              />
              <Text style={style.content}> Saved Cards & Wallet</Text>
            </View>
          </View>
          <View style={style.secondcontainer}>
            <Text style={style.SubHeading}>My Activity</Text>
            <View style={style.Notification}>
              <Ionicons
                name="wallet-outline"
                size={perfectSize(22)}
                color="black"
              />
              <Text style={style.content}>Reviews</Text>
            </View>
            <View style={style.Notification}>
              <Ionicons
                name="wallet-outline"
                size={perfectSize(22)}
                color="black"
              />
              <Text style={style.content}>Q & A's</Text>
            </View>
          </View>
          <View style={style.thirdcontainer}>
            <Text style={style.SubHeading}>Earn With Steel Ghar</Text>
            <TouchableOpacity style={style.signup}>
              <Text style={[style.content, { color: "white" }]}>
                Signup as Fabricator
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.thirdcontainer}>
            <Text style={style.SubHeading}>Feedback / Information</Text>
            <View style={style.Notification}>
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={perfectSize(22)}
                color="black"
              />
              <Text style={style.content}> Terms , Policy and License</Text>
            </View>
            <View style={style.Notification}>
              <FontAwesome
                name="question-circle-o"
                size={perfectSize(22)}
                color="black"
              />
              <Text style={style.content}> FAQ's</Text>
            </View>
          </View>
          <View style={style.logContainer}>
            <TouchableOpacity style={style.button}>
              <Text style={[style.content, { color: "white" }]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Account2;
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: perfectSize(2),
  },
  firstContainer: {
    backgroundColor: "white",
    padding: perfectSize(10),
    alignItems: "center",
  },
  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(18),
  },
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  pma: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: perfectSize(10),
    padding: perfectSize(10),
  },
  secondcontainer: {
    backgroundColor: "white",
    marginTop: perfectSize(10),
    padding: perfectSize(10),
  },
  SubHeading: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
  },
  thirdcontainer: {
    backgroundColor: "white",
    marginTop: perfectSize(10),
    padding: perfectSize(10),
  },
  button: {
    backgroundColor: "red",
    width: perfectSize(120),
    height: perfectSize(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  logContainer: {
    margin: perfectSize(20),
    justifyContent: "center",
    alignItems: "center",
  },
  Notification: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: perfectSize(10),
  },
  signup: {
    backgroundColor: "red",
    width: perfectSize(180),
    justifyContent: "center",
    alignItems: "center",
    height: perfectSize(30),
    borderRadius: perfectSize(5),
    marginVertical: perfectSize(10),
  },
});
