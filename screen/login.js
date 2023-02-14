// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  
  ImageBackground, 
  Keyboard,
  Image, 
} from "react-native";


export default function Login({navigation}) {
  

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const onLogin = () => {
    Alert.alert("Credentials", `${name} +${email}+ ${password}`);
    navigation.navigate("Home");
  };

  
  return (<TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBG}
          source={require("../images/PhotoBG.jpg")}
        > 
     <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "heig"}
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
                
                secureTextEntry={showPass}
                placeholder="Пароль"
                />
                <TouchableOpacity
                style={styles.btnShowPswrd}
                activeOpacity={0.7}
                onPressIn={() => setShowPass(false)}
                onPressOut={() => setShowPass(true)}
              >
                <Text style={styles.showPswrd}
                  activeOpacity={0.7}
                >Показать</Text>
              </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={onLogin}
              >
              <Text style={styles.buttonText}>Войти</Text>
              </TouchableOpacity>
                
               <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
                activeOpacity={0.7}
                
              >
              <Text style={styles.text}>Нет аккаунта? Зарегистрироваться</Text>
            </TouchableOpacity>
              
            </View>
          </KeyboardAvoidingView>
         
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
  whiteContainer:{
  alignSelf: "stretch",
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
  paddingHorizontal: 16,
  paddingTop: 32,
  paddingBottom: 111,
  backgroundColor: "#ffffff",
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
    transform: [{translateX:-86}],
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
