import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import { green, white } from "../config/colors";

export default function ListCard({ item, additionalCardStyles, onPress }) {
  const uri = item?.images[0]?.url
    ? { uri: item.images[0].url }
    : require("../assets/no-photo.jpg");
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.cardContainer, additionalCardStyles]}>
        <Image source={uri} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText text={item.title} style={styles.mainTitle} />
          <AppText text={`$${item.price}`} style={styles.description}></AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  cardContainer: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: white,
    borderRadius: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 10,
    display: "flex",
    paddingBottom: 20,
  },
  mainTitle: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "600",
    marginBottom: 3,
  },
  description: {
    fontWeight: "600",
    color: green,
    fontSize: 17,
    // color: "#16A0B5",
  },
});
