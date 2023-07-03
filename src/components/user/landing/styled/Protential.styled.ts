import tagStyled from 'styled-components'

export const MainDiv = tagStyled.div`
    display: flex;
`
export const LeftDiv = tagStyled.div`
    width: 50%;
`
export const RightDiv = tagStyled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImgDiv = tagStyled.img`
`
export const Title = tagStyled.span`
    font-size: 50px;
    font-weight: 800;
    @media screen and (max-width : 450px) {
        font-size: 32px;
        font-weight: 600;
    }
`
export const Description = tagStyled.p`
    font-size: 20px;
    @media screen and (max-width : 450px) {
        text-align: justify;
    }
`
export const Footer = tagStyled.div`
    background-image: linear-gradient(to right,#0d330c ,#cfd7d0);
    padding: 1rem 9rem 1rem 2rem;
    border-radius: 50px;
    font-size: 19px;
    color: white;
    @media screen and (max-width : 450px) {
        margin-bottom: 2rem;
    }
`
