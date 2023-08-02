import React from "react";
import { StyleSheet, Image, View } from "react-native";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { blue, dark, green, veryLightBlue } from "../config/colors";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
  return (
    <Screen screenAdditionalStyles={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <AppTextInput
        clearButton={true}
        cursorColor={dark}
        inputType="text"
        placeholder="Email"
        iconName="email"
        iconBackgroundcolor="transparent"
        iconColor={dark}
        textInputAdditionalStyles={styles.input}
        keyboardType="email-adderess"
      />
      <AppTextInput
        clearButton={true}
        cursorColor={dark}
        inputType="text"
        placeholder="Password"
        iconName="lock"
        iconBackgroundcolor="transparent"
        iconColor={dark}
        secure={true}
        textInputAdditionalStyles={styles.input}
        keyboardType="email-adderess"
      />
      <AppButton
        title="Login"
        bgColor={green}
        buttonAdditionalStyles={styles.button}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  input: {
    padding: 10,
    borderBottomColor: "transparent",
    marginVertical: 10,
    width: "100%",
    borderRadius: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 30,
  },
  logo: {
    height: 100,
    width: 100,
  },
  button: {
    color: blue,
    marginHorizontal: 10,

    borderRadius: 10,
  },
});
export default LoginScreen;
