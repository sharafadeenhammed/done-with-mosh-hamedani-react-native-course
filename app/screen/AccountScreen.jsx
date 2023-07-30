import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { veryLightGray } from "../config/colors";

const AccountScreen = () => {
  return (
    <Screen screenAdditionalStyles={styles.container}>
      <ListItem
        title="useranme"
        description="user status or listings count or rating"
        image={require("../assets/list_images/mosh.jpg")}
        handlePress={() => console.log("pressed")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: veryLightGray,
  },
});

export default AccountScreen;
