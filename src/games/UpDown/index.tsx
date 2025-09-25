import React from 'react'
import { GambaUi } from 'gamba-react-ui-v2'

export default function UpDownGame() {
  return (
    <GambaUi.Portal target="screen">
      <div style={{ textAlign: 'center', padding: '40px', color: 'white' }}>
        <h1>🎯 PerpDEX UpDown Game</h1>
        <p>SOL Price Prediction Coming Soon</p>
        <div style={{ fontSize: '2em', margin: '20px' }}>📈 UP vs DOWN 📉</div>
      </div>
    </GambaUi.Portal>
  )
}
