import { View, Text } from "react-native";
import React from "react";
import Navbar from "./Navbar";

const CalculatorContent = ({ navigation }) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <View>
        <Text>CalculatorContent</Text>
      </View>
    </>
  );
};

export default CalculatorContent;
