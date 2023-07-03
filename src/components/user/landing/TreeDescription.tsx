import * as React from 'react'

import {
  MainDiv, BackDiv, RightDiv, DescDiv
} from './styled/TreeDescription.styled'
import CheckIcon from '@mui/icons-material/Check'
import { Typography, useMediaQuery } from '@mui/material'

const TreeDescription = () => {
  const descriptions = [
    'We strive to establish lasting relationships with our clients built on trust, transparency, and excellent client service. Our goal is to help our clients achieve their financial goals by offering innovative and cost-effective solutions. At our firm, we value transparency and honesty at every step of the process.',
    'We strive to establish lasting relationships with our clients built on trust, transparency, and excellent client service. Our goal is to help our clients achieve their financial goals by offering innovative and cost-effective solutions.',
    'If you are looking for a company that offers innovative and effective crowdfunding solutions, look no further. We are the ideal choice to help you maximize your investments and get the best possible results. Contact us today and find out how we can help you achieve your financial goals.'
  ]

  const match1050 = useMediaQuery('(min-width: 1050px)')

  return (
    <MainDiv style={match1050 ? {} : { display: 'flex', flexDirection: 'column' }}>
      <BackDiv style={match1050 ? {} : { width: '100%' }}></BackDiv>
      <RightDiv style={match1050 ? {} : { width: '100%' }}>
        {
          descriptions.map((d, i) => (
            <DescDiv key={i}><CheckIcon /><Typography>{d}</Typography></DescDiv>
          ))
        }
      </RightDiv>
    </MainDiv>
  )
}

export default TreeDescription
