import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";

import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import useAuth from "../hooks/useAuth";

const Navigator = () => {
  const auth = useAuth();
  const [isAppReady, setIsAppReady] = useState(false);
  const getUserDataFromSecureStorage = async () => {
    await auth.restoreToken();
    setIsAppReady(true);
  };
  useEffect(() => {
    getUserDataFromSecureStorage();
  }, []);
  if (!isAppReady)
    return (
      <View style={style.imageContainer}>
        <Image
          resizeMode="cover"
          style={style.image}
          source={require("../assets/splash.png")}
        />
      </View>
    );
  return auth.user?.userId && isAppReady ? (
    <AppNavigation />
  ) : (
    <AuthNavigation />
  );
};
const style = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#dd5722",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
});
export default Navigator;
