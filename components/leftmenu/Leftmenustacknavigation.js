import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LeftMenu from "../LeftMenu";
import Aboutus from "./Aboutus";
const Leftmenustacknavigation = () => {
  const stack = createStackNavigator();
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default Leftmenustacknavigation;
