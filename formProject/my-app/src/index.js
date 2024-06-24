// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './utils/AuthConfig/AuthProvider';


ReactDOM.render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

