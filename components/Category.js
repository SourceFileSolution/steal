import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryContent from "./CategoryContent";
import SubCategory from "./SubCategory";
import Division from "./Division";
import SubDivision from "./SubDivision";
import Products from "./Products";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
const Category = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const stack = createStackNavigator();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Shop By Category" component={CategoryContent} />
      <stack.Screen name="SubCategory" component={SubCategory} />
      <stack.Screen name="Division" component={Division} />
      <stack.Screen name="Subdivision" component={SubDivision} />
      <stack.Screen name="Products" component={Products} />
    </stack.Navigator>
  );
};

export default Category;
