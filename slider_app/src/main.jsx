import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Your global CSS
// import '@mui/material/styles'; // MUI styles

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
