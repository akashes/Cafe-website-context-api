import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AllMenuContextProvider} from './Context/AllMenuContext';
import {BrowserRouter} from 'react-router-dom'
import { AppProvider } from './Context/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppProvider>
<AllMenuContextProvider>
    <BrowserRouter>
    <React.StrictMode>
    <App />


  </React.StrictMode>
    </BrowserRouter>


  </AllMenuContextProvider>
</AppProvider>

);

