import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Index from "./Categories/Index";
import SubCategory from "./Categories/SubCategory";
import Division from "./Categories/Division";
import SubDivision from "./Categories/SubDivision";
import Products from "./Categories/Products";
import data from "./Categories/data";

const Category = () => {
 
const [component, setComponent]=useState("category");
const [categoryId,setCategoryId]=useState('');
const [subCategories,setSubcategories]=useState('');
  useEffect(()=>{
alert("got cate id")
  },[categoryId])
  return (
    
    <View>
      {
        component=='category'?<Index categories={data.categories} setComponent={setComponent} setCategoryId={setCategoryId}/>
        : component=='subcategory'?<SubCategory subCategories={data.subCategories} setComponent={setComponent}/>
        : component=='division' ? <Division divisions={data.divisions} setComponent={setComponent}/>
        : component=='subdivision'? <SubDivision subDivisions={data.subDivisions} setComponent={setComponent}/>
        :<Products/>

}
      
      
     
     
      
    </View>
  );
};

export default Category;
