import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expireryInMinites = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    const storeResponse = await AsyncStorage.setItem(
      prefix + key,
      JSON.stringify(item)
    );
    return true;
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (date) => {
  const now = moment(Date.now());
  const storedTime = moment(date);
  return now.diff(storedTime, "minutes") > expireryInMinites;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    if (isExpired(item.timeStamp || 0)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item;
  } catch (error) {
    console.log("get data from async Storage Error: ", error);
  }
};

export default {
  store,
  get,
};
