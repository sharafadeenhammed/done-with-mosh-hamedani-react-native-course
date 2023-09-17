import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddListingScreen from "../screen/AddListingScreen";
import ListingNavigator from "./ListingNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddListingIcon from "./AddListingIcon";
import routes from "./routes";
import useNotification from "../hooks/useNotification";

const Tab = createBottomTabNavigator();

export default () => {
  useNotification();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="home" />
          ),
        }}
        name={routes.LISTINGS_SCREEN}
        component={ListingNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AddListingIcon size={size} color={color} />
          ),
          title: "Add Listing",
        }}
        name={routes.ADD_LISTING_SCREEN}
        component={AddListingScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="account" />
          ),
        }}
        name={routes.ACCOUNT_SCREEN}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};
