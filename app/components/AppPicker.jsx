import { mediumDark, veryLightGray } from "../config/colors";
import AppText from "./AppText";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppPicker = ({
  iconName,
  iconColor,
  iconBackgroundColor,
  placeholder,
  pickerAdditionalStyles,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, pickerAdditionalStyles]}>
        <View style={styles.textIconContainer}>
          {iconName && (
            <MaterialCommunityIcons
              iconAdditonalStyles={styles.icon}
              name={iconName}
              size={27}
              backgroundColor={iconBackgroundColor}
              color={iconColor}
            />
          )}
          <AppText
            style={styles.text}
            text={placeholder || "Select Category"}
          />
        </View>

        <MaterialCommunityIcons
          name="chevron-down"
          backgroundColor="transparent"
          size={30}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: veryLightGray,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  icon: {},
  text: {
    color: mediumDark,
    marginLeft: 5,
    fontSize: 20,
    textTransform: "capitalize",
  },
  textIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default AppPicker;
