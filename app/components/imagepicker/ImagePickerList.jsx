import { StyleSheet, View, FlatList } from "react-native";
import * as imagePicker from "expo-image-picker";

import ImagePicker from "./ImagePicker";
import ImageItem from "./ImageItem";

const ImagePickerList = ({
  items = [],
  imageSize = 100,
  handlePickImage,
  handleImagePress,
}) => {
  return (
    <FlatList
      numColumns={3}
      data={[...items, {}]}
      keyExtractor={(item) => item.assetId || "10"}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            {item?.uri ? (
              <ImageItem
                size={imageSize > 100 ? 100 : imageSize}
                item={item}
                onPress={() => handleImagePress(item)}
              />
            ) : (
              <ImagePicker
                size={imageSize > 100 ? 100 : imageSize}
                onPress={async () => {
                  await handlePickImage();
                }}
              />
            )}
          </View>
        );
      }}
    />
  );
};

export default ImagePickerList;

const styles = StyleSheet.create({
  container: {
    width: "33%",
    alignItems: "center",
    marginBottom: 10,
  },
});
