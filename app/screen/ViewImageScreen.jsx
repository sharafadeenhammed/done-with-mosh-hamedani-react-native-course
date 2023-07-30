import { View, Text, StyleSheet, Image, StatusBar } from "react-native";

import { viewScreen } from "../config/colors";
import chair from "../assets/chair.jpg";
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
      </View>
      <Image resizeMode="contain" style={styles.image} source={chair} />
    </View>  
  ); 
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
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
