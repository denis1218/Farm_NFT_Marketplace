import tagStyled from 'styled-components'

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '640px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '13px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .MuiTextField-root': {
    width: '70%',
    marginBottom: 3,
    '& .MuiOutlinedInput-input': {
      textAlign: 'right'
    }
  },
  '& .MuiFormGroup-root': {
    width: '70%'
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

export const TitleDiv = tagStyled.div`
  width: 100%;
  border-color: #bbb;
  display: flex;
  justify-content: center;
`
export const Text = tagStyled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0px;
  padding-bottom: 40px;
`

export const FooterDiv = tagStyled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonDiv = tagStyled.div`
  width: 70%;
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

export const MethodDiv = tagStyled.div`
  display: flex;
  width: 100%;
`
export const BodyDiv = tagStyled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const EndDiv = tagStyled.div`
  width: 100%;
  height: 700px;
  padding: 0;
  margin: 0;
`
export const MapDiv = tagStyled.div`
  height: 360px;
  width: 300px;
  overflow: hidden;
  float: left;
  border: thin solid #333;
`
export const CaptureDiv = tagStyled.div`
  height: 360px;
  width: 480px;
  overflow: hidden;
  float: left;
  background-color: #ECECFB;
  border: thin solid #333;
  border-left: none;
`
