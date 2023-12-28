import { SafeAreaView, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Calculator from "./Calculator";
import { perfectSize } from "./Login";

import Homestack from "./home/Homestack";
import Category from "./Category";
import Notification1 from "./Notification1";
import NotificationsContent from "./NotificationsContent";
import Account2 from "./account/Account2";
import AccountContent from "./account/AccountContent";
import Notification2 from "./Notification2";

const TabNavigation = () => {
  const tab = createBottomTabNavigator();
  return (
    // <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <tab.Navigator>
        <tab.Screen
          name="Home"
          component={Homestack}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <tab.Screen
          name="Category"
          component={Category}
          options={{
            tabBarLabel: "Category",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="category" size={size} color={color} />
            ),
          }}
          listeners={({ navigation }) => {
            tabPress = (e) => {
              e.preventDefault();
              navigation.navigate("Category");
            };
          }}
        />
        <tab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            tabBarLabel: "Calculator",

            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  backgroundColor: "red",
                  width: perfectSize(55),
                  height: perfectSize(55),
                  borderWidth: 1,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: perfectSize(20),
                  // padding: perfectSize(2),
                }}
              >
                <FontAwesome
                  name="calculator"
                  size={perfectSize(22)}
                  color={"white"}
                />
              </View>
            ),
          }}
          listeners={({ navigation }) => {
            tabPress = (e) => {
              e.preventDefault();
              navigation.navigate("Category");
            };
          }}
        />
        <tab.Screen
          name="Notification"
          component={Notification2}
          options={{
            tabBarLabel: "Notification",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-sharp" size={size} color={color} />
            ),
          }}
        />
        <tab.Screen
          name="Account"
          component={Account2}
          options={{
            tabBarLabel: "Account",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigation;
