import { useContext, useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";

import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import AuthContext from "../context/AuthContext";
import token from "../utility/AuthStorage";

const Navigator = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const getUserDataFromSecureStorage = async () => {
    const userData = await token.get();
    setUser(userData);
    setIsAppReady(true);
  };
  useEffect(() => {
    getUserDataFromSecureStorage();
  }, []);
  const { user, setUser } = useContext(AuthContext);
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
  return user?.userId && isAppReady ? <AppNavigation /> : <AuthNavigation />;
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
