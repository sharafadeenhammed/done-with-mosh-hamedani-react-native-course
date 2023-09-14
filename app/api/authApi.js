import client from "./client";
const endPoint = "/api";

const login = async (email, password) => {
  return await client.post(
    endPoint + "/auth",
    JSON.stringify({ email, password }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

const register = async (values) => {
  return await client.post(
    endPoint + "/users",
    JSON.stringify({
      ...values,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

export default {
  login,
  register,
};
