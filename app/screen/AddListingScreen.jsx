import * as Yup from "yup";
import { Formik } from "formik";
import FalshMessage from "../components/FlashMessage";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppPickerList from "../components/AppPickerLists";
import { StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import {
  blue,
  green,
  lightGray,
  mediumBlue,
  mediumPurple,
  orange,
  purple,
  red,
  yellow,
} from "../config/colors";

const listItem = [
  {
    id: 1,
    title: "Electronics",
    value: "Electronics",
  },
  {
    id: 2,
    title: "Furniture",
    value: "Furniture",
  },
  {
    id: 3,
    title: "Clothings",
    value: "Clothings",
  },
];
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).label("Price").min(1).max(10000),
  category: Yup.string().required().min(1).label("Category"),
  description: Yup.string().required().min(1).label("Description"),
});
const AddListingScreen = () => {
  const [category, setCategory] = useState("select category");
  const [modalVibility, setModalVisility] = useState(false);

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
      title: "",
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
      // icon: "card-outline",
      icon: "comment-question-outline",
      iconBackgroundColor: blue,
    },
  ];
  const setVisibility = () => {
    setModalVisility((initialState) => !initialState);
  };
  return (
    <Screen screenAdditionalStyles={styles.container}>
      <MaterialCommunityIcons name="comment-question-outline" />
      <Formik
        validationSchema={validationSchema}
        initialValues={{ title: "", price: 0, category: "", description: "" }}
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
          return (
            <>
              <AppTextInput
                placeholder="Title"
                textInputAdditionalStyles={styles.input}
                onChangeText={handleChange("title")}
                onBlur={() => setFieldTouched("title")}
              />
              {errors.title && touched.title && (
                <FalshMessage type="error" message={errors.title} />
              )}

              <AppTextInput
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
                pickerAdditionalStyles={{ width: "90%", marginBottom: 5 }}
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
                  handleChange("category");
                  setFieldValue("category", value);
                  setFieldTouched("category");
                }}
                modalVisibility={modalVibility}
              />
              {/* <TextInput keyboardType="" /> */}

              <AppTextInput
                placeholder="Description"
                textInputAdditionalStyles={styles.input}
                onChangeText={handleChange("description")}
                onBlur={() => setFieldTouched("description")}
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
});
export default AddListingScreen;
