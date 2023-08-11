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
        coords: { latitude, longitude },
      } = await location.getLastKnownPositionAsync();
      setUserLocation({ longitude, latitude });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return userLocation;
};

export default useLocation;
