import {
  StyleSheet,
  Platform,
  View,
  TextInput,
  Text,
  Switch,
  Modal,
  Button,
} from "react-native";
import { useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

import WelcomeScreen from "./app/screen/WelcomeScreen.jsx";
import ViewImageScreen from "./app/screen/ViewImageScreen.jsx";
import TestScreen from "./app/screen/TestScreen.jsx";
import ListScreen from "./app/screen/ListScreen.jsx";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen.jsx";
import MessagesScreen from "./app/screen/MessagesScreen.jsx";
import Icon from "./app/components/Icon.jsx";
import {
  blue,
  dark,
  green,
  lightGreen,
  mediumGray,
  veryLightBlue,
} from "./app/config/colors.js";
import AccountScreen from "./app/screen/AccountScreen.jsx";
import ListingsScreen from "./app/screen/ListingsScreen.jsx";
import Screen from "./app/components/Screen.jsx";
import AppTextInput from "./app/components/AppTextInput.jsx";
import AppPicker from "./app/components/AppPicker.jsx";
import AppModal from "./app/components/AppPickerLists.jsx";
export default function App() {
  const [switchState, setSwitchState] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(true);
  const [pickerValue, setPickerValue] = useState("Category");
  const setVisibility = () => {
    setModalVisibility((initialState) => !initialState);
  };
  const listData = [
    {
      id: 1,
      value: "Clothing",
      title: "Clothings",
    },
    {
      id: 2,
      value: "furniture",
      title: "Furniture",
    },
    {
      id: 3,
      value: "Camera",
      title: "Camera",
    },
  ];
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen/>
    // <MessagesScreen />
    // <AccountScreen />
    // <ListingsScreen />
    <Screen screenAdditionalStyles={styles.container}>
      <AppTextInput
        textInputAdditionalStyles={styles.textInput}
        iconName="email"
        placeholder="Enter email"
        clearButton="always"
        keyboardType="text"
        cursorColor={dark}
      />
      <Text>{pickerValue}</Text>
      <Switch
        style={styles.switch}
        value={switchState}
        onValueChange={(value) => setSwitchState(value)}
      />
      <AppPicker
        onPress={setVisibility}
        iconName="apps"
        iconColor={dark}
        placeholder={pickerValue}
      />
      <AppModal
        title={"Select Listing Category"}
        modalVisibility={modalVisibility}
        setPickervalue={setPickerValue}
        closeModal={setVisibility}
        pickerValueField="value"
        listData={listData}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderBottomColor: mediumGray,
  },
  container: {
    paddingHorizontal: 15,
  },
  switch: {
    color: blue,
  },
});
