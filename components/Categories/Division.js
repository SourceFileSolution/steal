import { View, Text } from "react-native";
import React, { useState } from "react";

const SubCategory = ({categoryId,setComponent,division},props) => {

  const filteredSubCategories= division.filter((division)=>{
return division.category_id==categoryId
  })
  const setDivisions=(id)=>{
    setDivisions(id)
    // categoryId(id)
    setComponent('subdivision');

 }
  return (
   
    <View>
      <Text>Divisons </Text>
      {
        filteredSubCategories.map((subcategory,index)=>{
          // console.log("subbbbcat", subcategory.id);
          return(
            <View>
             

              <Text key={subcategory.id} onPress={()=>{
                    setDivisions(subcategory.id)
                }}>{subcategory.sub_category}</Text>
              </View>
          )
        })
      }
    </View>
  );
};

export default SubCategory;
