import { create } from "apisauce";

import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.10.85:9000",
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
