import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DateState from './context/DateState';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DateState>
       <App />
    </DateState>
  </React.StrictMode>
);

reportWebVitals();
