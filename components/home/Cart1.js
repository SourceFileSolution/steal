import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Navbar from "../Navbar";
import { Ionicons } from "@expo/vector-icons";
import { perfectSize } from "../Login";
const Cart1 = ({ navigation }) => {
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
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.headings}>Cart</Text>
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
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            source={require("../../assets/cart.gif")}
            style={{ width: 200, height: 200, resizeMode: "cover" }}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.headings}>Missing Items ?</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: perfectSize(40) }}>
            <TouchableOpacity style={styles.shoppingbutton}>
              <Text style={styles.content}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.catcontainer}>
          <View style={styles.cat}>
            <Text style={styles.Subheading}>Popular Categories</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <TouchableOpacity style={styles.catbutton}>
                <Text style={styles.content}>Category 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.catbutton}>
                <Text style={styles.content}>Category 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.catbutton}>
                <Text style={styles.content}>Category 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.catbutton}>
                <Text style={styles.content}>Category 4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.catbutton}>
                <Text style={styles.content}>Category 5</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
      </View>
    </>
  );
};

export default Cart1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: perfectSize(5),
  },

  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(18),
  },
  //   Subheading: {
  //     fontFamily: "Montserrat_600SemiBold",
  //     fontSize: perfectSize(16),
  //   },
  //   cat: {
  //     alignItems: "center",
  //     borderWidth: 0.5,
  //     marginHorizontal: perfectSize(20),
  //     padding: perfectSize(10),
  //   },
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
    color: "white",
  },
  //   catcontainer: {
  //     flex: 1,
  //     justifyContent: "center",
  //   },
  //   catbutton: {
  //     backgroundColor: "red",
  //     width: "27%",
  //     height: perfectSize(30),
  //     justifyContent: "center",
  //     alignItems: "center",
  //     margin: perfectSize(10),
  //     borderRadius: 5,
  //   },
  shoppingbutton: {
    backgroundColor: "red",
    width: perfectSize(170),
    height: perfectSize(35),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
