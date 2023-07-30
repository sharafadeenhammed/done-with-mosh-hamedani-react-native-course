import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ListItemSeperator() {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    margin: 10,
  },
});
