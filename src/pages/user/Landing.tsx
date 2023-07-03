import * as React from 'react'

import Carousel from 'src/components/user/landing/Carousel'
import AboutUs from 'src/components/user/landing/AboutUs'
import ContactUs from 'src/components/user/landing/ContactUs'
import BuyNft from './BuyNft'
import JudicialAsset from 'src/components/user/landing/JudicialAsset'
import TreeDescription from 'src/components/user/landing/TreeDescription'
import Legal from 'src/components/user/landing/Legal'
import Differentials from 'src/components/user/landing/Differentials'
import Protential from 'src/components/user/landing/Protential'
import Increase from 'src/components/user/landing/Increase'
import Juridical from 'src/components/user/landing/Juridical'
import Projections from 'src/components/user/landing/Projections'
import Map from 'src/components/user/landing/Map'
import { useMediaQuery } from '@mui/material'

const Landing = () => {
  const match1440 = useMediaQuery('(min-width: 1450px)')
  const match450 = useMediaQuery('(min-width: 450px)')

  return (
    <>
      <Carousel />
      <AboutUs />
      <div style={match1440 ? { display: 'flex', justifyContent: 'center', padding: '0px 15%' } : match450 ? { display: 'flex', justifyContent: 'center', padding: '0px 10%' } : { display: 'flex', justifyContent: 'center', padding: '0px 3%' }}>
        <div style={{ width: '100%' }}>
          <JudicialAsset />
          <TreeDescription />
          <Legal />
          <Differentials />
          <Protential />
          <Increase />
          <Juridical />
          <Projections />
          <Map />
        </div>
      </div>
      <BuyNft />

      <ContactUs />
    </>
  )
}

export default Landing
