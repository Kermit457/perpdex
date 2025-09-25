import React, { useState } from 'react'
import { GambaUi } from 'gamba-react-ui-v2'
import styled from 'styled-components'

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  min-height: 400px;
  color: white;
`

const PriceDisplay = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  color: #ffd700;
  text-align: center;
  padding: 30px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 215, 0, 0.3);
`

const PredictionRow = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 20px 0;
`

const PredictionButton = styled.button<{ selected: boolean; color: string }>`
  padding: 20px 40px;
  border: none;
  border-radius: 15px;
  font-size: 1.4em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.selected ? props.color : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.selected ? '#000' : '#fff'};
  transform: ${props => props.selected ? 'scale(1.1)' : 'scale(1)'};
  box-shadow: ${props => props.selected ? '0 8px 25px rgba(0,0,0,0.3)' : 'none'};

  &:hover {
    transform: scale(1.1);
    background: ${props => props.color};
    color: #000;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  }
`

const VSText = styled.div`
  color: #ffd700;
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
`

type PredictionType = 'UP' | 'DOWN' | null

export default function UpDownGame() {
  const [prediction, setPrediction] = useState<PredictionType>(null)

  return (
    <GambaUi.Portal target="screen">
      <GameContainer>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '2rem', color: '#ffd700' }}>
            🎯 SOL Price Prediction
          </h2>
          <p style={{ margin: '0', fontSize: '1.2rem', color: '#ccc' }}>
            Will SOL be higher or lower at round end?
          </p>
        </div>

        <PriceDisplay>
          <div style={{ fontSize: '0.6em', color: '#ccc', marginBottom: '10px' }}>SOL/USD</div>
          <div>$145.67</div>
          <div style={{ fontSize: '0.4em', color: '#888', marginTop: '10px' }}>
            Live Price Feed
          </div>
        </PriceDisplay>

        <PredictionRow>
          <PredictionButton
            selected={prediction === 'UP'}
            color="#10b981"
            onClick={() => setPrediction(prediction === 'UP' ? null : 'UP')}
          >
            📈 UP
          </PredictionButton>

          <VSText>VS</VSText>

          <PredictionButton
            selected={prediction === 'DOWN'}
            color="#ef4444"
            onClick={() => setPrediction(prediction === 'DOWN' ? null : 'DOWN')}
          >
            📉 DOWN
          </PredictionButton>
        </PredictionRow>

        <div style={{ 
          textAlign: 'center', 
          fontSize: '1.1em',
          color: prediction ? '#ffd700' : '#888',
          fontWeight: 'bold',
          marginTop: '20px'
        }}>
          {prediction ? `Selected: ${prediction}` : 'Select UP or DOWN to continue'}
        </div>

        <div style={{
          background: 'rgba(255, 215, 0, 0.1)',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px',
          textAlign: 'center',
          border: '1px solid rgba(255, 215, 0, 0.3)'
        }}>
          <div style={{ color: '#ffd700', fontWeight: 'bold', marginBottom: '10px' }}>
            Round Duration: 1 Week
          </div>
          <div style={{ color: '#ccc', fontSize: '0.9em' }}>
            Leverage multipliers & live betting coming soon
          </div>
        </div>
      </GameContainer>
    </GambaUi.Portal>
  )
}
