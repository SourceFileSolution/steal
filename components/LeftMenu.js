import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { perfectSize } from "./Login";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const LeftMenu = ({ props, navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container} {...props}>
        <View style={styles.header}>
          <View
            style={{
              backgroundColor: "#bbb",
              width: perfectSize(65),
              height: perfectSize(65),
              borderRadius: perfectSize(90),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="person" size={perfectSize(40)} color="black" />
          </View>
          <Text style={styles.header.text}>Hii User</Text>
        </View>
        <View style={styles.body}>
          <View
            style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Aboutus")}>
              <Text
                style={[
                  styles.button.text,
                  { color: "black", lineHeight: perfectSize(50) },
                ]}
              >
                About US
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ExpertAdvice")}
            >
              <Text
                style={[
                  styles.button.text,
                  { color: "black", lineHeight: perfectSize(50) },
                ]}
              >
                Expert Advice
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Support")}>
              <Text
                style={[
                  styles.button.text,
                  { color: "black", lineHeight: perfectSize(50) },
                ]}
              >
                Help and Support
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Signupuser")}
            >
              <Text style={styles.button.text}>SignUp as User</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeftMenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: perfectSize(10),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: perfectSize(10),
    text: {
      fontSize: perfectSize(18),
      fontFamily: "Montserrat_500Medium",
      marginLeft: perfectSize(20),
    },
  },
  body: {
    flex: 1,
  },
  button: {
    width: perfectSize(210),
    height: perfectSize(40),
    backgroundColor: "red",
    marginTop: perfectSize(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: perfectSize(10),
    text: {
      fontFamily: "Montserrat_500Medium",
      fontSize: perfectSize(16),
      letterSpacing: 0.5,
      color: "white",
    },
  },
});
