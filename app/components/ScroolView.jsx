import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

export default function Screen({
  children,
  viewAdditionalStyles,
  orientation = false,
}) {
  return (
    <View style={viewAdditionalStyles}>
      <ScrollView horizontal={orientation} onScrollAnimationEnd={true}>
        {children}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
