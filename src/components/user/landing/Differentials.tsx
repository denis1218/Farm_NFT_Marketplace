import * as React from 'react'
import { MainDiv, HeaderP, RightDiv, DescDiv } from './styled/Differentials.styled'
import { Typography, Box, useMediaQuery } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const Differentials = () => {
  const descriptions = [
    {
      title: 'Aurora Farm NFT',
      description: 'Asset backed by a lawsuit and directly linked to a productive farm. The value of aurora, is linked to new court and the agricultural performance of the region together with commodity values + investment security. Investment in a real and productive asset.'
    },
    {
      title: 'NFT Digital Stickers',
      description: 'Not tied to anything has no real backing and is more volatile and riskier.NFT of stickers not conveyed to anything is an asset that has no intrinsic value or real basis to support its price. The value of this NFT depends completely on investor confidence and market supply and demand.'
    }
  ]

  const match450 = useMediaQuery('(min-width: 450px)')
  return (
    <MainDiv id="differentials">
      <HeaderP>Differentials compared to other NFTs</HeaderP>
      <Typography>Value and Security of Investment</Typography>
      <RightDiv>
        {
          descriptions.map((d, i) => (
            <DescDiv key={i}>
              <CheckIcon />
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={match450 ? { fontSize: 32, fontWeight: 600 } : { fontSize: 20, fontWeight: 600 }}>{d.title}</span>
                <Typography>{d.description}</Typography>
              </Box>
            </DescDiv>
          ))
        }
      </RightDiv>
    </MainDiv>
  )
}

export default Differentials
