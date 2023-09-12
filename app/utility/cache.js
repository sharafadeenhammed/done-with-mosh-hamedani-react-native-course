import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache";
const expireryInMinites = 30;

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
  // const now = moment(Date.now());
  // const storedTime = moment(date);
  const now = Date.now();
  const timeElapsedInMinites = (now - date) / (60 * 1000);
  console.log("time ellapsed in minites: ", timeElapsedInMinites);
  return timeElapsedInMinites > expireryInMinites;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    if (item)
      if (isExpired(item.timeStamp)) {
        await AsyncStorage.removeItem(prefix + key);
        return null;
      }
    return item.value;
  } catch (error) {
    console.log("get data from async Storage Error: ", error);
    return null;
  }
};

export default {
  store,
  get,
};
