import {
  StyleSheet,
  Platform,
  View,
  TextInput,
  Text,
  Switch,
  Modal,
  Button,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import * as imagePicker from "expo-image-picker";

// import TestScreen from "./app/screen/TestScreen.jsx";
import WelcomeScreen from "./app/screen/WelcomeScreen.jsx";
import ViewImageScreen from "./app/screen/ViewImageScreen.jsx";
import ListScreen from "./app/screen/ListScreen.jsx";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen.jsx";
import MessagesScreen from "./app/screen/MessagesScreen.jsx";
import AccountScreen from "./app/screen/AccountScreen.jsx";
import ListingsScreen from "./app/screen/ListingsScreen.jsx";
import Screen from "./app/components/Screen.jsx";
import LoginScreen from "./app/screen/LoginScreen.jsx";
import RegisterScreen from "./app/screen/RegisterScreen.jsx";
import AddListingScreen from "./app/screen/AddListingScreen.jsx";
import AppText from "./app/components/AppText.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppButton from "./app/components/AppButton.jsx";

const Tweet = ({ navigation }) => {
  return (
    <Screen>
      <AppText text="tweet" />
      <AppButton
        title="view tweet"
        onPress={() => navigation.navigate("tweetDetails", { id: 10 })}
      />
    </Screen>
  );
};
const TweetDetails = ({ route }) => {
  console.log(route);
  return (
    <Screen>
      <AppText text={`tweet details ${route.params.id} `} />
    </Screen>
  );
};
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweet} />
      <Stack.Screen name="tweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <AccountScreen />
    // <ListingDetailsScreen />
    // <ListScreen />
    // <ListingsScreen />
    // <LoginScreen />
    // <RegisterScreen />
    // <AddListingScreen />
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
