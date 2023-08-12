import { View, Text, StyleSheet, Image } from "react-native";

import { green } from "../config/colors";
import AppText from "../components/AppText";

import ListItem from "../components/ListItem";

import mosh from "../assets/list_images/mosh.jpg";
import Screen from "../components/Screen";

export default function ListingDetailsScreen({ route }) {
  const {
    params: { item },
  } = route;
  return (
    <Screen screenAdditionalStyles={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: item.images[0].url }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} text={item.title} />
          <AppText style={styles.price} text={`$${item.price}`} />
          <View style={styles.userContainer}>
            <ListItem
              image={mosh}
              title="mosh hamedani"
              description="5 listings"
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    marginTop: 10,
    color: green,
    fontSize: 20,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
