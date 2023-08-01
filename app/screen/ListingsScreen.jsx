import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListCard from "../components/ListCard";
import { green, veryLightBlue, white } from "../config/colors";

const initialListings = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../assets/list_images/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch in great condition",
    price: 1000,
    image: require("../assets/list_images/couch.jpg"),
  },
];
const ListingsScreen = () => {
  const [listings, setListings] = useState(initialListings);
  return (
    <Screen screenAdditionalStyles={styles.container}>
      <FlatList
        style={styles.flatList}
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCard
            additionalCardStyles={styles.card}
            photo={item.image}
            title={item.title}
            description={`$${item.price}`}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListItemSeperator additionalSeperatorStyles={styles.listSeperator} />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: veryLightBlue,
  },
  container: {
    paddingHorizontal: 10,
    backgroundColor: white,
  },
  listSeperator: {
    backgroundColor: green,
  },
});
export default ListingsScreen;
