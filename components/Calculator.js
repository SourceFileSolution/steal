import React from "react";
import CalculatorContent from "./CalculatorContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LeftMenu from "./LeftMenu";
const Calculator = ({ navigation }) => {
  const drawer = createDrawerNavigator();
  return (
    <>
      <drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <LeftMenu {...props} />}
      >
        <drawer.Screen name="Notifications" component={CalculatorContent} />
      </drawer.Navigator>
    </>
  );
};

export default Calculator;
