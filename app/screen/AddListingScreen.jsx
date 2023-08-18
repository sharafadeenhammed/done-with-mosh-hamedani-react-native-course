import * as Yup from "yup";
import { Formik } from "formik";
import FalshMessage from "../components/FlashMessage";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppPickerList from "../components/AppPickerLists";
import { Alert, StyleSheet } from "react-native";
import { useState } from "react";
import * as imagePicker from "expo-image-picker";

import ScroolScreen from "../components/ScroolScreen";
import AppButton from "../components/AppButton";
import ImagePickerList from "../components/imagepicker/ImagePickerList";
import useLocation from "../hooks/useLocation";
import listingApi from "../api/listings";

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
  white,
  yellow,
} from "../config/colors";
import UploadScreen from "../components/UploadScreen";

const categoryList = [
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
  category: Yup.object().required().label("Category"),
  description: Yup.string().required().min(1).label("Description"),
  photos: Yup.array()
    .min(1, "select at least one photo")
    .max(5, "You can only select up to five photos"),
});

const AddListingScreen = () => {
  const [modalVibility, setModalVisility] = useState(false);
  const [progressModalVisibility, setProgressModalVisibility] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const location = useLocation();

  const setVisibility = () => {
    // this function sets the category picker modal visibility
    setModalVisility((initialState) => !initialState);
  };

  const handleOnUpload = (progress) => {
    // this function sets the upload progresss during data upload
    setUploadPercentage(progress.loaded / progress.total);
  };

  const handleSubmit = async (formData) => {
    //  this function handle the listing upload
    setUploadPercentage(0);
    setProgressModalVisibility(true);
    const response = await listingApi.addListing(
      { ...formData, location },
      handleOnUpload
    );
    // setProgressModalVisibility(false);

    if (!response.ok) {
      setProgressModalVisibility(false);
      console.log(response.data);
      return alert("Failed to upload/add your listing ");
    }
  };

  return (
    <ScroolScreen screenAdditionalStyles={styles.container}>
      <UploadScreen
        visible={progressModalVisibility}
        progress={uploadPercentage}
        closeModalVisibility={() => setProgressModalVisibility(false)}
      />
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: 0,
          category: "",
          description: "",
          photos: [],
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          setFieldTouched,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
          values,
        }) => {
          const pickImage = async () => {
            setFieldTouched("photos"); // set field touched state \

            const {
              granted,
            } = // ask for user permission to access photos
              await imagePicker.requestMediaLibraryPermissionsAsync();
            if (!granted)
              return alert(
                "you have to allow this acces your photos so we can select photos for your listing"
              );

            //  open images for user to pick from
            try {
              const image = await imagePicker.launchImageLibraryAsync({
                quality: 0.5,
              });
              if (!image.canceled && image.assets.length > 0) {
                setFieldValue("photos", [...values.photos, ...image.assets]);
                return;
              }
            } catch (error) {
              console.log("error: ", error);
            }
          };

          const removeImage = (item) => {
            Alert.alert(
              "Remove Photo",
              "are you sure you want to remove this photo",
              [
                {
                  text: " Yes",
                  onPress: () => {
                    setFieldValue(
                      "photos",
                      values.photos.filter((photo) => item.uri !== photo.uri)
                    );
                  },
                },
                {
                  text: " no",
                },
              ]
            );
          };
          return (
            <>
              <ImagePickerList
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
                textInputAdditionalStyles={styles.inputContainer}
                inputStyles={styles.input}
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
                textInputAdditionalStyles={{
                  ...styles.inputContainer,
                  width: "50%",
                }}
                inputStyles={{ ...styles.input, width: 125 }}
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
                  ...styles.picker,
                }}
                onPress={() => {
                  setVisibility();
                  setFieldTouched("category");
                }}
                placeholder={values.category.title}
              />
              {errors.category && touched.category && (
                <FalshMessage type="error" message={errors.category} />
              )}
              <AppPickerList
                title="select category"
                listData={categoryList}
                numofColumn={3}
                categoryPickerItem={true}
                closeModal={setVisibility}
                pickerValueField="value"
                setPickedvalue={(value) => {
                  setFieldTouched("category");
                  setFieldValue("category", value);
                }}
                modalVisibility={modalVibility}
              />

              <AppTextInput
                iconName="book-edit"
                iconBackgroundcolor={mediumDark}
                placeholder="Description"
                textInputAdditionalStyles={styles.inputContainer}
                inputStyles={styles.input}
                onChangeText={handleChange("description")}
                onBlur={() => setFieldTouched("description")}
                multiline
              />
              {errors.description && touched.description && (
                <FalshMessage type="error" message={errors.description} />
              )}

              <AppButton
                title="Post Listing"
                bgColor={orange}
                onPress={handleSubmit}
                buttonAdditionalStyles={styles.button}
              />
            </>
          );
        }}
      </Formik>
    </ScroolScreen>
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
    backgroundColor: white,
    borderRadius: 5,
    width: "89%",
    paddingHorizontal: 5,
  },
  inputContainer: {
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
    width: "90%",
    marginBottom: 5,
  },
});
export default AddListingScreen;
