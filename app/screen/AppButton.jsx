import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { dangerColor, darkBg, white } from "../config/colors";

AppButton.defaultProps = {
  color: darkBg,
};

export default function AppButton({ bgColor, title, onPress, textColor }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.buttton,
        { backgroundColor: bgColor ?? darkBg }
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        {color: textColor??white}
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttton: {
    borderRadius: 30,
    width: "100%",
    minHeight: 40,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    alignSelf:"center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});
