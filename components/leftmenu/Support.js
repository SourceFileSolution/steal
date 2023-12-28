import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Navbar from "../Navbar";
import { perfectSize } from "../Login";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Support = ({ navigation }) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ paddingLeft: perfectSize(15) }}
            onPress={() => navigation.pop()}
          >
            <Ionicons name="arrow-back" size={perfectSize(26)} color="black" />
          </TouchableOpacity>
          <View
            style={{
              flex: 2.9,
            }}
          >
            <Text style={styles.headings}>Support</Text>
          </View>
        </View>
        <View style={{ marginVertical: perfectSize(10) }}>
          <TouchableOpacity style={styles.box}>
            <View>
              <Text style={styles.Subheadings}>Get help</Text>
              <Text style={styles.content}>See FAQ abd Contact Support</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <MaterialCommunityIcons
                name="greater-than"
                size={perfectSize(22)}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <View>
              <Text style={styles.Subheadings}>Rate us</Text>
              <Text style={styles.content}>
                Loving our App ? Let us know by rating it !
              </Text>
              <Text style={styles.content}>
                Your feedback helps us to improve
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <MaterialCommunityIcons
                name="greater-than"
                size={perfectSize(22)}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Support;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: perfectSize(2),
  },
  header: {
    flexDirection: "row",
    marginVertical: 2,
    alignItems: "center",
    backgroundColor: "white",

    padding: perfectSize(5),
  },

  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
    alignSelf: "center",
    marginRight: perfectSize(40),
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: perfectSize(20),
    padding: perfectSize(10),
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  Subheadings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
    marginBottom: perfectSize(4),
  },
});
