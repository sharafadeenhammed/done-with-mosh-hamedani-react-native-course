import { StyleSheet, View, ScrollView } from "react-native";
import ImagePicker from "./ImagePicker";
import ImageItem from "./ImageItem";
import { useRef } from "react";

const ImagePickerList = ({
  items = [],
  imageSize = 100,
  handlePickImage,
  handleImagePress,
}) => {
  const scroolView = useRef();
  items = [...items, {}];
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scroolView}
        horizontal={true}
        onScrollAnimationEnd={true}
        onContentSizeChange={() =>
          scroolView.current.scrollToEnd({ animated: true })
        }
      >
        {items.map((item, index) => (
          <View key={index.toString() || "10"} style={styles.ImageContainer}>
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
        ))}
      </ScrollView>
    </View>
  );
};

export default ImagePickerList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  ImageContainer: {
    marginRight: 10,
  },
});
