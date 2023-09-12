import { StyleSheet } from "react-native";
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
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/navigation/AuthNavigation.js";
import AppNavigation from "./app/navigation/AppNavigation.js";
import navigationTheme from "./app/navigation/navigationTheme.js";
import OfflineNotice from "./app/components/OfflineNotice.js";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
