import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Navbar from "../Navbar";
import { perfectSize } from "../Login";
import { Ionicons } from "@expo/vector-icons";
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
});
