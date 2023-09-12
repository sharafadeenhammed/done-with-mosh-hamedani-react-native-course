import { View, StyleSheet } from "react-native";
import React from "react";

export default function ListItemSeperator({ additionalSeperatorStyles }) {
  return <View style={[styles.seperator, additionalSeperatorStyles]}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    margin: 10,
  },
});
