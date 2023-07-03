import tagStyled from 'styled-components'

export const MainDiv = tagStyled.div`
    margin-top: 10rem;
    @media screen and (max-width : 450px) {
        margin-top: 3rem;
    }
`
export const Title = tagStyled.p`
    font-size: 42px;
    font-weight: 800;
    @media screen and (max-width : 450px) {
        font-size: 32px;
        font-weight: 600;
    }
`
