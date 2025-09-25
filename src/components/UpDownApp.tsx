import React from 'react'
import { GambaUi } from 'gamba-react-ui-v2'
import styled from 'styled-components'
import UpDownGame from '../games/UpDown'

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 20px;
`

const Header = styled.div`
  text-align: center;
  padding: 40px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const WalletSection = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
`

export default function UpDownApp() {
  return (
    <AppContainer>
      <WalletSection>
        <GambaUi.WalletButton />
      </WalletSection>
      <Header>
        <Title>PerpDEX</Title>
        <p>Predict SOL Price Movement • Win Big with Leverage</p>
      </Header>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <GambaUi.Game game={UpDownGame} />
      </div>
    </AppContainer>
  )
}
