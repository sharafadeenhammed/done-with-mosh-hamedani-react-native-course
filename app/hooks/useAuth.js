import { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "../context/AuthContext";
import AuthStorage from "../utility/AuthStorage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const login = async (authToken) => {
    const decodedToken = jwtDecode(authToken);
    await AuthStorage.store(decodedToken);
    setUser(decodedToken);
  };

  const logOut = async () => {
    await AuthStorage.remove();
    setUser({});
  };

  const restoreToken = async () => {
    const userData = await AuthStorage.get();
    setUser(userData);
  };
  return { user, login, logOut, restoreToken };
};
