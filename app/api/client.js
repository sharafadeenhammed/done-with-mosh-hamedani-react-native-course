import { create } from "apisauce";

import cache from "../utility/cache";
import AuthStorage from "../utility/AuthStorage";

const apiClient = create({
  baseURL: "http://192.168.209.85:9000",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await AuthStorage.get();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    await cache.store(url, response.data);
    return response;
  }
  // fetch cached data...
  const data = await cache.get(url);

  if (!data) return response;

  return { ok: true, data };
};

export default apiClient;
