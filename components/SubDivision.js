import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState,useEffect } from "react";
import { perfectSize } from "./Login";
import { AntDesign } from "@expo/vector-icons";
import Navbar from "./Navbar";
import { Ionicons } from "@expo/vector-icons";
const SubDivisionContent = ({ route, navigation,subDivisions,divisionId,setComponent,subDivisionId,setSubDivisionId }) => {
 
  const filteredSubDivisions= subDivisions.filter((subdivision)=>{
    return subdivision.division_id==divisionId
      })
     
     const setSubDivisions=(id)=>{
      setSubDivisionId(id)
      setComponent('products')
    
    }
  return (
    <>
      <Navbar navigation={navigation} />
      <View style={styles.header}>
        <TouchableOpacity
          style={{ paddingLeft: perfectSize(15) }}
          onPress={() => setComponent('division')}
        >
          <Ionicons name="arrow-back" size={perfectSize(26)} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flex: 2.9,
          }}
        >
          <Text style={styles.headings}>SubDivision</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {filteredSubDivisions.map((subdivision,index) => {
              return (
                <TouchableOpacity
                key={subdivision.id} onPress={()=>{
                  setSubDivisions(subdivision.id)
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
                        {subdivision.subdivision_name}
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
                        {subdivision.slug}
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

export default SubDivisionContent;
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
    flex: 2.8,

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
