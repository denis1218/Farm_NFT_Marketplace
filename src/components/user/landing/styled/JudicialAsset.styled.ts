import tagStyled from 'styled-components'
import backImg from 'src/assets/Rectangle 320.png'

export const MainDiv = tagStyled.div`
    margin: 5rem 0px;
    @media screen and (max-width : 450px) {
        margin-bottom: 0rem;
    }
    background-image: url('${backImg}');
    @media screen and (max-width : 800px) {
        background-image: none;
    }
    width: 100%;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .MuiGrid-container {
        display: flex;
        justify-content: space-between;
        padding: 0px 2rem;
        @media screen and (max-width : 450px) {
            padding: 0px;
            margin-bottom: 7rem;
        }
        margin-bottom: 2rem;
        .MuiGrid-grid-xs-4, .MuiGrid-grid-xs-12 {
            margin-top: 1rem;
            .MuiGrid-grid-xs-12 {
                position: relative;
                border-radius: 15px;
                background-color: #042200;
                height: 100%;
                .MuiTypography-root {
                    color: white;
                    padding: 2rem 1rem;
                }
                svg {
                    position: absolute;
                    top: -1.3rem;
                    left: 1.5rem;
                    background-color: white;
                    width: 2.5rem;
                    height: 2.5rem;
                    padding: 0.5rem;
                    border-radius: 50%;
                }
            }
        }
    }
`
export const SubDiv = tagStyled.div`
    padding-top: 4.5rem;
    padding-left: 3rem;

    .MuiTypography-root {
        font-size: 42px;
        font-weight: 600;
    }
`
export const DescP = tagStyled.p`
    width: 30.5rem;
    font-size: 17px;
`
