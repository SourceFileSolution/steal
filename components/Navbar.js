import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { perfectSize } from "./Login";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Navbar = ({ navigation }) => {
  const [cart, setCart] = useState();
  const [wishlist, setWishlist] = useState();

  return (
    <View style={style.nav}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Feather name="menu" size={perfectSize(24)} color="black" />
        </TouchableOpacity>

        <View
          style={{
            width: perfectSize(300),
            height: perfectSize(40),
          }}
        >
          <Image source={require("../assets/Logo2.jpg")} style={style.logo} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Feather
            name="shopping-cart"
            size={perfectSize(24)}
            color="black"
            style={{ marginRight: perfectSize(15) }}
          />
        </TouchableOpacity>

        {cart && (
          <View
            style={{
              position: "absolute",
              right: perfectSize(28),
              top: perfectSize(-7),
              backgroundColor: "red",
              borderRadius: perfectSize(18),
              height: perfectSize(20),
              minWidth: perfectSize(20),
              padding: perfectSize(3),
              lineHeight: perfectSize(16),
              color: "white",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: perfectSize(12),
                padding: perfectSize(3),
                lineHeight: perfectSize(10),
                color: "white",
                textAlign: "center",
              }}
            >
              {cart}
            </Text>
          </View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
          <AntDesign name="hearto" size={perfectSize(24)} color="black" />
        </TouchableOpacity>

        {wishlist && (
          <View
            style={{
              position: "absolute",
              right: perfectSize(-10),
              top: perfectSize(-7),
              backgroundColor: "red",
              borderRadius: perfectSize(18),
              height: perfectSize(20),
              minWidth: perfectSize(20),
              padding: perfectSize(3),
              lineHeight: perfectSize(16),
              color: "white",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: perfectSize(12),
                padding: 3,
                lineHeight: perfectSize(10),
                color: "white",
                textAlign: "center",
              }}
            >
              {wishlist}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Navbar;
const style = StyleSheet.create({
  nav: {
    paddingVertical: perfectSize(10),
    paddingHorizontal: perfectSize(20),
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "black",
    elevation: 3,
    shadowOpacity: 0.5,
  },
  logo: {
    width: perfectSize(200),
    height: perfectSize(40),
    resizeMode: "center",
  },
});
