import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import BackgroundImage from "../assets/background.jpg"
import logo from "../assets/logo-red.png"
import AppButton from './AppButton';
import { dangerColor, successColor } from "../config/colors"

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={BackgroundImage}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.tagLine}>Sell Want You Don,t Need</Text>

      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          bgColor={dangerColor}
          onPress={() => console.log("login")} />
        <AppButton
          title="register"
          bgColor={successColor}
          onPress={() => console.log("register")} />
      </View>
 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  backgroundContainer: {
    position:'relative',
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: 'absolute',
    alignItems:"center",
    display: "flex",
    width: "100%",
    top: StatusBar.currentHeight + 10,
    
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 60,
    marginBottom: 20
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal:20
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "500",
    
  }
});

// on the 48th video...


export default WelcomeScreen;