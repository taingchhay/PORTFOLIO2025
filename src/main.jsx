import React from 'react'
import ReactDOM from 'react-dom/client'; // Correct import path
//import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//ReactDOM.createRoot(document.getElementById('root')).render(
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
