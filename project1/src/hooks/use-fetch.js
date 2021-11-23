import React, { useEffect, useState } from "react";

const useFetch = (url,options={},HandleRequest) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let data =[];
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      HandleRequest(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [isLoading, error, data];
};
export default useFetch;
