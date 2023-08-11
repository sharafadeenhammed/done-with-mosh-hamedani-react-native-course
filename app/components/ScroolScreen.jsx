import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, screenAdditionalStyles }) {
  return (
    <SafeAreaView style={[styles.container, screenAdditionalStyles]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        onScrollAnimationEnd={true}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Constants.platform.android && Constants.statusBarHeight) || 0,
  },
});
