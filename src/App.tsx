import React from 'react'

// SIMPLE TEST - Basic PerpDEX interface
export default function App() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '20px'
      }}>
        PerpDEX
      </h1>
      
      <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
        Predict SOL Price Movement • Win Big with Leverage
      </p>
      
      <div style={{ display: 'flex', gap: '30px' }}>
        <button style={{
          padding: '20px 40px',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '15px',
          background: '#10b981',
          color: 'white',
          cursor: 'pointer'
        }}>
          📈 UP
        </button>
        
        <div style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          alignSelf: 'center',
          color: '#ffd700'
        }}>
          VS
        </div>
        
        <button style={{
          padding: '20px 40px',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '15px',
          background: '#ef4444',
          color: 'white',
          cursor: 'pointer'
        }}>
          📉 DOWN
        </button>
      </div>
      
      <div style={{ 
        marginTop: '40px', 
        fontSize: '2rem', 
        fontWeight: 'bold',
        color: '#ffd700'
      }}>
        SOL: $145.67
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '1.2rem', opacity: 0.8 }}>
        🎯 Basic PerpDEX Interface - Casino Games Hidden!
      </p>
    </div>
  )
}
