import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { perfectSize } from "./Login";

const ListView = () => {
  const data = [
    {
      id: 1,
      image: require("../assets/20mm.png"),
      name: "20mm_rebars",
      price: "56,876.00",
    },
    {
      id: 2,
      image: require("../assets/8mm.jpg"),
      name: "8mm_rebars ",
      price: "58,056.00",
    },
    {
      id: 3,
      image: require("../assets/16mm.png"),
      name: "16mm_rebars",
      price: "56,876.00",
    },
    {
      id: 4,
      image: require("../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
    {
      id: 5,
      image: require("../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
    {
      id: 6,
      image: require("../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
    {
      id: 7,
      image: require("../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
    {
      id: 8,
      image: require("../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
    {
      id: 9,
      image: require("../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
    {
      id: 10,
      image: require("../assets/32mm.png"),
      name: "32mm_rebars",
      price: "58,056.00",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[styles.headingContent, { flex: 1.5 }]}>
          <Text style={styles.headings}>Products</Text>
        </View>
        <View style={styles.headingContent}>
          <Text style={styles.headings}>Price</Text>
        </View>
        <View style={styles.headingContent}>
          <Text style={styles.headings}>Kgs</Text>
        </View>
        <View style={styles.headingContent}>
          <Text style={styles.headings}>Pieces</Text>
        </View>
      </View>
      {data.map((item) => {
        return (
          <View
            style={[
              styles.rows,
              { backgroundColor: item.id % 2 == 0 ? "#f3deea" : "white" },
            ]}
            key={item.id}
          >
            <View style={[styles.columns, { flex: 1.5 }]}>
              <Text style={styles.text} numberOfLines={1}>
                {item.name}
              </Text>
            </View>
            <View style={styles.columns}>
              <Text
                style={[
                  styles.text,
                  { color: "green", fontSize: perfectSize(12) },
                ]}
              >
                Starts From
              </Text>
              <Text style={styles.text}>{item.price}</Text>
            </View>
            <View style={styles.columns}>
              <TextInput
                placeholder="Kgs"
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.columns}>
              <TextInput
                placeholder="Pieces"
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ListView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: perfectSize(20),
  },
  headerContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "red",
    paddingVertical: perfectSize(15),
  },
  headings: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: perfectSize(16),
    color: "white",
  },
  headingContent: {
    flex: 1,
    alignItems: "center",
  },
  rows: {
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "#eff8fb",
    paddingVertical: perfectSize(10),
  },
  columns: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  input: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(12),
    width: 70,
    flex: 1,
    textAlign: "center",
    borderWidth: 0.7,
  },
});
