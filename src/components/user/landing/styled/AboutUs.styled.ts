import tagStyled from 'styled-components'
import backImg from 'src/assets/Group 76.png'

export const MainDiv = tagStyled.div`
    background-image: url('${backImg}');
    width: 100%;
    @media screen and (max-width : 450px) {
        width: 100%;
        text-align: justify;
    }
    background-size: 100% 100%;

    margin-top: 50px;
    .MuiGrid-container {
        padding-bottom: 1.5rem;
        border-bottom: 2px solid #aaa;
    }
    .MuiGrid-grid-xs-12 {
        margin-bottom: 2rem;
    }
    .first {
        padding: 1rem 4rem 2rem 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .second {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .second1260 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .second700 {
        display: flex;
        flex-direction: column;
        align-content: center;
    }
    svg {
        margin-left: 10px;
        transform: scaleY(0.7);
    }
`

export const DescDiv = tagStyled.p`
    font-size: 19px;
`

export const ButtonDiv = tagStyled.div`
    width: 150px;
    height: 30px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`

export const ImgDiv = tagStyled.img`
    width: 100%;
    background-color: green;
    border-radius: 25px;
`
