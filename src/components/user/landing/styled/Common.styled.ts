import tagStyled from 'styled-components'

export const TitleDiv = tagStyled.span`
    font-size: 54px;
    font-weight: 800;
    display: flex;
    margin-bottom: 3rem;
    @media screen and (max-width : 450px) {
        margin-bottom: 1rem;
        font-size: 32px;
        font-weight: 600;
        justify-content: center;
    }
`
