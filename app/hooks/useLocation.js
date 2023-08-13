import * as location from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [userLocation, setUserLocation] = useState({});
  const getLocation = async () => {
    try {
      const { granted } = await location.requestForegroundPermissionsAsync();
      if (!granted)
        throw new Error("permission to use device loaction not granted");
      const {
        coords: { longitude, latitude },
      } = await location.getLastKnownPositionAsync();
      setUserLocation({ latitude, longitude });
    } catch (error) {
      console.log("ERROR: \n", error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return userLocation;
};

export default useLocation;
