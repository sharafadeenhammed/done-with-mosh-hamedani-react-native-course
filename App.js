import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Dimensions, // the dimension of the phone screen...
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  Platform,
  ImageBackground
  
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks"
import BackgroundImage from "./app/assets/background.jpg"
// import BackgroundImage from "/assets/background.jpg"
// import logo from "./assets/logo-red.png"

export default function App() {
  console.log("App Running...")
  const handleButtonPress = () => {
    Alert.alert("alert title name", "alert text content", [
      {
        text: "yes",
        onPress: () => alert(`yes",${StatusBar.currentHeight} ${Platform.OS}`),
      },
      {
        text: "no",
        onPress: () => alert(`no",${StatusBar.currentHeight} ${Platform.OS}`),
      },
    ]);
  }

  return (
    
    <View  style={styles.container}>
      <ImageBackground style={styles.backgroundContainer} source={BackgroundImage}>
        <View style={{ marginTop: Platform.OS === "android" && StatusBar.currentHeight + 10 }} />
        
        {/* logo container */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text> Sell What You Don,t Need </Text>
        </View>
        
      </ImageBackground>
      <View style={styles.buttonContainer}>

        <View style={styles.firstButton}>
          
        </View>

        <View style={styles.secondButton}>

        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    color: "#f00",
    borderRadius: "20px",
  },
  backgroundContainer: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 20,
    diaplay: "flex",
    alignItems: "center"
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
  firstButton: {
    height: 50,
    width: "100%",
    backgroundColor: "rgb(250,80,90)"
  },
  secondButton: {
    height: 50,
    width: "100%",
    backgroundColor: "rgb(80,180,150)"
  }
});
