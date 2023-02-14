import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/home";
import Login from "./screen/login";
import Register from "./screen/register";
import { useState } from "react";
import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const Auth = createStackNavigator();

export default function App() {
  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./fonts/Roboto-Regular.ttf"),
      "Roboto-Bold": require("./fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("./fonts/Roboto-Medium.ttf"),
    });
  };
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return ( 
   <NavigationContainer>
      <Auth.Navigator>
        <Auth.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Auth.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={Register}
        />
        <Auth.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Auth.Navigator>
    </NavigationContainer>
   );
}
;
