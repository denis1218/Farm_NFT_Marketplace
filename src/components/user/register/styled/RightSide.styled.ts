import tagStyled from 'styled-components'

export const IconDiv = tagStyled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    svg {
        font-size: 36px;
        color: black;
        border: 1px solid black;
        border-radius: 50%;
    }
`

export const MainDiv = tagStyled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .MuiTextField-root { 
        m: 1;
        width: 100%;
    }
`

export const RegisterDiv = tagStyled.div`
    border: 1px solid black;
    width: 80%;
    height: 80%;
    position: relative;
    .MuiGrid-container {
        margin-top: 150px;
        padding-left: 20px;
        padding-right: 20px;
    }
`
export const Title = tagStyled.div`
    font-size: 36px;
    position: absolute;
    top: 50px;
    left: 20px;
    width: 15rem;
    border-bottom: 3px solid black;
`
export const FooterDiv = tagStyled.div`
    position: absolute;
    bottom: 80px;
    width: 100%;
    height: 40px;
    padding: 0px 20px;
`
export const BtnDiv = tagStyled.div`
    width: 100%;
    border: 1px solid black;
    height: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
