import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";

export default function ListCard({ photo, title, subTitle }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={photo} style={styles.image} />
      <View style={styles.titleContainer}>
        <AppText text={title} style={styles.mainTitle} />
        <AppText text={subTitle} style={styles.subTitle}></AppText>
      </View>
    </View>
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
  titleContainer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 30,
    display: "flex",
    paddingBottom: 20,
  },
  mainTitle: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: "500",
    color: "#16A0B5",
  },
});
