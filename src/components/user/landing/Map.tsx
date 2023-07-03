import * as React from 'react'
import { MainDiv } from './styled/Map.styled'
import './styled/styles.css'

const Map = () => {
  return (
    <MainDiv>
      <iframe src="https://www.google.com/maps/d/embed?mid=1CMBlp__hLc_4vt_Rp3fGncMJIuXgW8k&ehbc=2E312F" width="100%" height="580"></iframe>
    </MainDiv>
  )
}

export default Map
