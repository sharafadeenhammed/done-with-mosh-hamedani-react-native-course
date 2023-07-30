import { View, Text, StyleSheet, Image } from "react-native";

import { lightGreen } from "../config/colors";
import AppText from "../components/AppText";

import jacket from "../assets/list_images/jacket.jpg";
import ListItem from "../components/ListItem";

import mosh from "../assets/list_images/mosh.jpg";

export default function ListingDetailsScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={jacket} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} text="Red Jacket For Sale" />
        <AppText style={styles.price} text="$100" />
        <View style={styles.userContainer}>
          <ListItem
            image={mosh}
            title="mosh hamedani"
            description="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  mainContainer: {
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    marginTop: 10,
    color: lightGreen,
    fontSize: 20,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
