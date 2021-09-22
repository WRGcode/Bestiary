import React, { useState, useEffect, useReducer, useContext } from "react";
import { reducer } from "./reducer";

const initialState = {
  count: "",
  results: [],
  query: "",
  // name: '',
  // url: '',
  loading: true,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

 
  const setQuery = (query) => {
    dispatch({ type: "SET_QUERY", payload: query });
  };

  return (
    <AppContext.Provider value={{ ...state, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
