import { View, Text } from "react-native";
import React, { useState } from "react";

const Products = ({products}) => {
  // console.log('products')
  // console.log('products', products)
  
  return (
   
    <View>
      <Text>Products</Text>
      {
       products.map((product, index)=>{
          return(
           <View>
            <Text>{product.product_name}</Text>
            <Text>{product.product_image}</Text>

           </View>
          )
        })
      }
    </View>
  );
};

export default Products;
