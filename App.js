import { StyleSheet } from "react-native";

import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./app/navigation/AuthNavigation.js";
import navigationTheme from "./app/navigation/navigationTheme.js";
import OfflineNotice from "./app/components/OfflineNotice";
import { AuthContextProvider } from "./app/context/AuthContext.js";
import Navigator from "./app/navigation/Navigator.jsx";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {/* <AuthNavigation /> */}
          <Navigator />
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
