import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { perfectSize } from "../Login";

import { Ionicons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import Navbar from "../Navbar";

const Wishlist2 = ({ navigation }) => {
  const [active, setActive] = useState(1);
  const data = [
    {
      id: 1,
      image: require("../../assets/20mm.png"),
      name: "20mm_rebars",
      price: "56,876.00",
    },
    {
      id: 2,
      image: require("../../assets/8mm.jpg"),
      name: "8mm_rebars ",
      price: "58,056.00",
    },
    {
      id: 3,
      image: require("../../assets/16mm.png"),
      name: "16mm_rebars",
      price: "56,876.00",
    },
    {
      id: 4,
      image: require("../../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
  ];
  return (
    <>
      <Navbar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Ionicons
                name="arrow-back"
                size={perfectSize(24)}
                color="black"
                style={{ marginLeft: perfectSize(10) }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.headings}>Wishlist</Text>
            {/* <Text style={styles.headings}>4 items</Text> */}
          </View>
          {/* <View>
            <Feather
              name="shopping-cart"
              size={perfectSize(24)}
              color="black"
              style={{ marginRight: perfectSize(10) }}
              onPress={() => navigation.navigate("Cart")}
            />
          </View> */}
        </View>
        <View style={{ padding: perfectSize(10) }}>
          <View style={styles.cat}>
            <TouchableOpacity
              style={[styles.all, active == 1 && styles.activeBackground]}
              onPress={() => setActive(1)}
            >
              <Text
                style={[
                  styles.buttuntext,
                  active == 1 && styles.activetextcolor,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.category, active == 2 && styles.activeBackground]}
              onPress={() => setActive(2)}
            >
              <Text
                style={[
                  styles.buttuntext,
                  active == 2 && styles.activetextcolor,
                ]}
              >
                Category 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.category, active == 3 && styles.activeBackground]}
              onPress={() => setActive(3)}
            >
              <Text
                style={[
                  styles.buttuntext,
                  active == 3 && styles.activetextcolor,
                ]}
              >
                Category 2
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardcontainer}>
          {data.map((item) => {
            return (
              <View style={styles.cards} key={item.id}>
                <View style={{ height: perfectSize(143) }}>
                  <Image source={item.image} style={styles.logo} />
                </View>

                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    backgroundColor: "white",
                  }}
                >
                  <AntDesign
                    name="close"
                    size={perfectSize(20)}
                    color="black"
                  />
                </TouchableOpacity>

                <View
                  style={{
                    marginVertical: perfectSize(12),
                    marginHorizontal: perfectSize(10),
                  }}
                >
                  <Text style={styles.cards.text}>{item.name}</Text>
                  <Text style={[styles.cards.text]}>₹ {item.price}</Text>
                  {/* <View>
                  <Feather name="arrow-down-circle" size={24} color="black" />
                  <Text style={styles.cards.text}>Price dropped by 200</Text>
                </View> */}
                </View>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    borderTopWidth: 0.4,
                    padding: perfectSize(5),
                  }}
                >
                  <Text style={[styles.cards.text, { color: "green" }]}>
                    Move to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default Wishlist2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    padding: perfectSize(5),
  },

  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
    textAlign: "center",
  },
  cat: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: perfectSize(14),
  },
  all: {
    width: 30,
    height: 28,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  buttuntext: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  category: {
    marginLeft: perfectSize(10),
    width: perfectSize(100),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: perfectSize(30),
    borderWidth: 1,
  },
  cardcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cards: {
    backgroundColor: "#fff",
    margin: perfectSize(5),
    width: "47.40%",
    borderRadius: 8,
    // height: perfectSize(250),
    shadowColor: "dark",
    shadowOpacity: 0.5,
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },

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
  activeBackground: {
    backgroundColor: "red",
  },
  activetextcolor: {
    color: "white",
  },
});
