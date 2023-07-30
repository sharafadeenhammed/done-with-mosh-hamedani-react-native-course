import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { lightDangerColor, lightGray, veryLightGray } from "../config/colors";

import React from "react";

export default function ListItemDeleteAction({ handleOnPress }) {
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="trash-can"
          size={35}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: veryLightGray,
    padding: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17.5,
    borderColor: veryLightGray,
    borderStyle: "solid",
    borderWidth: 2,
    height: 40,
    width: 40,
    alignSelf: "center",
  },
  icon: {
    color: lightDangerColor,
  },
});
