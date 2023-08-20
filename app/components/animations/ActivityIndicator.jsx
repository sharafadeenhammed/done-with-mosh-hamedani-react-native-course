import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
const loader = require("../../animations/loader.json");

const ActivityIndicator = (animate = false) => {
  return animate ? (
    <View style={styles.container}>
      <LottieView source={loader} autoPlay={true} loop={true} />
    </View>
  ) : null;
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
