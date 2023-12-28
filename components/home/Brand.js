import React, { useState, useRef } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { AntDesign } from "@expo/vector-icons";
import { perfectSize } from "../Login";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
const Brand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const data = [
    { id: 1, image: require("../../assets/3.jpg") },
    { id: 2, image: require("../../assets/7.png") },
    { id: 3, image: require("../../assets/5.png") },
    { id: 4, image: require("../../assets/4.png") },
    { id: 5, image: require("../../assets/jsw.png") },
    { id: 6, image: require("../../assets/6.png") },
    { id: 7, image: require("../../assets/1.png") },
    { id: 8, image: require("../../assets/2.jpg") },

    // Add more images as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  const handlePrevious = () => {
    if (currentIndex > 0) {
      carouselRef.current.snapToPrev();
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      carouselRef.current.snapToNext();
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginHorizontal: perfectSize(30),
          marginTop: perfectSize(10),
          fontFamily: "Montserrat_600SemiBold",
          fontSize: perfectSize(16),
        }}
      >
        Brands
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign
          name="leftcircle"
          size={perfectSize(24)}
          color="black"
          onPress={handlePrevious}
          style={{ padding: perfectSize(5) }}
        />
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={renderItem}
          sliderWidth={100}
          itemWidth={140}
          loop={true}
          autoplay={true}
          autoplayDelay={5000}
          autoplayInterval={5000}
          onSnapToItem={(index) => setCurrentIndex(index)}
        />

        <AntDesign
          name="rightcircle"
          size={perfectSize(24)}
          color="black"
          onPress={handleNext}
          style={{ padding: perfectSize(5) }}
        />
      </View>
    </View>
  );
};

export default Brand;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: perfectSize(10),
  },
  imageContainer: {
    marginTop: perfectSize(10),
    marginBottom: perfectSize(20),
    borderRadius: 8,

    height: perfectSize(110),
    justifyContent: "center",
  },
  image: {
    borderRadius: perfectSize(10),
    resizeMode: "contain",
    height: perfectSize(100),
    width: "auto",
  },
});
