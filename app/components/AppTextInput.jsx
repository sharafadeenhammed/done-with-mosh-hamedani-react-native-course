import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "./Icon";
import {
  dark,
  green,
  lightGray,
  mediumDark,
  veryLightGray,
} from "../config/colors";
const AppTextInput = ({
  textInputAdditionalStyles,
  secure,
  placeholder,
  onChangeText,
  keyboardType,
  inputType,
  iconName,
  iconColor,
  inputStyles,
  iconBackgroundcolor,
  clearButton,
  cursorColor,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, textInputAdditionalStyles]}>
      {iconName && (
        <Icon
          name={iconName}
          color={iconColor}
          size={30}
          backgroundColor={iconBackgroundcolor}
          iconAdditonalStyles={styles.icon}
        />
      )}
      <TextInput
        style={[styles.input, inputStyles]}
        autoFocus={false}
        secureTextEntry={secure}
        placeholder={placeholder}
        inputMode={inputType}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        clearButtonMode={clearButton}
        cursorColor={cursorColor}
        verticalAlign={"top"}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 5,
    overflow: "hidden",
    backgroundColor: veryLightGray,
  },
  icon: {
    padding: 0,
    borderRadius: 15,
    marginTop: 10,
  },
  input: {
    paddingVertical: 10,
    fontSize: 18,
    width: "100%",
    paddding: 7,
    fontWeight: "500",
    marginLeft: 10,
    color: mediumDark,
  },
});
export default AppTextInput;
