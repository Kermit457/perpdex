import React from 'react'
import UpDownApp from './components/UpDownApp'

// FORCE PURE PERPDEX INTERFACE - NO GAMBA GAMES!
export default function App() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <UpDownApp />
    </div>
  )
}
