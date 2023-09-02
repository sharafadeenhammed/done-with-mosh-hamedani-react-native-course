import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expireryInMinites = 4;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    return true;
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (date) => {
  const now = moment(Date.now);
  const storedTime = moment(time);
  return now.diff(storedTime, "minutes") > expireryInMinites;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.stringify(value);
    if (isExpired(item.timeStamp)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
