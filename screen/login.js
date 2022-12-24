// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,

  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,

  Keyboard,
  Image, 
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function Login() {
  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
      "Roboto-Bold": require("../fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("../fonts/Roboto-Medium.ttf"),
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
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.whiteContainer}>
            

              <Text style={styles.title}>Войти</Text>
             
              <TextInput
                onChangeText={emailHandler}
                style={styles.input}
                placeholder="Адрес электронной почты"
              /><View>
              <TextInput
                onChangeText={passwordHandler}
                style={styles.input}
                secureTextEntry={true}
                placeholder="Пароль"
                />
              <TouchableOpacity
                style={styles.btnShowPswrd}
                onPress={onLogin}
                >
                  <Text style={styles.showPswrd}>Показать</Text>
              </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={onLogin}
              >
              <Text style={styles.buttonText}>Войти</Text>
              </TouchableOpacity>
                
              
              <Text style={styles.text}>Нет аккаунта? Зарегистрироваться</Text>
            </View>
          </KeyboardAvoidingView>
   
  );
}

const styles = StyleSheet.create({
  whiteContainer:{
  alignSelf: "stretch",
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
  paddingHorizontal: 16,
  paddingTop: 32,
  paddingBottom: 111,
  backgroundColor: "#ffffff",
 },
  photoContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{translateX:"-50%"}],
  },
  photo: {    
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  btnAdd: {
    zIndex:3,
    position: "absolute",
    left: '100%',
    top: 81,
    transform: [{ "translateX": "-50%" }],
    width: 25,
    height: 25,
    borderColor: '#FF6C00',
    borderWidth: 1,
    borderRadius: '50%',
    textAlign: 'center'
  },
  btnAddText:
  {
    position: "absolute",
    left: '50%',
    top: '50%',
    transform: [{ "translateX": "-50%" }, { "translateY": "-50%" }],
    width: 13,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FF6C00'
  },
  title: {
    marginBottom: 33,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    flexDirection: "row",
    width: "100%",

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 16,
    padding: 16,
    paddingBottom: 15,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#BDBDBD",
    borderRadius: 8,
    borderWidth: 1,
  },
  btnShowPswrd:{
    position: 'absolute',
    top:'25%',
    left: '100%',
    transform: [{translateX:"-120%"}],
  },
  showPswrd: {
    color: '#1B4371',
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
  
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 32,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  text: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
});
