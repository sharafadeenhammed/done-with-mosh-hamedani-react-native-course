import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import AppText from "./AppText";
import { veryLightGray, lightGray, veryLightBlue } from "../config/colors";

export default function ListItem({
  image,
  title,
  description,
  addiotionalListStyle,
  handlePress,
  icon,
}) {
  return (
    <TouchableHighlight onPress={handlePress} underlayColor={veryLightGray}>
      <View style={[styles.mainContainer, addiotionalListStyle]}>
        {icon && !image && icon()}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailContainer}>
          <AppText text={title} style={styles.title} />
          {description && (
            <AppText text={description} style={styles.description} />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  description: {
    color: lightGray,
  },
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  mainContainer: {
    width: "100%",
    diaplay: "flex",
    flexDirection: "row",
    overflow: "hidden",
    padding: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    objectFit: "cover",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 1,
    textTransform: "capitalize",
  },
});
