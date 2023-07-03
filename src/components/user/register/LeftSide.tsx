import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MainDiv, HeaderDiv, LogoDiv, Logo, Text, ContentDiv, TitleDiv, DescDiv
} from './styled/LeftSide.styled'
import LogoImage from 'src/assets/logo.png'

const LeftSide = () => {
  const navigate = useNavigate()

  return (
    <MainDiv>
      <HeaderDiv>
        <LogoDiv>
          <Logo src={LogoImage} onClick={ () => { navigate('/') }} />
          <Text>JUDICIAL ASSET</Text>
        </LogoDiv>
      </HeaderDiv>
      <ContentDiv>
        <TitleDiv>Welcome to<br/> Farm Art NFT Collection</TitleDiv>
        <DescDiv>
          Therefore, the value of the Aurora Farm NFT is directly linked to the performance of the farm and agricultural production, which brings a certain stability and security to the investment.
          <br/><br/>Additionally, the investor who purchases Aurora Farm NFT is contributin to the real economy, supporting agricultural production, and consequently helping to feed the world&lsquo;s population.
        </DescDiv>
      </ContentDiv>
    </MainDiv>
  )
}

export default LeftSide
