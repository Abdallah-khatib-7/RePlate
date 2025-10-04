// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/tailwind.css'  // FOLLOWING YOUR STRUCTURE
import './styles/globals.css'   // FOLLOWING YOUR STRUCTURE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)