import React, { useState, useEffect, useReducer, useContext } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = `https://www.dnd5eapi.co/api/monsters/`;

const initialState = {
  count: "",
  results: [],
  // index: '',
  // name: '',
  // url: '',
  loading: true,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [query, setQuery] = useState('');

  const fetchResults = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_RESULTS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResults(`${API_ENDPOINT}`)
  })


  return <AppContext.Provider value={{...state}}>
    {children}
</AppContext.Provider>
};

export const useAppContext = () => {
  return useContext(AppContext);
};
