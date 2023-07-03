import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from 'src/state/state'
import { MainDiv, RegisterDiv, Title, FooterDiv, BtnDiv, IconDiv } from './styled/RightSide.styled'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  TextField, Grid
} from '@mui/material'
import axios from 'axios'
import { API_ENDPOINT } from 'src/static'
import { useSnackbar } from 'notistack'

interface userInfoType {
  first_name: string
  last_name: string
  email: string
  wallet: string
}

const RightSide = () => {
  const navigate = useNavigate()
  const [connectedAccount]: any = useGlobalState('connectedAccount')
  const [userInfo, setUserInfo] = React.useState<userInfoType>({ first_name: '', last_name: '', email: '', wallet: connectedAccount })
  const { enqueueSnackbar } = useSnackbar()

  const handleChange = (e: any) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async () => {
    console.log(userInfo)
    if (userInfo.wallet !== '') {
      const res = await axios.post(`${API_ENDPOINT}user/profile/${userInfo.wallet}`, userInfo)
      if (res.data.status === 'success') {
        enqueueSnackbar('SignUp Successfully!', { variant: 'success' })
        window.location.href = '/'
      } else {
        enqueueSnackbar(res.data.message, { variant: 'error' })
      }
    }
  }

  return (
    <MainDiv>
      <IconDiv onClick={() => { navigate('/') }}>
        <ArrowBackIcon />
      </IconDiv>
      <RegisterDiv>
        <Title>Profile</Title>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name='first_name'
              value={userInfo.first_name || ''}
              onChange={handleChange}
              label="First Name"
              type="text"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='last_name'
              value={userInfo.last_name || ''}
              onChange={handleChange}
              label="Last Name"
              type="text"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name='email'
              value={userInfo.email || ''}
              onChange={handleChange}
              label="Email"
              type="text"
              variant='standard'
            />
          </Grid>
        </Grid>
        <FooterDiv>
          <BtnDiv onClick={handleRegister}>Add Profile</BtnDiv>
        </FooterDiv>
      </RegisterDiv>
    </MainDiv>
  )
}

export default RightSide
