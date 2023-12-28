import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { perfectSize } from "../Login";

import { Ionicons } from "@expo/vector-icons";

import Navbar from "../Navbar";
const Wishlist = ({ navigation }) => {
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
        <View
          style={{ justifyContent: "flex-end", alignItems: "center", flex: 1 }}
        >
          <Image
            source={require("../../assets/wishlist.gif")}
            style={{ width: 200, height: 200, resizeMode: "cover" }}
          />
        </View>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={styles.headings}>Your wishlist is empty.</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: perfectSize(10),
            }}
          >
            <Text style={styles.content}>Add items to wishlist,</Text>
            <Text style={[styles.content, { marginBottom: perfectSize(20) }]}>
              review them anytime and easily move to cart
            </Text>
            <TouchableOpacity style={styles.signin}>
              <Text style={[styles.content, { color: "white" }]}>
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Wishlist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",

    padding: perfectSize(5),
  },

  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(18),
    textAlign: "center",
  },
  image: {
    resizeMode: "cover",
    width: perfectSize(200),
    height: perfectSize(150),
  },
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  signin: {
    width: perfectSize(160),
    backgroundColor: "red",
    height: perfectSize(35),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
