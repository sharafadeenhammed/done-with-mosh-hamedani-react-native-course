import { StyleSheet } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

// import TestScreen from "./app/screen/TestScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
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
