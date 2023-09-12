import React from "react";
import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import BackgroundImage from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import AppButton from "../components/AppButton";
import { dangerColor, mediumDark, successColor } from "../config/colors";
import AppText from "../components/AppText";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={BackgroundImage}
      blurRadius={4}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <AppText style={styles.tagLine} text="Sell Want You Don't Need" />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          bgColor={dangerColor}
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="register"
          bgColor={successColor}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    display: "flex",
    width: "100%",
    top: StatusBar.currentHeight + 10,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 60,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  tagLine: {
    fontSize: 25,
    color: mediumDark,
    fontWeight: "500",
  },
});

// on the 48th video...

export default WelcomeScreen;
