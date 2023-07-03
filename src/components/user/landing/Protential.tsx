import * as React from 'react'
import { ImgDiv, LeftDiv, MainDiv, RightDiv, Title, Description, Footer } from './styled/Protential.styled'
import img from 'src/assets/Vector 1.png'
import { useMediaQuery } from '@mui/material'

const Protential = () => {
  const match1150 = useMediaQuery('(min-width: 1150px)')
  const match600 = useMediaQuery('(min-width: 600px)')

  return (
    <MainDiv style={match1150 ? {} : { display: 'flex', flexDirection: 'column' }} id='protential'>
      <LeftDiv style={match1150 ? {} : { width: '100%' }}>
        <Title>Targets and Profit Protential</Title>
        <Description>
          The property in question has been improving its value uninterruptedly and with new governmental works it will increase even more in value in the next few years.
          <br/><br/>
          In the event of a favorable decision in the repossession suit, the farm will be put up for sale and the full value will be distributed to investors on a pro-rata basis.
        </Description>
        <Footer style={match600 ? {} : { padding: '1.5rem', fontSize: 16 }}>
          If the process is successful, investors in Aurora Farm NFT may have the opportunity to recover their investment and still make significant profits.
        </Footer>
      </LeftDiv>
      <RightDiv style={match1150 ? {} : { width: '100%' }}>
        <ImgDiv src={img} width='80%'/>
      </RightDiv>
    </MainDiv>
  )
}

export default Protential
