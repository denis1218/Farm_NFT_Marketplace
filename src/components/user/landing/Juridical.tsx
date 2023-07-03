import * as React from 'react'
import { LeftDiv, MainDiv, RightDiv } from './styled/Juridical.styled'
import { Title } from './styled/Increase.styled'
import { Typography, useMediaQuery } from '@mui/material'
import img from 'src/assets/Rectangle 321.png'

const Juridical = () => {
  const match800 = useMediaQuery('(min-width: 800px)')
  const match450 = useMediaQuery('(min-width: 450px)')

  return (
    <MainDiv style={match800 ? {} : { display: 'flex', flexDirection: 'column' }} id='juridical'>
      <LeftDiv style={match800 ? {} : { width: '100%' }}>
        <Title>Juridical</Title>
        <Typography style={match450 ? { fontSize: 24, fontWeight: 800, marginTop: '5rem', marginBottom: '1rem' } : { fontSize: 20, fontWeight: 600, marginTop: '1rem', marginBottom: '1rem' }}>NOTA TECNICA AURORA FARM</Typography>
        <Typography style={{ color: '#7c7d7c', borderBottom: '1px solid #aaa', paddingBottom: '1rem', marginBottom: '1rem' }}>To point out that they are two shares, and they share the risk in half, if one loses and the other wins, the investors will make a profit in the same way.</Typography>
      </LeftDiv>
      <RightDiv style={match800 ? {} : { width: '100%' }}>
        <img src={img} width='100%' />
      </RightDiv>
    </MainDiv>
  )
}

export default Juridical
