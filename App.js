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
  Platform
  
} from "react-native";
import {  useDeviceOrientation } from "@react-native-community/hooks"
// import imageSource from "./assets/favicon.png"

export default function App() {
  const orientation = useDeviceOrientation();
  console.log("app running..."); 
  console.log("dimension = ", orientation)
  const handleButtonPress = () => {
    //  alert("button pressed...")

    // using the Alert.alert api
    Alert.alert("alert title", "alert text content", [
      {
        text: "yes",
        onPress: () => alert(`yes",${StatusBar.currentHeight} ${Platform.OS}`),
      },
      {
        text: "no",
        onPress: () => alert(`no",${StatusBar.currentHeight} ${Platform.OS}`),
      },
    ]);

    // using the Alert.prompt api
    //prompt currently not working on android devices...
    /*Alert.prompt("prompt title", "please enter your name", input=> console.log(input))
    console.log("button press handled...")
    */
  };
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      marginTop: StatusBar.currentHeight + 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      alignContent:"center"
    }}>

      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height:300,
      }} />

      <View style={{
        backgroundColor: "gold",
        width: 100,
        height:100,  
      }} />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height:100,
      }} />
      <View style={{
        backgroundColor: "gray",
        width: 100,
        height:100,
      }} />
      <View style={{
        backgroundColor: "pink",
        width: 100,
        height:100,
      }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" && StatusBar.currentHeight,

  },
  button: {
    color: "#f00",
    borderRadius: "20px",
  },
});
