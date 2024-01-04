import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { perfectSize } from "./Login";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import { AntDesign } from "@expo/vector-icons";
import Navbar from "./Navbar";
const CategoryContent = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }


  const categories= props.categories;

  const setSubcategories=(id)=>{
     props.setCategoryId(id)
     props.setComponent('subcategory');
 
  }
  return (
    <>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header.text}>Shop By Category</Text>
          </View>
          {categories.map((category) => {
            return (
              <TouchableOpacity
                onPress={()=>{
                  setSubcategories(category.id)
              }}
                key={category.id}
              >
                <View style={styles.categorycontainer}>
                  <View
                    style={{
                      width: perfectSize(90),
                      height: perfectSize(80),
                    }}
                  >
              <Image source={{uri:`https://sourcefilesolutions.com/steelghar/console/public/storage/${category.category_image}`}}  style={styles.image} />

                  </View>
                  <View style={styles.content}>
                    <Text
                      style={[
                        styles.content.text,
                        { fontFamily: "Montserrat_600SemiBold" },
                      ]}
                    >
                      {category.category_name}
                    </Text>
                    <Text
                      style={[
                        styles.content.text,
                        {
                          fontSize: perfectSize(13),
                          marginTop: perfectSize(7),
                        },
                      ]}
                    >
                      {category.category_name}
                    </Text>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <AntDesign
                      name="rightcircle"
                      size={perfectSize(24)}
                      color="black"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 2,
  },
  header: {
    backgroundColor: "white",
    padding: perfectSize(12),
    alignItems: "center",
    borderRadius: 3,
    text: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: perfectSize(16),
    },
  },
  image: {
    resizeMode: "contain",
    width: "auto",
    height: perfectSize(80),
    borderRadius: 3,
  },
  categorycontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: perfectSize(13),
    padding: perfectSize(10),
    marginHorizontal: perfectSize(10),
  },
  content: {
    flex: 1,
    marginLeft: perfectSize(20),
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(15),
    },
  },
});
