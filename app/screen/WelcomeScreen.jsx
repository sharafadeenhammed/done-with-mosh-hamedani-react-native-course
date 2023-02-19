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

function WelcomeScreen() {
  return (
    <ImageBackground style={styles.backgroundContainer} source={BackgroundImage} >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text >Sell Want You Don,t Need</Text>

      </View>

      <View style={styles.registerButton}>

      </View>
      <View style={styles.loginButton}>

      </View>
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
  buttonContainer: {
    bottom: 0,
    backgroundColor: "red",
    height: 100,
    width: "100%"
  },
  registerButton: {
    height: 50,
    width: "100%",
    backgroundColor: "rgb(250,80,90)"
  },
  loginButton: {
    height: 50,
    width: "100%",
    backgroundColor: "rgb(80,180,150)"
  }
});


export default WelcomeScreen;