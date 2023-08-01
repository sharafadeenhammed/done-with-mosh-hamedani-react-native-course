import { veryLightBlue, veryLightGray } from "../config/colors";
import AppText from "./AppText";
import { TouchableOpacity, StyleSheet } from "react-native";
const PickerItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <AppText style={styles.text} text={title} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 4,
    backgroundColor: veryLightGray,
  },
  text: {
    fontSize: 20,
  },
});
export default PickerItem;
