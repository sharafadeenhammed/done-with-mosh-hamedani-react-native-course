import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import {
  blue,
  orange,
  veryLightBlue,
  veryLightGray,
  yellow,
} from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import ListItemSeperator from "../components/ListItemSeperator";
import Icon from "../components/Icon";
const data = [
  {
    id: 1,
    title: "my listing",
    icon: "format-list-bulleted",
    backgroundColor: orange,
  },
  {
    id: 2,
    title: "email",
    icon: "email",
    backgroundColor: blue,
    route: "Messages",
  },
];
const AccountScreen = ({ navigation }) => {
  const [items, setItems] = useState(data);
  return (
    <Screen screenAdditionalStyles={styles.container}>
      <ListItem
        addiotionalListStyle={styles.list}
        title="sharafadeen hammed "
        description="sharafadeenhammed@yahoo.com"
        image={require("../assets/list_images/mosh.jpg")}
      />
      <FlatList
        style={styles.flatList}
        data={items}
        ItemSeparatorComponent={() => (
          <ListItemSeperator additionalSeperatorStyles={styles.seperator} />
        )}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            handlePress={() => item.route && navigation.navigate(item.route)}
            addiotionalListStyle={styles.list}
            title={item.title}
            description={item.description}
            icon={() => (
              <Icon name={item.icon} backgroundColor={item.backgroundColor} />
            )}
          />
        )}
      />

      <ListItem
        addiotionalListStyle={styles.list}
        title="logout"
        handlePress={() => console.log("logging out...")}
        icon={() => <Icon name="logout" backgroundColor={yellow} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: veryLightGray,
    marginVertical: 10,
  },
  flatList: {
    marginVertical: 50,
    backgroundColor: veryLightBlue,
  },
  seperator: {
    margin: 5,
    backgroundColor: veryLightBlue,
  },
  list: {
    backgroundColor: veryLightBlue,
  },
});

export default AccountScreen;
