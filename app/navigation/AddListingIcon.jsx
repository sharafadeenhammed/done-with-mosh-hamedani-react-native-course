import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { white } from "../config/colors";

const AddListingIcon = ({ size, color }) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 30,
      backgroundColor: color,
      bottom: 12,
      borderWidth: 4,
      borderColor: "#ffffff",
      height: 60,
      width: 60,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        size={size + 10}
        color={white}
        name="plus-circle"
      />
    </View>
  );
};
export default AddListingIcon;
