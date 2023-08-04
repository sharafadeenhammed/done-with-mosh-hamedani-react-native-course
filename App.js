import {
  StyleSheet,
  Platform,
  View,
  TextInput,
  Text,
  Switch,
  Modal,
  Button,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import * as imagePicker from "expo-image-picker";

// import TestScreen from "./app/screen/TestScreen.jsx";
import WelcomeScreen from "./app/screen/WelcomeScreen.jsx";
import ViewImageScreen from "./app/screen/ViewImageScreen.jsx";
import ListScreen from "./app/screen/ListScreen.jsx";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen.jsx";
import MessagesScreen from "./app/screen/MessagesScreen.jsx";
import AccountScreen from "./app/screen/AccountScreen.jsx";
import ListingsScreen from "./app/screen/ListingsScreen.jsx";
import Screen from "./app/components/Screen.jsx";
import LoginScreen from "./app/screen/LoginScreen.jsx";
import RegisterScreen from "./app/screen/RegisterScreen.jsx";
import AddListingScreen from "./app/screen/AddListingScreen.jsx";
import ImagePicker from "./app/components/imagepicker/ImagePicker.jsx";
import ImagePickerList from "./app/components/imagepicker/ImagePickerList.jsx";
export default function App() {
  const [imageUris, setImageUris] = useState([]);
  const pickImage = async () => {
    const { granted } = await imagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert(
        "you have to allow this app to acces photo for it to work properly"
      );
    try {
      const image = await imagePicker.launchImageLibraryAsync();
      if (!image.canceled && image.assets.length > 0) {
        setImageUris((initialState) => [...initialState, image.assets[0]]);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <AccountScreen />
    // <ListingDetailsScreen />
    // <ListScreen />
    // <ListingsScreen />
    // <LoginScreen />
    // <RegisterScreen />
    <AddListingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
