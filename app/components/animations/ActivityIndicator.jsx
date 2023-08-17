import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
const loader = require("../../animations/loader.json");

const ActivityIndicator = (animate = false) => {
  return (
    <View style={styles.container}>
      {animate ? (
        <LottieView source={loader} autoPlay={true} loop={true} />
      ) : (
        false
      )}
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
