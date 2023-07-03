import tagStyled from 'styled-components'
import { Link } from 'react-router-dom'
import { styled } from '@mui/styles'

export const Logo = tagStyled.img`
    width : 50px;
    height : 50px;
    cursor: pointer;
    margin-right: 20px;
    @media screen and (max-width : 450px) {
        width: 25px;
        height: 25px;
    }
`
export const HeaderDiv = tagStyled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;

    @media screen and (max-width : 450px) {
        justify-content : space-between;
        height: 40px;
    }

    height : 90px;
    width : 100%;
    
    background : rgba(0, 0, 0, 0.7);

    position : fixed;
    left : 0px;
    top : 0px;
    z-index : 10;
`
export const Text = tagStyled.p`
    font-size: 25px;
    color: white;
`
export const LogoDiv = tagStyled.div`
    display: flex;
    align-items: center;
    margin-left: 3rem;
`
export const NavDiv = tagStyled.div`
    margin-right: 3rem;
    display: flex;
    svg {
      margin-left: 1rem;
      color: white;
    }
`
export const LinkDiv = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  marginLeft: '2rem',
  padding: 5
})
export const OtherLinkDiv = tagStyled.div`
  text-decoration: none;
  color: white;
  margin-left: 2rem;
  padding: 5px;
  cursor: pointer;
`
export const ButtonDiv = tagStyled.div`
  width: 100%;
  height: 30px;
  @media screen and (max-width : 450px) {
    height: 20px;
    font-size: 15px;
  }
  background-color: #181818;
  opacity: 0.7;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  position: absolute;
  bottom: -30px;
  display: none;
`
export const WalletDiv = tagStyled.div`
  width: 150px;
  height: 30px;
  @media screen and (max-width : 450px) {
    width: 120px;
    height: 20px;
    font-size: 12px;
    margin-top: 0.2rem;
    background-color: #333;
    color: #e8e8e8;
  }
  margin-left: 40px;
  background-color: #e8e8e8;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  :hover {
    div{
      display: block;
    }
  }
`
