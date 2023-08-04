import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { mediumDark, mediumGray } from "../../config/colors";

const ImageItem = ({ item, size = 100, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      height: size,
      width: size,
      backgroundColor: mediumGray,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: size * 0.1,
      overflow: "hidden",
    },
    text: {
      fontSize: 12,
      color: mediumDark,
    },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}
    >
      <Image
        resizeMode="cover"
        source={{ uri: item.uri, height: size, width: size }}
        name="camera"
        size={size * 0.7}
      />
    </TouchableOpacity>
  );
};

export default ImageItem;
