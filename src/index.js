import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Client from 'shopify-buy';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = Client.buildClient({
  domain: 'humourbaba1.myshopify.com',
  storefrontAccessToken: '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'
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
