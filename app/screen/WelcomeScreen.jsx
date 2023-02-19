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
    <ImageBackground style={styles.backgroundContainer} source={BackgroundImage} >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text >Sell Want You Don,t Need</Text>

      </View>

      <AppButton title="register" bgColor={dangerColor} onPress={() => console.log("register")}  />
      <AppButton title="login" bgColor={successColor} onPress={()=>console.log("login")} />
 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  backgroundContainer: {
    position:'relative',
    flex: 1,
    justifyContent: "flex-end"
    
    
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

});


export default WelcomeScreen;