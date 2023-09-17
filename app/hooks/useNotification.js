import * as Notification from "expo-notifications";
import { Platform } from "react-native";
import { useContext, useEffect } from "react";

import navigation from "../navigation/rootNAvigator";
import AuthContext from "../context/AuthContext";

export { Notification };

const useNotification = () => {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    notificationPermission();
    getPushTokenFromExpo();
  }, []);

  const notificationPermission = async () => {
    try {
      const permission = await Notification.getPermissionsAsync();

      if (!permission.granted) {
        const permission = await Notification.requestPermissionsAsync();
        if (!permission.granted)
          return alert(
            "permission denied! review notification permission if you want to receive notifications from this app"
          );
      }

      // set notification channel for android devices...
      if (Platform.OS === "android") {
        await Notification.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notification.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }

      // set notification behaviour
      Notification.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
          priority: 7,
        }),
      });

      Notification.addNotificationReceivedListener(async (notification) => {});

      Notification.addNotificationResponseReceivedListener((notification) => {
        navigation.navigation("Account");
      });
    } catch (error) {
      console.log("notification permission request error :", error);
    }
  };

  // request for push token from expo;
  const getPushTokenFromExpo = async () => {
    try {
      const pushToken = await Notification.getExpoPushTokenAsync();
      setUser({ ...user, pushToken });
    } catch (error) {
      console.log("get push token error: ", error);
      alert("notification permission not granted");
    }
  };
};

export default useNotification;
