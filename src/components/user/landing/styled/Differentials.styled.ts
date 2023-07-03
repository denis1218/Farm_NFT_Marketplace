import tagStyled from 'styled-components'

export const MainDiv = tagStyled.div`
    margin-bottom: 10rem;
    @media screen and (max-width : 450px) {
        margin-bottom: 4rem;
    }
    .MuiTypography-root {
        font-size: 18px;
        padding-top: 2rem;
        padding-bottom: 1.5rem;
        margin-bottom: 3rem;
        border-bottom: 2px solid #aaa;
    }
`
export const HeaderP = tagStyled.span`
    font-size: 48px;
    font-weight: 800;
    width: 100%;
    @media screen and (max-width : 450px) {
        font-size: 32px;
        font-weight: 600;
    }
`
export const RightDiv = tagStyled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid #aaa;
    padding-bottom: 2rem;
`
export const DescDiv = tagStyled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    svg {
        color: #8adaaa;
        margin-right: 1rem;
    }
    .MuiTypography-root {
        padding-bottom: 1.5rem;
        padding-top: 0px;
        margin-bottom: 0px;
        color: black;
        border: none;
    }
`
