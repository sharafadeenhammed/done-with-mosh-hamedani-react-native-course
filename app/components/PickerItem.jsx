import { mediumDark, veryLightGray } from "../config/colors";
import AppText from "./AppText";
import { TouchableOpacity, StyleSheet } from "react-native";
const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <AppText style={styles.text} text={item.title} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 4,
    backgroundColor: veryLightGray,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: mediumDark,
    padding: 5,
  },
});
export default PickerItem;
