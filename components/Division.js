import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect,useState } from "react";
import { perfectSize } from "./Login";

import { AntDesign } from "@expo/vector-icons";
import Navbar from "./Navbar";
import { Ionicons } from "@expo/vector-icons";
const DivisionContent = ({ route, navigation,divisions,setComponent,setDivisionId,subCategoryId }) => {
 
  const filteredDivisions= divisions.filter((division)=>{
    return division.subcategory_id==subCategoryId
      })
     
     const setDivisions=(id)=>{
      setDivisionId(id)
      setComponent('subdivision')
    
    }
 useEffect(()=>{
 if(!filteredDivisions.length) {
  setComponent("products")
 }
 },[filteredDivisions])

  return (
    <>
      <Navbar navigation={navigation} />
      <View style={styles.header}>
        <TouchableOpacity
          style={{ paddingLeft: perfectSize(15) }}
          onPress={() =>   setComponent('subcategory')}
        >
          <Ionicons name="arrow-back" size={perfectSize(26)} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flex: 2.9,
          }}
        >
          <Text style={styles.headings}>Division</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {filteredDivisions
            .map((division, index) => {
              return (
                <TouchableOpacity
                  key={division.id} onPress={()=>{
                    setDivisions(division.id)
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
                        {division.division_name}
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
                        {division.slug}
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

export default DivisionContent;
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
    flex: 1,

    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(15),
    },
  },
  header: {
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 2,
    padding: perfectSize(5),
  },

  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
    alignSelf: "center",
    marginRight: perfectSize(40),
  },
});
