import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
import SwipeItem from "../components/SwipeItem";

import mosh from "../assets/mosh.jpg";
export default function MessagesScreen() {
  const initialMessages = [
    {
      id: 1,
      title: "title one",
      subTitle: "subtitle one",
      image: mosh,
    },
    {
      id: 2,
      title: "title two",
      subTitle: "subtitle two",
      image: mosh,
    },
    {
      id: 3,
      title: "title three",
      subTitle: "subtitle three",
      image: mosh,
    },
    {
      id: 4,
      title: "title four",
      subTitle: "subtitle four",
      image: mosh,
    },
    {
      id: 5,
      title: "title five",
      subTitle: "subtitle five",
      image: mosh,
    },
    {
      id: 6,
      title: "title six",
      subTitle: "subtitle six",
      image: mosh,
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const removeItem = (id) => {
    // remove item from the screen...
    const newMessages = messages.filter((message) => message.id !== id);
    setMessages(newMessages);

    // delete item from the database...
  };
  console.log(Constants.statusBarHeight);
  return (
    <Screen>
      <FlatList
        style={styles.flatList}
        refreshing={isRefreshing}
        onRefresh={() => setMessages(initialMessages)}
        data={messages}
        ItemSeparatorComponent={ListItemSeperator}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <SwipeItem
            renderRightAction={
              <ListItemDeleteAction handleOnPress={() => removeItem(item.id)} />
            }
          >
            <ListItem
              image={item.image}
              title={item.title}
              description={item.subTitle}
              handlePress={() => {
                console.log(`button with id ${item.id} pressed`);
              }}
            />
          </SwipeItem>
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 20,
    display: "flex",
    minHeight: "100%",
    paddingVertical: 5,
  },
});
