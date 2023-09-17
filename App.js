import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme.js";
import OfflineNotice from "./app/components/OfflineNotice";
import { AuthContextProvider } from "./app/context/AuthContext.js";
import Navigator from "./app/navigation/Navigator.jsx";
import { naviagtionRef } from "./app/navigation/rootNAvigator.js";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <OfflineNotice />
        <NavigationContainer ref={naviagtionRef} theme={navigationTheme}>
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
