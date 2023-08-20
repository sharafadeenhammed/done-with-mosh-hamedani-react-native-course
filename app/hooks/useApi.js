import { useState } from "react";
const useApi = (apiCall) => {
  const [data, setData] = useState();
  const [isLodading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const request = async () => {
    setIsLoading(true);
    setIsError(false);
    const response = await apiCall();
    setIsLoading(false);
    if (!response.ok) return setIsError(true);
    setData(response.data);
  };

  return { data, isLodading, isError, request };
};

export default useApi;
