import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { blue, dark, green } from "../config/colors";
import AppButton from "../components/AppButton";
import FalshMessage from "../components/FlashMessage";
import authApi from "../api/authApi";
import useApi from "../hooks/useApi";
import useAuth from "../hooks/useAuth";
import ActivityIndicator from "../components/animations/ActivityIndicator";

const validationScehma = Yup.object().shape({
  name: Yup.string().trim().required().min(1).label("Name"),
  email: Yup.string().trim().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  const auth = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const registerApi = useApi(authApi.register, "");

  const handleSubmit = async (values) => {
    await signUp(values);
    if (registerApi.isError)
      return setErrorMessage(
        registerApi?.data?.error || "Error signing you up !"
      );
    await auth.login(registerApi.data.token);
  };

  const signUp = async (values) => {
    setErrorMessage("");
    await registerApi.request(values);
  };

  return (
    <Screen screenAdditionalStyles={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>

      {registerApi.isError && errorMessage ? (
        <FalshMessage message={errorMessage} type="error" />
      ) : null}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationScehma}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => {
          return (
            <>
              <AppTextInput
                clearButton={true}
                cursorColor={dark}
                inputType="text"
                onBlur={() => setFieldTouched("name")}
                placeholder="Name"
                iconName="account"
                iconBackgroundcolor="transparent"
                iconColor={dark}
                onChangeText={handleChange("name")}
                textInputAdditionalStyles={styles.input}
                keyboardType="email-adderess"
              />
              {touched.name && (
                <FalshMessage type="error" message={errors.name} />
              )}
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
              {!registerApi.isLodading ? (
                <AppButton
                  title="Register"
                  bgColor={green}
                  onPress={handleSubmit}
                  buttonAdditionalStyles={styles.button}
                />
              ) : (
                <ActivityIndicator
                  animate={registerApi.isLodading}
                  style={styles.loading}
                />
              )}
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
  loading: {
    height: 100,
    marginBottom: 10,
  },
});
export default RegisterScreen;
