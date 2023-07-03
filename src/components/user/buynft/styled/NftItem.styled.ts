import tagStyled from 'styled-components'

export const NftDiv = tagStyled.div`
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  box-shadow: 2px 2px 3px 0px #888;
`
export const PicDiv = tagStyled.div`
  position: relative;
  :hover {
    cursor: pointer;
    div {
      opacity: 0.7;
    }
  }
`

export const ImgDiv = tagStyled.img`
  width: 100%;
  cursor: pointer;
`
export const DetailDiv = tagStyled.div`
  position: absolute;
  width: 100%;
  height: 98%;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  opacity: 0;
  transition: opacity 1s;
`
export const DetailP = tagStyled.p`
  font-size: 32px;
  letter-spacing: 2px;
  color: white;
`
export const AmountDiv = tagStyled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: black;
  color: white;
  font-size: 16px;
  bottom: -9px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`
export const Text = tagStyled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0px;
`

export const SmallText = tagStyled.p`
  font-size: 12px;
  color: #000;
  margin: 0px;
`

export const SubTitleDiv = tagStyled.div`
  width: 100%;
  padding-left: 25px;
  margin-top: 20px;
`

export const EndDiv = tagStyled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
  align-items: center;
`

export const BuyBtn = tagStyled.button`
  background-color: #222;
  border: 0;
  color: white;
  padding: 4px 10px;
  :hover {
    cursor: pointer;
    background-color: black;
    color: #aaa;
  }
`
export const SmallDiv = tagStyled.div`
`
