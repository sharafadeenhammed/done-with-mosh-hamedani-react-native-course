import react from "react";

export const naviagtionRef = react.createRef();

const navigation = (name, params) => {
  naviagtionRef.current?.navigate(name, params);
};

export default {
  navigation,
};
