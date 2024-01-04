import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryContent from "./CategoryContent";
import SubCategory from "./SubCategory";
import DivisionContent from "./Division";
import SubDivisionContent from "./SubDivision";
import Products from "./Products";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Category = (props, {navigation}) => {
const [component, setComponent]=useState(props.tab);
const [categoryId,setCategoryId]=useState('');
const [subCategoryId,setSubCategoryId]=useState('');
const [divisionId,setDivisionId]=useState('');
const [subDivisionId,setSubDivisionId]=useState('');
const [subCategories,setSubcategories]=useState('');
const [division,setDivisions]=useState('');
const [isLoading,setIsLoading]=useState(true);
const [user, setUser]=useState('');

// const setItems= async()=>{
//   await AsyncStorage.setItem('name',"pooja");
// }

// const getItems= async ()=>{
//   const name= await AsyncStorage.getItem("name");
//   if(name=="gudiya")
//   {
//     alert('hiiii gudiya')
//     navigation.navigate('Home')
//   }
//   setUser(name)
//   console.warn(name)
// }

  useEffect(()=>{
fetchHomeData();


  },[component,subDivisionId,categoryId,subCategoryId,divisionId,subDivisionId])

  const [data,setData]=useState({
    categories:[],subCategories:[],divisions:[],subDivisions:[]
  });
  const fetchHomeData=async ()=>{

    setIsLoading(true)
    try {
      const response = await axios({
            method: 'get',
            url: "https://sourcefilesolutions.com/steelghar/console/api/productdata",
           
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

if(response.data.status=="success"){
  // console.log('success')
  setData(response.data);
  // const data=response.data;
// console.log(response.data);
}
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }
  return (
    
    <View>
      {
        component=='category'?<CategoryContent categories={data.categories} setComponent={setComponent} setCategoryId={setCategoryId}/>
        : component=='subcategory'?<SubCategory subCategories={data.subcategories} setComponent={setComponent} setSubCategoryId={setSubCategoryId} categoryId={categoryId}/>
        : component=='division' ? <DivisionContent divisions={data.divisions} setComponent={setComponent}   setDivisionId={setDivisionId} subCategoryId={subCategoryId}/>
        : component=='subdivision'? <SubDivisionContent subDivisions={data.subdivisions} setComponent={setComponent} setSubDivisionId={setSubDivisionId} divisionId={divisionId} />
        :<Products products={data.products} categoryId={categoryId} subCategoryId={subCategoryId} setComponent={setComponent} divisionId={divisionId} subDivisionId={subDivisionId} />
}

{/* <Button title="set data" onPress={setItems}/> */}
{/* <Button title="get data" onPress={getItems}/> */}
{/* <Text>{user}</Text> */}

    </View>
  );
};

export default Category;
