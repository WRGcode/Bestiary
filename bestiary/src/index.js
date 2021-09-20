import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router} from "react-router-dom"
import { AppProvider } from './util/context';

import "./styles/main.css" 


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <Router>
    <App />
    </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
