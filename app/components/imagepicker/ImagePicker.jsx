import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { lightGray, mediumDark, mediumGray } from "../../config/colors";
import AppText from "../AppText";

const ImagePicker = ({ onPress, size = 100 }) => {
  const styles = StyleSheet.create({
    container: {
      height: size,
      width: size,
      backgroundColor: mediumGray,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: size * 0.1,
    },
    text: {
      fontSize: size * 0.14,
      color: mediumDark,
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}
    >
      <MaterialCommunityIcons
        color={lightGray}
        name="camera"
        size={size * 0.7}
      />
      <AppText text="Select photo" style={styles.text} />
    </TouchableOpacity>
  );
};

export default ImagePicker;
