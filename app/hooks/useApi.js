import { useState } from "react";

const useApi = (apiCall, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [isLodading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const request = async (...args) => {
    setData(initialData);
    setIsLoading(true);
    setIsError(false);
    const response = await apiCall(...args);
    setIsLoading(false);
    if (!response.ok) return setIsError(true);
    setData(response.data);
  };
  return { data, isLodading, isError, request };
};

export default useApi;
