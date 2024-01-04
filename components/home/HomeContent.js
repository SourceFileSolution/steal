import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

import LatestProducts from "../LatestProducts";
import HomeCatogory from "../HomeCatogory";
import Navbar from "../Navbar";
import { perfectSize } from "../Login";
import Brand from "./Brand";
import ImageCarousel from "./Slider";
import axios from "axios";
import LoaderPage from "../../LoaderPage";

const HomeContent = ({navigation}) => {
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
  // console.log(444444444)
  const homeData=response.data.homeData;
  setProducts(homeData.latestProducts)
  setBanners(homeData.banners)
  setBrands(homeData.brands)
// console.log(homeData);

}


    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <>
    {isLoading?<LoaderPage/>:(
      < >
      <View>
        <Navbar navigation={navigation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
      
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchHomeData} />
      }
      >
        <View style={style.container}>
          <View style={style.inputcontainer}>
            <TextInput
              placeholder="Search something........"
              style={style.input}
            />
            <TouchableOpacity>
              <EvilIcons name="search" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <ImageCarousel banners={banners}/>
          <LatestProducts products={products}/>
          <Brand brands={brands} />
          <HomeCatogory />
        </View>
      </ScrollView>
    </>
    )}
    </>
  );
};

export default HomeContent;
const style = StyleSheet.create({
  container: {
    paddingVertical: perfectSize(15),
  },
  inputcontainer: {
    marginHorizontal: perfectSize(15),
    flexDirection: "row",
    backgroundColor: "white",
    padding: perfectSize(15),
    borderRadius: perfectSize(10),
  },
  input: {
    flex: 1,
    fontSize: perfectSize(16),
    letterSpacing: 0.5,
    fontFamily: "Montserrat_500Medium",
    paddingRight: perfectSize(10),
  },
});
