import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

import './firebase_config'

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => console.log(document.getElementById('emotion').innerHTML), 1000);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

