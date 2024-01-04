import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal
} from "react-native";
import React,{useState} from "react";
import { perfectSize } from "./Login";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { addItemToCart } from "./redux/action/Action";
import {useDispatch} from 'react-redux'
import { createSlice } from "@reduxjs/toolkit";

const initialState={
  cartItems:[],

}

const Grid = (props,{navigation}) => {

  
  // console.log("my product", props.products);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { label: "Price : Myntra", value: "m" },
    { label: "Price : amazon", value: "a" },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleOptionSelect = (value) => {

    alert('brand')
    setDropdownVisible(false);

  };
  const dispatch=useDispatch();
  const addItem=(item)=>{
    dispatch(addItemToCart(item))
  }
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.cardcontainer}>
      {props.products.map((product) => {
        return (
          <View style={styles.cards} key={product.id}>
            <View style={{ height: perfectSize(143) }}>
            <Image source={{uri:`https://sourcefilesolutions.com/steelghar/console/public/storage/${product.product_image}`}}  style={styles.logo} />

              <View style={styles.name}>
                <Text style={[styles.cards.text, { color: "white" }]}>
                  {product.product_name}
                </Text>
              </View>
            </View>
            <View style={styles.secondContainer}>
              <Text style={styles.cards.text}>Price Starts From</Text>
              

              <Text
                style={[
                  styles.cards.text,
                  { fontFamily: "Montserrat_600SemiBold" },
                ]}
              >
                ₹{product.low_price}
              </Text>
            </View>
            <View style={styles.thirdContainer}>
              <View style={styles.thirdContainer.box}>
                <TextInput
                  placeholder="Kgs"
                  style={styles.thirdContainer.input}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.thirdContainer.box}>
                <TextInput
                  placeholder="Pieces"
                  style={styles.thirdContainer.input}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={{ flex: 0, marginLeft: perfectSize(10) }}>
              <TouchableOpacity
                style={styles.selectbutton}
                onPress={toggleDropdown}

              >
                <Text
                  style={{
                    fontFamily: "Montserrat_500Medium",
                    fontSize: perfectSize(14),
                  }}
                >
                  Select Brand
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={perfectSize(24)}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <Modal
        visible={dropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <SafeAreaView style={{flex:1}}>
        <View style={styles.modelcontainer}>
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => handleOptionSelect(option.value)}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      marginRight: 10,
                      fontFamily: "Montserrat_500Medium",
                      fontSize: perfectSize(16),
                    }}
                  >
                    {option.label}
                  </Text>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "red",
                      }}
                    >
                      {selectedOption === option.value && (
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: "red",
                            borderRadius: 10,
                          }}
                        />
                      )}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        </SafeAreaView>
      </Modal>
            <View >
        <TouchableOpacity style={styles.proceed.button}>
          <Text onPress={()=>{addItem(item)}} style={styles.proceed.text}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.proceed.button}>
          <Text onPress={()=>{navigation.navigate('Cart')}} style={styles.proceed.text}>see data</Text>
        </TouchableOpacity>
      </View>
      
          </View>
        );
      })}
    </View>
    // </ScrollView>
  );
};

export default Grid;
const styles = StyleSheet.create({
  cardcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: perfectSize(10),
    backgroundColor: "white",
  },
  buttons: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "auto",
    marginBottom: perfectSize(10),
  },
  proceed: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    button: {
      backgroundColor: "red",
      width: perfectSize(160),
      height: perfectSize(40),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginTop:(0),
      margin:(10)
      
    },
    text: {
      color: "white",
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(16),
    },
  },
  cards: {
    // padding: perfectSize(8),
    backgroundColor: "#fff",
    margin: perfectSize(5),
    width: "47.40%",
    borderRadius: 2,
    // height: perfectSize(250),
    shadowColor: "dark",
    shadowOpacity: 0.1,
    elevation: 10,
    // shadowOffset: { width: 1, height: 0.5 },
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(14),
      marginVertical: perfectSize(2),
    },
  },
  logo: {
    width: "auto",
    height: perfectSize(140),
    resizeMode: "cover",
  },
  name: {
    position: "absolute",
    backgroundColor: "red",
    padding: perfectSize(perfectSize(5)),
    bottom: 10,
    flex: 1,
    alignSelf: "center",
    borderRadius: perfectSize(3),
  },
  selectbutton: {
    backgroundColor: "whitesmoke",
    width: perfectSize(160),
    height: perfectSize(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft:(1),
    margin:(10),
    flexDirection:'row'
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondContainer: {
    alignItems: "center",
  },
  thirdContainer: {
    flexDirection: "row",
    marginTop: perfectSize(10),
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(14),
    },
    input: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(12),
      width: 80,
      flex: 1,
      textAlign: "center",
    },
    box: {
      flex: 1,
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "gray",
      padding: perfectSize(10),
      justifyContent: "center",
    },
    modelcontainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  },
});
