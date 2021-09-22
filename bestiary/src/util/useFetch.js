import {useState, useEffect } from "react";

const API_ENDPOINT = `https://www.dnd5eapi.co/api/monsters`;

export const useFetch =  (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async(url) => {
    setLoading(true);
    // dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data);
      //   dispatch({ type: "SET_RESULTS", payload: data });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${query}`);
    fetchData(`${API_ENDPOINT}${query}`);
  }, []);

  return {data, loading}
};
