import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider, initializeIcons } from '@fluentui/react';

import Loginpage from './Components/LoginPage';
import HomePage from './Components/HomePage';

// Initialize FluentUI Icons
initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Loginpage /> } />
          <Route path="/home" element={ <HomePage /> } />
          <Route element={ Loginpage } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
