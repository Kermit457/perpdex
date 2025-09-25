import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

// MINIMAL SETUP - Just render PerpDEX without Gamba/Privy providers
function Root() {
  return <App />
}

root.render(<Root />)
