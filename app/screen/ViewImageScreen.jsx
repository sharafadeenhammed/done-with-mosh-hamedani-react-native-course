import { View, Text, StyleSheet, Image, StatusBar } from "react-native";

import { viewScreen } from "../config/colors";
import chair from "../assets/chair.jpg";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image resizeMode="contain" style={styles.image} source={chair} />
    </View>  
  ); 
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    backgroundColor: viewScreen.successColor,
    height: 50,
    width: 50,
    top: StatusBar.currentHeight + 20,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    backgroundColor: viewScreen.dangerColor,
    height: 50,
    width: 50,
    top: StatusBar.currentHeight + 10,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: viewScreen.viewScreenBackground,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
