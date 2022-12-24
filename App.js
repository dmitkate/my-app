import Login from "./screen/login";
// import Register from "./screen/register";
import { useState } from "react";
import React from "react";
import {
  StyleSheet,  
  View,
  ImageBackground, 
  Alert,
  TouchableWithoutFeedback,
  Keyboard,  
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./fonts/Roboto-Regular.ttf"),
      "Roboto-Bold": require("./fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("./fonts/Roboto-Medium.ttf"),
    });
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReady, setIsReady] = useState(false);
  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const onLogin = () => {
    Alert.alert("Credentials", `${name} +${email}+ ${password}`);
  };

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
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBG}
          source={require("./images/PhotoBG.jpg")}
        > 
        {/* <Register/> */}
        <Login/> 
         
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

});
