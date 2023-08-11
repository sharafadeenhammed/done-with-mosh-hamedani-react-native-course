import { SafeAreaView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, screenAdditionalStyles }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.contentContainer, screenAdditionalStyles]}>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Constants.platform.android && Constants.statusBarHeight) || 0,
  },
  contentContainer: {
    flex: 1,
  },
});
