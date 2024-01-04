import React,{useState,useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";

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
import Signup from "../Signup";
import Login from "../Login";
import FabricatorRegistrations from "../FabricatorRegistrations";
import axios from "axios";
const Homestack = () => {
  const stack = createStackNavigator();

  const [cart, setCart] = useState();
  const [wishlist, setWishlist] = useState();
  // const drawer = createDrawerNavigator();


 
  return (
    <>
    {/* {
      isLoading ? "lo":"no"
    } */}
     <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="home" component={()=><HomeContent />} />
      <stack.Screen name="Wishlist" component={Wishlist3} />
      <stack.Screen name="Cart" component={Cart1} />
      <stack.Screen name="leftmenu" component={LeftMenu} />
      <stack.Screen name="Aboutus" component={Aboutus} />
      <stack.Screen name="ExpertAdvice" component={ExpertAdvice} />
      <stack.Screen name="Support" component={Support} />
      <stack.Screen name="Signupuser" component={Signup} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen
        name="FabricatorSignup"
        component={FabricatorRegistrations}
      />
    </stack.Navigator>
    </>
   
  );
};

export default Homestack;
