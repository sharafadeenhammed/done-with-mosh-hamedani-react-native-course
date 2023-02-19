import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar
} from "react-native"


import {darkBg} from "../config/colors"

export default function TestScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.text}>i love react native!</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 0 : 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  borders: {
    minHeight: 100,
    minWidth: 100,
    backgroundColor: darkBg,
    borderRadius: 20,
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 10,
  },
  shadow: {
    minHeight: 100,
    minWidth: 100,
    backgroundColor: darkBg,
    shadowColor: "",
    shadowOffset: {
      height: 20,
      width:20
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 10
  },
  text: {
    fontSize: 40,
    fontWeight: "100",
    color:"green"
  }
  

})