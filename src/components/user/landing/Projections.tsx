import * as React from 'react'
import { MainDiv, Title } from './styled/Projections.styled'
import { Box, useMediaQuery } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const Projections = () => {
  const match450 = useMediaQuery('(min-width:450px)')

  return (
    <MainDiv>
      <Title>Property / Region Valuation Projections</Title>
      <Box>
        <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <CheckIcon style={{ color: '#8adaaa', marginRight: '1rem' }} />
          <span>This route will pass in front of Aurora Farm and transform the state into a national logistical hub that could raise the value of the asset to over&nbsp;</span><span style={{ color: 'green' }}>+$600 million.</span>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <CheckIcon style={{ color: '#8adaaa', marginRight: '1rem' }} />
          <span>The Major Geopolitical objective of brazil Professor HOC&nbsp;</span><span style={{ color: 'green' }}>+$600 million.</span>
        </Box>
      </Box>
      <Box style={{ margin: '2rem 0rem', display: 'flex', justifyContent: 'center' }}>
        <video width={ match450 ? '80%' : '100%' } height={ match450 ? '80%' : '100%' } controls>
          <source src='../../../assets/ROUTE VIDEO.mp4' type="video/mp4" />
        </video>
      </Box>
    </MainDiv>
  )
}

export default Projections
