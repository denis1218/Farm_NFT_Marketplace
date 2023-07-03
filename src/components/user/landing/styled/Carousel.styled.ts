import tagStyled from 'styled-components'

export const ImgDiv = tagStyled.img`
    width: 100%;
    border-radius: 10px;
`

export const CarouselDiv = tagStyled.div`
    position: relative;
    .MuiTypography-root {
        font-size: 5rem;
        color: white;
        position: absolute;
        z-index: 300;
        bottom: 7rem;
        left: 5rem;
        padding-bottom: 1rem;
        font-weight: 800;
        background: -webkit-linear-gradient(45deg,#feee83 38%,#a0732a 57%,#fded88 65%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .description {
        position: absolute;
        color: white;
        bottom: 4rem;
        left: 5rem;
        z-index: 300;
    }
`

export const ShadowDiv = tagStyled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 15px;
    background: -webkit-linear-gradient(90deg,#000000 30%,#ebb357 70%);
    opacity: 0.3;
`
