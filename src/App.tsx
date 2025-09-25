import React, { useState } from 'react'

export default function App() {
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null)

  const handlePrediction = (prediction: string) => {
    setSelectedPrediction(selectedPrediction === prediction ? null : prediction)
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      
      {/* Header */}
      <div style={{
        position: 'absolute',
        top: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          margin: '0 0 10px 0',
          background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          PerpDEX
        </h1>
        <p style={{
          fontSize: '1.4rem',
          margin: '0',
          opacity: 0.9
        }}>
          Predict SOL Price Movement • Win Big with Leverage
        </p>
      </div>

      {/* Wallet Button */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px'
      }}>
        <button style={{
          padding: '12px 24px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '10px',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)'
        }}>
          Connect Wallet
        </button>
      </div>

      {/* Main Game Area */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>

        {/* SOL Price Display */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px 50px',
          textAlign: 'center',
          border: '2px solid rgba(255, 215, 0, 0.3)'
        }}>
          <div style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '10px' }}>
            SOL/USD
          </div>
          <div style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: '#ffd700'
          }}>
            $145.67
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: '10px' }}>
            Live Price Feed
          </div>
        </div>

        {/* Game Instructions */}
        <div style={{
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          <h2 style={{ fontSize: '2rem', margin: '0 0 15px 0', color: '#ffd700' }}>
            🎯 SOL Price Prediction
          </h2>
          <p style={{ fontSize: '1.3rem', margin: '0', lineHeight: '1.5', opacity: 0.9 }}>
            Will SOL price be <strong style={{color: '#10b981'}}>HIGHER</strong> or <strong style={{color: '#ef4444'}}>LOWER</strong> at round end?
          </p>
        </div>

        {/* Prediction Buttons */}
        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center'
        }}>
          <button
            onClick={() => handlePrediction('UP')}
            style={{
              padding: '25px 50px',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: selectedPrediction === 'UP' ? '#10b981' : 'rgba(16, 185, 129, 0.2)',
              color: selectedPrediction === 'UP' ? 'white' : '#10b981',
              transform: selectedPrediction === 'UP' ? 'scale(1.1)' : 'scale(1)',
              boxShadow: selectedPrediction === 'UP' ? '0 10px 30px rgba(16, 185, 129, 0.4)' : 'none',
              border: '2px solid #10b981'
            }}
          >
            📈 UP
          </button>

          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#ffd700',
            textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
          }}>
            VS
          </div>

          <button
            onClick={() => handlePrediction('DOWN')}
            style={{
              padding: '25px 50px',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: selectedPrediction === 'DOWN' ? '#ef4444' : 'rgba(239, 68, 68, 0.2)',
              color: selectedPrediction === 'DOWN' ? 'white' : '#ef4444',
              transform: selectedPrediction === 'DOWN' ? 'scale(1.1)' : 'scale(1)',
              boxShadow: selectedPrediction === 'DOWN' ? '0 10px 30px rgba(239, 68, 68, 0.4)' : 'none',
              border: '2px solid #ef4444'
            }}
          >
            📉 DOWN
          </button>
        </div>

        {/* Selected Prediction Display */}
        {selectedPrediction && (
          <div style={{
            background: 'rgba(255, 215, 0, 0.1)',
            border: '2px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '15px',
            padding: '20px 40px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ffd700' }}>
              Selected: {selectedPrediction} 
            </div>
            <div style={{ fontSize: '1rem', opacity: 0.8, marginTop: '10px' }}>
              Leverage & betting features coming soon
            </div>
          </div>
        )}

        {/* Round Info */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '15px',
          padding: '20px 30px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#ffd700', marginBottom: '10px' }}>
            Round Duration: 1 Week
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            🚫 No casino games • Pure PerpDEX interface only!
          </div>
        </div>
      </div>
    </div>
  )
}
