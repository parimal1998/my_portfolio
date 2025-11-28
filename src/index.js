import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <html>
    <head>
    <link href='https://cdn.boxicons.com/3.0.4/fonts/basic/boxicons.min.css' rel='stylesheet' />
    </head>
    <body>
    <React.StrictMode>
    <App />
  </React.StrictMode>
    </body>
  </html>
 
);

