import tagStyled from 'styled-components'

export const ShadowDiv = tagStyled.div`
    background-color: black;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    zIndex: 2;
    border-radius: 18px;
`
export const ImgDiv = tagStyled.img`
    width: 100%;
    height: 100%;
`
export const PicDiv = tagStyled.div`
    position: relative;
    z-index: 1;
`

export const MainDiv = tagStyled.div`
    margin-bottom: 10rem;
    @media screen and (max-width : 450px) {
        margin-bottom: 4rem;
    }
    .MuiTypography-root {
        margin-top: -2rem;
        font-size: 17px;
        margin-bottom: 3rem;
    }
    .MuiGrid-container {
        display: flex;
        justify-content: space-between;
        .MuiGrid-grid-xs-6, .MuiGrid-grid-xs-3, .MuiGrid-grid-xs-12 {
            .MuiGrid-grid-xs-12 {
                height: 100%;
                position: relative;
                z-index: 1;
            }
        }
    }
`
