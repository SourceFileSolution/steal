import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { perfectSize } from "./Login";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import Grid from "./Grid";
import ListView from "./ListView";
import Navbar from "./Navbar";
import { Ionicons } from "@expo/vector-icons";

const Products = ({ navigation }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [grid, setGrid] = useState(true);

  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const options = [
    { label: "Price : Low to High", value: "Price : Low to High" },
    { label: "Price : High to Low", value: "Price : High to Low" },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setDropdownVisible(false);
  };
  return (
    <>
      <Navbar navigation={navigation} />
      <View style={styles.header}>
        <TouchableOpacity
          style={{ paddingLeft: perfectSize(15) }}
          onPress={() => navigation.pop()}
        >
          <Ionicons name="arrow-back" size={perfectSize(26)} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flex: 2.9,
          }}
        >
          <Text style={styles.headings}>Products</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0, marginLeft: perfectSize(10) }}>
              <TouchableOpacity
                style={styles.sortbutton}
                onPress={toggleDropdown}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat_500Medium",
                    fontSize: perfectSize(14),
                  }}
                >
                  Sort By
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={perfectSize(24)}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
              <View style={styles.buttons}>
                <View
                  style={{
                    backgroundColor: grid ? "skyblue" : "whitesmoke",
                  }}
                >
                  <Feather
                    name="grid"
                    size={perfectSize(24)}
                    color={grid ? "white" : "black"}
                    style={{
                      padding: perfectSize(10),
                    }}
                    onPress={() => setGrid(true)}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: !grid ? "skyblue" : "whitesmoke",
                  }}
                >
                  <MaterialIcons
                    name="table-rows"
                    size={perfectSize(24)}
                    color={grid ? "black" : "white"}
                    style={{ padding: perfectSize(10) }}
                    onPress={() => setGrid(false)}
                  />
                </View>
              </View>
            </View>
          </View>

          {grid ? <Grid /> : <ListView />}
          <View style={styles.note}>
            <View style={{ flex: 0.14 }}>
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: perfectSize(14),
                  color: "red",
                }}
              >
                Note :
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.note.text}>
                1 . Material will shipped through nearest authorized
                distributor.
              </Text>
              <Text style={styles.note.text}>
                2 . Material will be shipped within 2-5 working days,unloading
                is customer's responsibility.
              </Text>
              <Text style={styles.note.text}>
                3 . The standard weight bridge tolerance "+/- 0.5%" is to be
                allowed and standard quantity variation (+/- 5%) is to be
                allowed.
              </Text>
              <Text style={styles.note.text}>
                4 . Test certificate will be provided for premium brands for
                above 1 MT.
              </Text>
            </View>
          </View>
          <View style={{ height: perfectSize(50) }}></View>
        </View>
      </ScrollView>
      <Modal
        visible={dropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
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
      </Modal>
      <View style={styles.proceed}>
        <TouchableOpacity style={styles.proceed.button}>
          <Text style={styles.proceed.text}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Products;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: perfectSize(10),
    backgroundColor: "white",
    padding: perfectSize(10),
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  buttons: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "auto",
    marginBottom: perfectSize(10),
  },
  cardcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: perfectSize(10),
    backgroundColor: "white",
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
    box: {
      flex: 1,
      alignItems: "center",
      borderWidth: 0.5,
      padding: perfectSize(10),
      justifyContent: "center",
    },
  },
  note: {
    flexDirection: "row",
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(13),
    },
  },
  proceed: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    button: {
      backgroundColor: "red",
      width: perfectSize(130),
      height: perfectSize(40),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    text: {
      color: "white",
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(16),
    },
  },
  header: {
    flexDirection: "row",
    marginVertical: 2,
    alignItems: "center",
    backgroundColor: "white",

    padding: perfectSize(5),
  },

  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
    alignSelf: "center",
    marginRight: perfectSize(40),
  },
  sortbutton: {
    backgroundColor: "whitesmoke",
    width: perfectSize(100),
    height: perfectSize(45),
    alignItems: "center",
    justifyContent: "center",
    padding: perfectSize(10),
    flexDirection: "row",
  },
  modelcontainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
