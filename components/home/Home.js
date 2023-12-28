import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LeftMenu from "../LeftMenu";

import TabNavigation from "../TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const drawer = createDrawerNavigator();

  return (
    <drawer.Navigator
      drawerContent={(props) => <LeftMenu {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <drawer.Screen name="tabnavigation" component={TabNavigation} />
    </drawer.Navigator>
  );
};

export default Home;
