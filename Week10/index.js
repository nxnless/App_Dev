import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './Product';
import Product2 from './Test'
//import App from './App';
import Insert from './Insert';
import MyComponent from './tews1';
import reportWebVitals from './reportWebVitals';
import Product1 from './Product (1)';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <center>
    {//<Product2></Product2><MyComponent></MyComponent>     <Product1></Product1>
    }
    
    <Insert></Insert>
     <Product />
    </center>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
