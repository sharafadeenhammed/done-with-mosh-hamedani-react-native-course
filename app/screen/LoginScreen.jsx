import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { blue, dark, green, veryLightBlue } from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import FalshMessage from "../components/FlashMessage";

const validationScehma = Yup.object().shape({
  email: Yup.string().trim().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
const LoginScreen = () => {
  return (
    <Screen screenAdditionalStyles={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log("field value:  \n", values);
        }}
        validationSchema={validationScehma}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => {
          return (
            <>
              <AppTextInput
                clearButton={true}
                cursorColor={dark}
                inputType="text"
                onBlur={() => setFieldTouched("email")}
                placeholder="Email"
                iconName="email"
                iconBackgroundcolor="transparent"
                iconColor={dark}
                onChangeText={handleChange("email")}
                textInputAdditionalStyles={styles.input}
                keyboardType="email-adderess"
              />
              {touched.email && (
                <FalshMessage type="error" message={errors.email} />
              )}
              <AppTextInput
                clearButton={true}
                cursorColor={dark}
                onBlur={() => setFieldTouched("password")}
                inputType="text"
                placeholder="Password"
                iconName="lock"
                onChangeText={handleChange("password")}
                iconBackgroundcolor="transparent"
                iconColor={dark}
                secure={true}
                textInputAdditionalStyles={styles.input}
                keyboardType="email-adderess"
              />
              {touched.password && (
                <FalshMessage message={errors.password} type="error" />
              )}
              <AppButton
                title="Login"
                bgColor={green}
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
    justifyContent: "center",
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
export default LoginScreen;
