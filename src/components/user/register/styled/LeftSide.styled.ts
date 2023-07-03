import tagStyled from 'styled-components'
import Left from 'src/assets/SILOS.png'
import Left1 from 'src/assets/SILOS 1.png'
import Left2 from 'src/assets/SILOS 2.png'

const BackImg = [Left, Left1, Left2]

export const MainDiv = tagStyled.div`
    background-image: url('${BackImg[Math.floor(Math.random() * 10 % 2)]}');
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
`

export const Logo = tagStyled.img`
    border-radius : 50%;
    width : 50px;
    height : 50px;
    cursor: pointer;
`
export const LogoDiv = tagStyled.div`
    display: flex;
    align-items: center;
    margin-left: 50px;
`
export const HeaderDiv = tagStyled.div`
    position: absolute;
    top: 20px;
`
export const Text = tagStyled.p`
    margin-left: 20px;
    color: white;
    font-size: 25px;
`
export const ContentDiv = tagStyled.div`
    width: 100%;
    padding: 0px 5rem 0px 5rem;
`
export const TitleDiv = tagStyled.p`
    font-size: 48px;
    color: white;
    font-weight: bold;
    margin-bottom: -10px;
`
export const DescDiv = tagStyled.p`
    font-size: 14px;
    color: white;
`
