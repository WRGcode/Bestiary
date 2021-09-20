import React, { useState, useEffect, useReducer, useContext } from 'react'
import { reducer } from './reducer'
const API_ENDPOINT = `https://www.dnd5eapi.co/api/monsters`;

const initialState = {
    count: '',
    results: [],
    // index: '',
    // name: '',
    // url: '',
    loading: true,
}

const AppContext = React.createContext()



export const useAppContext = () => {
    return useContext(AppContext);
}

