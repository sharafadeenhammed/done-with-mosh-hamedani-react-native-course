import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import { green } from "../config/colors";

export default function ListCard({
  photo,
  title,
  additionalCardStyles,
  description,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.cardContainer, additionalCardStyles]}>
        <Image source={photo} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText text={title} style={styles.mainTitle} />
          <AppText text={description} style={styles.description}></AppText>
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
    backgroundColor: "#FFFFFF",
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
