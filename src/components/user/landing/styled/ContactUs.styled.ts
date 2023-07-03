import tagStyled from 'styled-components'

export const MainDiv = tagStyled.div`
    background-color: #001e00;
    margin: 5%;
    height: 600px;
    display: flex;
    align-items: center;
    padding: 0rem 10%;
    border-radius: 15px;
    .MuiGrid-container {
        border-bottom: 2px solid #aaa;
        padding-bottom: 10%;
    }
`
export const SubTitle = tagStyled.p`
    font-weight: 600;
    color: white;
`
export const ContactList = tagStyled.p`
    color: white;
`
