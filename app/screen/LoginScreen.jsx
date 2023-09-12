import { useState, useContext } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { blue, dark, green } from "../config/colors";
import AppButton from "../components/AppButton";
import FalshMessage from "../components/FlashMessage";
import authApi from "../api/authApi";
import AuthContext from "../context/AuthContext";

const validationScehma = Yup.object().shape({
  email: Yup.string().trim().required().email().label("Email").trim(),
  password: Yup.string().required().min(6).label("Password"),
});
const LoginScreen = () => {
  const { setUser } = useContext(AuthContext);
  const [isError, setIsError] = useState(false);
  return (
    <Screen screenAdditionalStyles={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      {isError && (
        <FalshMessage message="Invalid email or password" type="error" />
      )}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          setIsError(false);
          const response = await authApi.login(values.email, values.password);
          // check for a succesful request
          if (!response.ok) return setIsError(true);

          // decode token and store
          const decodedJwtToken = jwtDecode(response.data);
          setUser(decodedJwtToken);
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
    marginTop: 20,
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
