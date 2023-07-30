import { SafeAreaView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, screenAdditionalStyles }) {
  return (
    <SafeAreaView style={[styles.container, screenAdditionalStyles]}>
      <View>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Constants.platform.android && Constants.statusBarHeight) || 0,
  },
});