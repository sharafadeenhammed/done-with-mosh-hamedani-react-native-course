import * as Yup from "yup";
import { Formik } from "formik";
import FalshMessage from "../components/FlashMessage";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppPickerList from "../components/AppPickerLists";
import { StyleSheet } from "react-native";
import { useState } from "react";
import * as imagePicker from "expo-image-picker";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import ImagePickerList from "../components/imagepicker/ImagePickerList";

import {
  blue,
  green,
  lightGray,
  mediumBlue,
  mediumDark,
  mediumPurple,
  orange,
  purple,
  red,
  yellow,
} from "../config/colors";

const listItem = [
  {
    id: 1,
    title: "Furniture",
    value: "furniture",
    icon: "lamp",
    iconBackgroundColor: orange,
  },
  {
    id: 2,
    title: "Cars",
    value: "cars",
    icon: "car",
    iconBackgroundColor: red,
  },
  {
    id: 3,
    title: "Camera",
    value: "camera",
    icon: "camera",
    iconBackgroundColor: yellow,
  },
  {
    id: 4,
    title: "Games",
    value: "games",
    icon: "gamepad",
    iconBackgroundColor: mediumPurple,
  },
  {
    id: 5,
    title: "Clothings",
    value: "clothings",
    icon: "shoe-heel",
    iconBackgroundColor: lightGray,
  },
  {
    id: 6,
    title: "Sports",
    value: "sports",
    icon: "basketball",
    iconBackgroundColor: mediumBlue,
  },
  {
    id: 7,
    title: "Movies & Music",
    value: "movies & music",
    icon: "headphones",
    iconBackgroundColor: green,
  },
  {
    id: 8,
    title: "Books",
    value: "books",
    icon: "book",
    iconBackgroundColor: purple,
  },
  {
    id: 9,
    title: "Others",
    value: "others",
    icon: "comment-question-outline",
    iconBackgroundColor: blue,
  },
];
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).label("Price").min(1).max(10000),
  category: Yup.string().required().min(1).label("Category"),
  description: Yup.string().required().min(1).label("Description"),
  photos: Yup.array().required().min(1).label("Photo"),
});
const AddListingScreen = () => {
  const [category, setCategory] = useState("select category");
  const [modalVibility, setModalVisility] = useState(false);
  const [imageUris, setImageUris] = useState([]);

  const setVisibility = () => {
    setModalVisility((initialState) => !initialState);
  };

  return (
    <Screen screenAdditionalStyles={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: 0,
          category: "",
          description: "",
          photos: [],
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          setFieldTouched,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
        }) => {
          const pickImage = async () => {
            setFieldTouched("photos");
            const { granted } =
              await imagePicker.requestMediaLibraryPermissionsAsync();
            if (!granted)
              alert(
                "you have to allow this acces your photos so we can select photos for your listing"
              );
            try {
              const image = await imagePicker.launchImageLibraryAsync();
              if (!image.canceled && image.assets.length > 0) {
                setImageUris((initialState) => {
                  const uris = [...initialState, image.assets[0]];
                  setFieldValue("photos", uris);

                  return uris;
                });
                return;
              }
            } catch (error) {
              console.log("error: ", error);
            }
          };
          const removeImage = (item) => {
            setImageUris((initialState) => {
              return initialState.filter((photo) => item.uri !== photo.uri);
            });
          };
          return (
            <>
              <ImagePickerList
                items={imageUris}
                imageSize={100}
                handlePickImage={pickImage}
                handleImagePress={(image) => removeImage(image)}
              />
              {errors.photos && touched.photos ? (
                <FalshMessage type="error" message={errors.photos} />
              ) : null}
              <AppTextInput
                placeholder="Title"
                iconName="note-edit"
                iconBackgroundcolor={mediumPurple}
                textInputAdditionalStyles={styles.input}
                onChangeText={handleChange("title")}
                onBlur={() => setFieldTouched("title")}
              />
              {errors.title && touched.title && (
                <FalshMessage type="error" message={errors.title} />
              )}

              <AppTextInput
                iconName="cash"
                iconBackgroundcolor={green}
                placeholder="Price"
                textInputAdditionalStyles={{ ...styles.input, width: "50%" }}
                onChangeText={handleChange("price")}
                keyboardType="numeric"
                onBlur={() => setFieldTouched("price")}
              />
              {errors.price && touched.price && (
                <FalshMessage type="error" message={errors.price} />
              )}

              <AppPicker
                iconName="apps"
                iconColor={blue}
                pickerAdditionalStyles={{
                  width: "90%",
                  marginBottom: 5,
                  ...styles.picker,
                }}
                onPress={setVisibility}
                placeholder={category}
              />
              {errors.category && touched.category && (
                <FalshMessage type="error" message={errors.category} />
              )}
              <AppPickerList
                title="select category"
                listData={listItem}
                numofColumn={3}
                categoryPickerItem={true}
                closeModal={setVisibility}
                pickerValueField="value"
                setPickedvalue={(value) => {
                  setCategory(value);
                  setFieldTouched("category");
                  setFieldValue("category", value);
                }}
                modalVisibility={modalVibility}
              />

              <AppTextInput
                iconName="book-edit"
                iconBackgroundcolor={mediumDark}
                placeholder="Description"
                textInputAdditionalStyles={styles.input}
                onChangeText={handleChange("description")}
                onBlur={() => setFieldTouched("description")}
                multiline
              />
              {errors.description && touched.description && (
                <FalshMessage type="error" message={errors.description} />
              )}

              <AppButton
                title="Create Listing"
                bgColor={orange}
                onPress={handleSubmit}
                buttonAdditionalStyles={styles.button}
              />
            </>
          );
        }}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 30,
    color: green,
  },
  input: {
    padding: 10,
    borderBottomColor: "transparent",
    marginVertical: 10,
    width: "100%",
    borderRadius: 10,
    margin: 0,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 30,
  },
  logo: {
    height: 100,
    width: 100,
  },
  button: {
    color: blue,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  picker: {
    marginTop: 10,
  },
});
export default AddListingScreen;
