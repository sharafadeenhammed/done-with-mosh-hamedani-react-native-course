import { StyleSheet } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation.js";
import AuthNavigation from "./app/navigation/AuthNavigation.js";
import navigationTheme from "./app/navigation/navigationTheme.js";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <AppNavigation />
         */}
        <AuthNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
