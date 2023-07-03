import tagStyled from 'styled-components'

export const MainDiv = tagStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    @media screen and (max-width : 450px) {
        margin-top: 4rem;
        margin-bottom: 0rem;
    }
    margin-bottom: 5rem;
`
export const ContentDiv = tagStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    @media screen and (max-width : 450px) {
        width: 100%;
    }
`
export const ItemDiv = tagStyled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 4rem;
    @media screen and (max-width : 450px) {
        margin-bottom: 1rem;
    }
`
export const Title = tagStyled.span`
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 5rem;
    @media screen and (max-width : 450px) {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 2rem;
    }
`
