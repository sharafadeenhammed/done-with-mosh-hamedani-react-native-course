import { TextInput, View, StyleSheet } from "react-native";

import Icon from "./Icon";
import { dark, lightGray, mediumDark, veryLightGray } from "../config/colors";
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
}) => {
  return (
    <View style={[styles.container, textInputAdditionalStyles]}>
      {iconName && (
        <Icon
          backgroundColor={iconBackgroundcolor}
          name={iconName}
          color={iconColor}
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
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
    backgroundColor: veryLightGray,
    borderBottomColor: lightGray,
    borderBottomWidth: 1,
  },
  icon: {},
  input: {
    marginVertical: 5,
    padding: 10,
    fontSize: 18,
    paddding: 7,
    fontWeight: "500",
    color: mediumDark,
  },
});
export default AppTextInput;
