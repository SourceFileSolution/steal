import { View, Text } from "react-native";
import React, { useState } from "react";

const SubCategory = ({categoryId,setComponent,subCategories,setSubcategories},props) => {

  const filteredSubCategories= subCategories.filter((subcategory)=>{
return subcategory.category_id==categoryId
  })
  const setDivisions=(id)=>{
    setSubcategories(id)
    // categoryId(id)
    setComponent('division')

 }
  return (
   
    <View>
      <Text>SubCategory</Text>
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
