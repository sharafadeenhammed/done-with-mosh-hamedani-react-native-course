import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { dark, white } from "../config/colors";
const Icon = ({
  name,
  size = 30,
  color = white,
  backgroundColor = dark,
  iconAdditonalStyles,
}) => {
  const styles = StyleSheet.create({
    container: {
      // padding: 10,
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={[styles.container, iconAdditonalStyles]}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={name} size={size * 0.7} color={color} />
      </View>
    </View>
  );
};

export default Icon;
