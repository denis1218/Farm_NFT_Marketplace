import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/styles'
import LogoImage from 'src/assets/logo.png'
import {
  Logo, HeaderDiv, Text, LogoDiv, NavDiv, OtherLinkDiv
} from './styled/Header.styled'

import { type NavType } from 'src/types/types'
import MenuIcon from '@mui/icons-material/Menu'
import Popover from './Popover'

const Header = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const match700 = useMediaQuery('(min-width: 700px)')
  const [open, setOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }

  const handleOpen = (e: any) => {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }

  const navs: NavType[] = [
    {
      name: 'DASHBOARD',
      link: '/admin/dashboard'
    },
    {
      name: 'USERS',
      link: '/admin/users'
    },
    {
      name: 'NEWS',
      link: '/admin/news'
    }
  ]

  return (
    <>
    {
      location.pathname.search('/register') === -1 &&
      <HeaderDiv theme={theme}>
        <LogoDiv>
          <Logo src={LogoImage} onClick={ () => { navigate('/admin') }} />
          <Text>Admin</Text>
        </LogoDiv>
        <NavDiv>
          {
            match700 &&
            navs.map((nav, index) => (
              <OtherLinkDiv key={index} onClick={ () => { navigate(nav.link) } }>{nav.name}</OtherLinkDiv>
            ))
          }
          {
            !match700 &&
            <MenuIcon onClick={handleOpen} />
          }
        </NavDiv>
        <Popover open={open} anchorEl={anchorEl} handleClose={handleClose} navs={navs} navigate={navigate} />
      </HeaderDiv>
    }
    </>
  )
}

export default Header
