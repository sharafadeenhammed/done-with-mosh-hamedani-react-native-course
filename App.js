import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation.js";
import AuthNavigation from "./app/navigation/AuthNavigation.js";
import navigationTheme from "./app/navigation/navigationTheme.js";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext, { AuthContextProvider } from "./app/context/AuthContext.js";
import { useContext } from "react";

export default function App() {
  // const { user } = useContext(AuthContext);
  return (
    <>
      <AuthContextProvider>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          <AuthNavigation />
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
