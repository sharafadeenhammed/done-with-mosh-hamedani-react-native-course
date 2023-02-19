import {
  StyleSheet,
  Platform
} from "react-native";

import {
  useDeviceOrientation,
} from "@react-native-community/hooks"

import WelcomeScreen from "./app/screen/WelcomeScreen.jsx";
import ViewImageScreen from "./app/screen/ViewImageScreen.jsx";
import TestScreen from "./app/screen/TestScreen.jsx";

export default function App() {
  return (
    <WelcomeScreen/>
    // <ViewImageScreen/>
  );
}
