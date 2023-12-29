import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { perfectSize } from "./Login";
import { Ionicons } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const FabricatorRegistrations = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={style.header}>
          <View>
            <Image
              source={require("../assets/Logo2.jpg")}
              style={{
                width: perfectSize(310),
                resizeMode: "contain",
                height: perfectSize(100),
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat_500Medium",
                fontSize: perfectSize(20),
                marginBottom: perfectSize(10),
                textAlign: "center",
              }}
            >
              Register for Fabricator
            </Text>
          </View>
        </View>
        <View></View>
        <View style={style.inputContainer}>
          <View style={style.inputfield}>
            <FontAwesome name="user-o" size={perfectSize(22)} color="black" />
            <TextInput
              style={style.input}
              placeholder="Enter Your Full Name"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={style.inputfield}>
            <MaterialCommunityIcons
              name="email-outline"
              size={perfectSize(22)}
              color="black"
            />
            <TextInput
              style={style.input}
              placeholder="Enter Your Email Address"
              underlineColorAndroid="transparent"
              inputMode="email"
            />
          </View>

          <View style={style.inputfield}>
            <Feather name="phone" size={perfectSize(22)} color="black" />
            <TextInput
              style={style.input}
              placeholder="Enter Your Phone Number"
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              maxLength={10}
            />
          </View>

          <View style={style.inputfield}>
            <Entypo name="address" size={perfectSize(22)} color="black" />
            <TextInput
              style={style.input}
              placeholder="Enter Your Address 1"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={style.inputfield}>
            <Entypo name="address" size={perfectSize(22)} color="black" />
            <TextInput
              style={style.input}
              placeholder="Enter Your Address 2"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={style.inputfield}>
            <Ionicons
              name="location-outline"
              size={perfectSize(22)}
              color="black"
            />
            <TextInput
              style={style.input}
              placeholder="Enter Your PinCode"
              underlineColorAndroid="transparent"
              maxLength={6}
              keyboardType="numeric"
            />
          </View>
          <View style={{ marginTop: perfectSize(20) }}>
            <TouchableOpacity style={style.button}>
              <Text style={style.button.text}>Signup</Text>
            </TouchableOpacity>
          </View>

          <View style={style.footer}>
            <Text
              style={{
                fontFamily: "Montserrat_500Medium",
                fontSize: perfectSize(16),
              }}
            >
              Already Have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              style={{ marginBottom: perfectSize(20) }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",

                  fontSize: perfectSize(16),
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FabricatorRegistrations;
const style = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: perfectSize(30),
  },

  inputContainer: {
    flex: 4,
    borderTopEndRadius: perfectSize(20),
    borderTopStartRadius: perfectSize(20),
    backgroundColor: "whitesmoke",
    paddingVertical: perfectSize(20),
  },
  inputfield: {
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: perfectSize(10),
    marginHorizontal: perfectSize(40),
    height: perfectSize(55),
    alignItems: "center",
    padding: perfectSize(10),
    marginTop: perfectSize(30),
    text: {
      marginHorizontal: perfectSize(40),
      fontFamily: "Montserrat_600SemiBold",

      fontSize: perfectSize(16),
    },
  },
  input: {
    fontSize: perfectSize(16),
    fontFamily: "Montserrat_600SemiBold",
    flex: 1,
    paddingLeft: perfectSize(10),
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: perfectSize(40),
    text: {
      color: "white",
      fontSize: perfectSize(16),
      fontFamily: "Montserrat_600SemiBold",
    },
  },

  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: perfectSize(20),
    text: {},
  },
});
