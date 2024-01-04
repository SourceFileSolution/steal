// import { View, Text } from "react-native";
// import React, { useEffect, useState } from "react";

// const Division = ({divisions,setComponent,setDivisionId,subCategoryId}) => {

//   const filteredDivisions= divisions.filter((division)=>{
//     return division.subcategory_id==subCategoryId
//       })
     
//      const setDivisions=(id)=>{
//       setDivisionId(id)
//       setComponent('subdivision')
    
//     }
//  useEffect(()=>{
//  if(!filteredDivisions.length) {
//   setComponent("products")
//  }
//  },[filteredDivisions])
//   return (
   
//     <View>
//       <Text>Divisons </Text>
//       {
//         filteredDivisions.map((division,index)=>{
//           // console.log("subbbbcat", subcategory.id);
//           return(
//             <View>
             

//               <Text key={division.id} onPress={()=>{
//                     setDivisions(division.id)
//                 }}>{division.division_name} </Text>
//               </View>
//           )
//         })
//       }
//     </View>
//   );
// };

// export default Division;
