import { create } from "apisauce";

import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.135.85:9000",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    console.log("fetching data from server ok...");
    return response;
  }
  const data = await cache.get(url);
  if (!data) {
    console.log("...fetching from asyncStorage failed...");
    return response;
  }
  return { ok: true, data };
};

export default apiClient;
