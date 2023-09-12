import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import { lightRed, red, veryLightRed } from "../config/colors";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Inernet Connection</Text>
      </View>
    );
  else return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    top: StatusBar.currentHeight + 3,
    backgroundColor: veryLightRed,
    width: "100%",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    borderWidth: 1,
    height: 80,
    borderColor: lightRed,
  },
  text: {
    color: red,
    fontSize: 20,
  },
});
