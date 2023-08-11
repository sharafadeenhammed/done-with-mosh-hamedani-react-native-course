import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screen/AccountScreen";
import MessagesScreen from "../screen/MessagesScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ title: "Account" }}
      name={routes.NESTED_ACCOUNT_SCREEN}
      component={AccountScreen}
    />
    <Stack.Screen name={routes.MESSGAES_SCREEN} component={MessagesScreen} />
  </Stack.Navigator>
);
