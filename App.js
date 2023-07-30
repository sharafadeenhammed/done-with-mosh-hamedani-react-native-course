import { StyleSheet, Platform, View } from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

import WelcomeScreen from "./app/screen/WelcomeScreen.jsx";
import ViewImageScreen from "./app/screen/ViewImageScreen.jsx";
import TestScreen from "./app/screen/TestScreen.jsx";
import ListScreen from "./app/screen/ListScreen.jsx";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen.jsx";
import MessagesScreen from "./app/screen/MessagesScreen.jsx";
import Icon from "./app/components/Icon.jsx";
import { darkBg, lightGreen } from "./app/config/colors.js";
import AccountScreen from "./app/screen/AccountScreen.jsx";
export default function App() {
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen/>
    // <MessagesScreen />
    <AccountScreen />
  );
}
