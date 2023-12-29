import { View, Text } from "react-native";
import React, { useState } from "react";

const Index = (props) => {
 const categories= props.categories;

 const setSubcategories=(id)=>{
    props.setCategoryId(id)
    props.setComponent('subcategory')

 }
 return (
   
    <View>
      <Text >categories</Text>
      {
        categories.map((category, index)=>{
            console.log(category.id);
            return(
                
                <Text key={category.id} onPress={()=>{
                    setSubcategories(category.id)
                }}>
                    {category.category}
                    {category.id}
                </Text>
               
            )
        })
      }
    </View>
  );
};

export default Index;
