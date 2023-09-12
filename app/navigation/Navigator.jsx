import { useContext } from "react";

import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import AuthContext from "../context/AuthContext";

const Navigator = () => {
  const { user } = useContext(AuthContext);
  console.log("log from Navigator: ", user);
  return user?.userId ? <AppNavigation /> : <AuthNavigation />;
};

export default Navigator;
