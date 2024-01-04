import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { perfectSize } from "./Login";

import { AntDesign } from "@expo/vector-icons";
import Navbar from "./Navbar";
import { Ionicons } from "@expo/vector-icons";
const SubCategoryContent = ({ route, navigation,categoryId,setComponent,subCategories,setSubCategoryId }) => {
  // const id = route.params.id;


  const filteredSubCategories= subCategories.filter((subcategory)=>{
    return subcategory.category_id==categoryId
      })
     
     const setDivisions=(id)=>{
      setSubCategoryId(id)
      setComponent('division')
    
    }
  return (
    <>
      <Navbar  />
      <View style={styles.header}>
        <TouchableOpacity
          style={{ paddingLeft: perfectSize(15) }}
          onPress={() => setComponent('category')}
        >
          <Ionicons name="arrow-back" size={perfectSize(26)} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flex: 2.9,
          }}
        >
          <Text style={styles.headings}>SubCategory</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {filteredSubCategories?.map((subcategory, index) => {
              return (
                <TouchableOpacity
                  key={subcategory.id} onPress={()=>{
                    setDivisions(subcategory.id)
                }}
                >
                  <View style={styles.categorycontainer}>
                   
                    <View style={styles.content}>
                      <Text
                        style={[
                          styles.content.text,
                          { fontFamily: "Montserrat_600SemiBold" },
                        ]}
                      >
                        {subcategory.subcategory_name}
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
                        {subcategory.subcategory_name}
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

export default SubCategoryContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: perfectSize(10),
  },
  image: {
    resizeMode: "contentFit",
    width: "auto",
    height: perfectSize(80),
    borderRadius: 3,
  },
  categorycontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: perfectSize(10),
    padding: perfectSize(8),
  },
  content: {
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(15),
    },
  },
  header: {
    flexDirection: "row",
    marginVertical: 2,
    alignItems: "center",
    backgroundColor: "white",

    padding: perfectSize(5),
  },

  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
    alignSelf: "center",
    marginRight: perfectSize(40),
  },
});
