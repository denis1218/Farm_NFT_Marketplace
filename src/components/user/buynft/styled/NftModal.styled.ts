import tagStyled from 'styled-components'

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  overflow: 'scroll',
  padding: '13px 20px',
  '& .MuiGrid-container': {
    marginTop: '0.5rem',
    '& .MuiGrid-grid-xs-4': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& .MuiGrid-grid-xs-8': {
      display: 'flex',
      flexDirection: 'column',
      '& .MuiTypography-root': {
        fontSize: 25,
        fontWeight: 600
      }
    },
    '& .MuiGrid-grid-xs-12': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '& .MuiTypography-root': {
        fontSize: 25,
        fontWeight: 600
      }
    }
  }
}
export const TopDiv = tagStyled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0px !important;
  padding: 0px !important;
  .MuiTypography-root {
    font-size: 28px !important;
    :hover {
      cursor: pointer;
    }
  }
`
export const FirstDiv = tagStyled.div`
`
export const MiddleDiv = tagStyled.div`
  border-bottom: 2px solid #999;
  padding: 1rem 0px;
  margin-bottom: 1rem;
`
export const FooterDiv = tagStyled.div`
`
export const ContentHeader = tagStyled.span`
  font-size: 16px;
  font-weight: 600;
`
export const ContentDiv = tagStyled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: #F7F7F7;
`

export const DescP = tagStyled.span`
  font-size: 15px;
  font-weight: 400;
  color: #585858;
`

export const ImgDiv = tagStyled.img`
    width: 80%;
    border-radius: 20px !important;
`
export const Title = tagStyled.p`
    font-size: 24px;
`
export const Starts = tagStyled.p`
    font-size: 16px;
    margin: 0px;
`
export const Price = tagStyled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
`
export const DataDiv = tagStyled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
`
export const EndDiv = tagStyled.div`
  width: 100%;
  padding: 5%;
  margin: 0;
`
export const ButtonDiv = tagStyled.div`
  margin-top: 10%;
  width: 80%;
  height: 50px;
  display: flex;
  background-color: #222;
  color: white;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-color: #aaa;
  transition: 1s;
  :hover {
    cursor: pointer;
    background-color: black;
    color: #aaa;
  }
`
