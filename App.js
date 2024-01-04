
import { SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/home/Home";
import Cart from "./components/Cart";
const Stack = createStackNavigator();
import { store } from "./components/redux/store/Store";
import { Provider } from "react-redux";
export default function App() {
  console.log("************* app ****************")
  return (
    <>

   <Provider store={store} >
   <SafeAreaView style={{flex:1}}>
      <NavigationContainer independent={true}>
     <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />

    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
   </Provider>
     
    </>
  );
}
