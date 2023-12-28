import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import HomeContent from "./HomeContent";

import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Wishlist2 from "./Wishlist2";
import Cart1 from "./Cart1";
import Wishlist3 from "./Wishlist3";
import MyAdress from "../MyAdress";
import LeftMenu from "../LeftMenu";
import Aboutus from "../leftmenu/Aboutus";
import ExpertAdvice from "../leftmenu/ExpertAdvice";
import Support from "../leftmenu/Support";

const Homestack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="home" component={HomeContent} />
      <stack.Screen name="Wishlist" component={Wishlist2} />

      <stack.Screen name="Cart" component={Cart} />
      <stack.Screen name="leftmenu" component={LeftMenu} />
      <stack.Screen name="Aboutus" component={Aboutus} />
      <stack.Screen name="ExpertAdvice" component={ExpertAdvice} />
      <stack.Screen name="Support" component={Support} />
    </stack.Navigator>
  );
};

export default Homestack;
