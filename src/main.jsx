import React from 'react'
import ReactDOM from 'react-dom/client'
import FoodApp from './FoodApp'
import './index.css'

// Add temporary debug
console.log('React is mounting...') // Check if this appears in browser console

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FoodApp />
  </React.StrictMode>
)