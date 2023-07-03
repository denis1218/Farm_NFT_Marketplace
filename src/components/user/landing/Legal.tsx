import * as React from 'react'
import {
  MainDiv, ShadowDiv, ImgDiv
} from './styled/Legal.styled'
import { TitleDiv } from './styled/Common.styled'
import { Grid, Typography, useMediaQuery } from '@mui/material'
import firstImg from 'src/assets/Rectangle 309.png'
import secondImg from 'src/assets/Rectangle 310.png'
import thirdImg from 'src/assets/Rectangle 311.png'

const Legal = () => {
  const match1100 = useMediaQuery('(min-width: 1100px)')
  const match950 = useMediaQuery('(min-width: 950px)')
  const match450 = useMediaQuery('(min-width: 450px)')

  return (
    <MainDiv id='legal'>
      <TitleDiv>LEGAL&nbsp;<div style={match450 ? { width: '6rem', height: '4rem', borderBottom: '0.5rem solid black' } : { width: '6rem', height: '2.5rem', borderBottom: '0.3rem solid black', marginBottom: '2rem' }}></div></TitleDiv>
      <Typography>Success of the investment depends not only on the outcome of the court case, but also on the investor&apos;s ability to bear these additional costs.</Typography>
      <Grid container spacing={3}>
        <Grid item xs={match950 ? 6 : 12}>
          <Grid item xs={12}>
            <ImgDiv src={firstImg} />
            <ShadowDiv />
            <Typography style={{ position: 'absolute', fontSize: 24, fontWeight: 600, top: '15%', left: '10%', color: 'white', zIndex: 3 }}>Aurora Farm NFT</Typography>
            <Typography style={match1100 ? { position: 'absolute', width: '61.2%', fontSize: 14, lineHeight: 2.5, top: '30%', left: '10%', color: 'white', zIndex: 3 } : { position: 'absolute', width: '80%', fontSize: 14, lineHeight: 2.5, top: '30%', left: '10%', color: 'white', zIndex: 3 }}>Aurora Farm NFT is pegged to a judicial asset related to a highly productive farm, with a market value of 12 billion reais, the value of Aurora is directly related to the outcome of the legal procedures related to Aurora Farm.</Typography>
          </Grid>
        </Grid>
        <Grid item xs={match950 ? 3 : 6}>
          <Grid item xs={12}>
            <ImgDiv src={secondImg} />
            <ShadowDiv />
            <Typography style={{ position: 'absolute', width: '50%', fontSize: 24, fontWeight: 600, bottom: '0rem', left: '15%', color: 'white', zIndex: 3 }}>The Supreme Court</Typography>
          </Grid>
        </Grid>
        <Grid item xs={match950 ? 3 : 6}>
          <Grid item xs={12}>
            <ImgDiv src={thirdImg} />
            <ShadowDiv />
            <Typography style={match450 ? { position: 'absolute', width: '70%', fontSize: 24, fontWeight: 600, bottom: '0rem', left: '15%', color: 'white', zIndex: 3 } : { position: 'absolute', width: '70%', fontSize: 18, fontWeight: 600, bottom: '0rem', left: '15%', color: 'white', zIndex: 3 }}>Investor of Aurora Farm NFT</Typography>
          </Grid>
        </Grid>
      </Grid>
    </MainDiv>
  )
}

export default Legal
