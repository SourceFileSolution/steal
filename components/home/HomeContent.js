import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import LatestProducts from "../LatestProducts";
import HomeCatogory from "../HomeCatogory";
import Navbar from "../Navbar";
import { perfectSize } from "../Login";
import Brand from "./Brand";
import ImageCarousel from "./Slider";

const HomeContent = (props,{navigation}) => {
  console.log('hey banners')
  console.log(props.banners)
  // alert('h')

  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View>
        <Navbar navigation={navigation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <ImageCarousel banners={props.banners}/>
          <LatestProducts products={props.products}/>
          <Brand brands={props.brands} />
          <HomeCatogory />
        </View>
      </ScrollView>
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
