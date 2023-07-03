import * as React from 'react'

import { DescDiv, MainDiv } from './styled/AboutUs.styled'
import { TitleDiv } from './styled/Common.styled'
import { Grid, useMediaQuery } from '@mui/material'
import Img1 from 'src/assets/Rectangle 285.png'
import Img2 from 'src/assets/Rectangle 306.png'
import Img3 from 'src/assets/Rectangle 307.png'
import Img4 from 'src/assets/Rectangle 308.png'

const AboutUs = () => {
  const match1440 = useMediaQuery('(min-width: 1450px)')
  const match1260 = useMediaQuery('(min-width: 1260px)')
  const match700 = useMediaQuery('(min-width: 700px)')
  const match600 = useMediaQuery('(min-width: 600px)')

  return (
    <MainDiv style={match1440 ? { display: 'flex', justifyContent: 'center', padding: '0px 15%' } : match1260 ? { display: 'flex', justifyContent: 'center', padding: '0px 10%' } : match600 ? { display: 'flex', justifyContent: 'center', padding: '0px 10%', backgroundSize: 'cover' } : { display: 'flex', justifyContent: 'center', padding: '0px 3%', backgroundSize: 'cover' } } id="aboutus">
      <Grid container>
        <Grid item xs={match1260 ? 6 : 12} className={match1260 ? 'first' : ''}>
          <TitleDiv style={match600 ? {} : { fontSize: 32, fontWeight: 600, justifyContent: 'center' }}>ABOUT US&nbsp;<div style={match600 ? { width: '6rem', height: '4rem', borderBottom: '0.5rem solid black' } : { width: '6rem', height: '2.5rem', borderBottom: '0.3rem solid black' }}></div></TitleDiv>
          <DescDiv>
            Judicaial Asset is a company specializing in crowdfunding, operating with a focus on Brazil, Paraguay, and Argentina.
            <br/><br/>{ match600 && <br/> }Welcome to our &quot;About Us&quot; section! We are excited to share with you a little more about our firm specializing in crowdfunding, operating with a focus on Brazil, Paraguay, and Argentina.
            <br/><br/>{ match600 && <><br/><br/></> }At our company, we strive to provide innovative and effective solutions for our clients. We are proud to work with Ibaneis Rocha, one of the most renowned law firms in Brazil, This enables us to offer reliable and secure contracts to our clients, ensuring that all legal aspects are handled with professionalism and care.
          </DescDiv>
        </Grid>
        <Grid item xs={match1260 ? 6 : 12} className={'second'}>
          <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'center' }}>
            <img src={Img1} style={{ paddingBottom: '1.5rem', width: match600 ? '' : '95%' }} />
            <img src={Img3} style={{ paddingBottom: '1.5rem', width: match600 ? '' : '95%' }} />
          </div>
          <div style={match700 ? { display: 'flex', alignItems: 'flex-end', flexDirection: 'column', marginLeft: '5rem' } : { display: 'flex', alignItems: 'center', flexDirection: 'column' } }>
            <img src={Img2} style={{ paddingBottom: '1.5rem', width: match600 ? '' : '95%' }} />
            <img src={Img4} style={{ width: match600 ? '' : '95%' }} />
          </div>
        </Grid>
      </Grid>
    </MainDiv>
  )
}

export default AboutUs
