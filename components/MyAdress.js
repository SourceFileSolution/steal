import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Navbar from "./Navbar";

const MyAdress = ({ navigation }) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <View style={styles.container}>
        <Text>MyAdress</Text>
      </View>
    </>
  );
};

export default MyAdress;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
