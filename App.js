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
export default function App() {
  const [switchState, setSwitchState] = useState(false);

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <AccountScreen />
    // <ListingDetailsScreen />
    // <ListScreen />
    <ListingsScreen />
    // <LoginScreen />
    // <RegisterScreen />
    // <AddListingScreen />
    // <Screen></Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
