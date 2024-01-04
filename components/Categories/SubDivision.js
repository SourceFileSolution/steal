// // import { View, Text } from "react-native";
// // import React, { useState } from "react";

// // const SubDivision = () => {
  
// //   return (
   
// //     <View>
// //       <Text>SubDivision</Text>
// //     </View>
// //   );
// // };

// // export default SubDivision;
// import { View, Text } from "react-native";
// import React, { useState } from "react";

// const SubDivision = ({subDivisions,divisionId,setComponent,subDivisionId,setSubDivisionId}) => {

//   const filteredSubDivisions= subDivisions.filter((subdivision)=>{
//     return subdivision.division_id==divisionId
//       })
     
//      const setSubDivisions=(id)=>{
//       setSubDivisionId(id)
//       setComponent('products')
    
//     }
 
//   return (
   
//     <View>
//       <Text>sub Division </Text>
//       {
//         filteredSubDivisions.map((Subdivision,index)=>{
//           // console.log("subbbbcat", subcategory.id);
//           return(
//             <View>
             

//               <Text key={Subdivision.id} onPress={()=>{
//                     setSubDivisions(Subdivision.id)
//                 }}>{Subdivision.subdivision_name} </Text>
//               </View>
//           )
//         })
//       }
//     </View>
//   );
// };

// export default SubDivision;

