import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllMenus from './Context/AllMenuContext';
import AllMenuContextProvider from './Context/AllMenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AllMenuContextProvider>

  <React.StrictMode>
    <App />


  </React.StrictMode>
  </AllMenuContextProvider>

);

