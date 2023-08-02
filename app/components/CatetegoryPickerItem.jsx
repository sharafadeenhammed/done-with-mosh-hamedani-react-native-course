import { mediumDark, veryLightGray } from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import { TouchableOpacity, StyleSheet } from "react-native";

const CatetegoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {item.icon && (
        <Icon
          size={50}
          name={item.icon}
          backgroundColor={item.iconBackgroundColor}
        />
      )}
      <AppText style={styles.text} text={item.title} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "33%",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: mediumDark,
    textAlign: "center",
  },
});

export default CatetegoryPickerItem;
