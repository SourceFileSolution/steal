import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Navbar from "../Navbar";
import { perfectSize } from "../Login";
import { Ionicons } from "@expo/vector-icons";

const ExpertAdvice = ({ navigation }) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{ paddingLeft: perfectSize(15) }}
              onPress={() => navigation.pop()}
            >
              <Ionicons
                name="arrow-back"
                size={perfectSize(26)}
                color="black"
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 2.9,
              }}
            >
              <Text style={styles.headings}>Expert Advice</Text>
            </View>
          </View>
          <View style={styles.imagebox}>
            <Image
              source={require("../../assets/expert.jpg")}
              style={{ width: 200, height: 200, resizeMode: "cover" }}
            />
          </View>
          <View style={styles.textbox}>
            <Text style={styles.content}>Pose your query, and</Text>
            <Text style={styles.content}>we'll reach out to you shortly</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputcontainer}>
              <TextInput placeholder="Full Name" style={styles.input} />
            </View>
            <View style={styles.inputcontainer}>
              <TextInput
                placeholder="Mobile Number"
                style={styles.input}
                keyboardType="numeric"
                maxLength={10}
              />
            </View>
            <View style={styles.inputcontainer}>
              <TextInput
                placeholder="Email"
                inputMode="email"
                style={styles.input}
              />
            </View>
            <View style={styles.inputcontainer}>
              <TextInput
                placeholder="Query"
                style={{
                  flex: 0.7,
                  fontSize: perfectSize(16),
                  letterSpacing: 0.5,
                  fontFamily: "Montserrat_500Medium",
                  textAlignVertical: "top",
                }}
                multiline={true}
                numberOfLines={5}
              />
            </View>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.content, { color: "white" }]}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ExpertAdvice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: perfectSize(2),
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
  imagebox: {
    alignItems: "center",
  },
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: perfectSize(14),
  },
  textbox: {
    alignItems: "center",
  },
  form: {
    marginTop: perfectSize(10),
    alignItems: "center",
  },
  inputcontainer: {
    marginVertical: perfectSize(8),
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: perfectSize(10),
    borderRadius: perfectSize(5),
  },
  input: {
    flex: 0.7,
    fontSize: perfectSize(16),
    letterSpacing: 0.5,
    fontFamily: "Montserrat_500Medium",
  },
  buttoncontainer: {
    alignItems: "center",
    marginVertical: perfectSize(20),
  },
  button: {
    backgroundColor: "red",
    width: perfectSize(120),
    height: perfectSize(35),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
