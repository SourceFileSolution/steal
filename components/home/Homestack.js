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
  const [isLoading,setIsLoading]=useState(true);
  const[products,setProducts]=useState([]);
  const[banners,setBanners]=useState([]);
  const[brands,setBrands]=useState([]);
  
  useEffect(()=>{
    fetchHomeData();
  },[])

  const fetchHomeData=async ()=>{

    setIsLoading(true)

    // let token =await AsyncStorage.getItem('token');
    // token?token=token:token="guest user";

    try {
      const response = await axios({
            method: 'get',
            url: "https://sourcefilesolutions.com/steelghar/console/api/home-data",
           
            headers: {
                "Content-Type": "multipart/form-data",
                // Authorization: 'Bearer ' + crmToken,
            },
        });

if(response.data.status=="success"){
  console.log(444444444)
  const homeData=response.data.homeData;
  setProducts(homeData.latestProducts)
  setBanners(homeData.banners)
  setBrands(homeData.brands)
console.log(homeData);

}


    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

 
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="home" component={()=><HomeContent banners={banners} products={products} brands={brands}/>} />
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
  );
};

export default Homestack;
