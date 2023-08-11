import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screen/ListingsScreen";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTINGS_FEED} component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTINGS_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);
