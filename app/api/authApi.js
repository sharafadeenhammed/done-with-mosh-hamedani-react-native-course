import client from "./client";
const endPoint = "/api/auth";

const login = async (email, password) => {
  return await client.post(endPoint, JSON.stringify({ email, password }), {
    headers: { "Content-Type": "application/json" },
  });
};

export default {
  login,
};
