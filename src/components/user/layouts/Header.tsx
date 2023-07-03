import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/styles'
import LogoImage from 'src/assets/logo.png'
import {
  Logo, HeaderDiv, Text, LogoDiv, NavDiv, LinkDiv, OtherLinkDiv, ButtonDiv, WalletDiv
} from './styled/Header.styled'

import { type LinkItem, type OtherLinkItem } from 'src/types/types'
import { truncate } from 'src/utils'
import { useGlobalState } from 'src/state/state'
import MenuIcon from '@mui/icons-material/Menu'
import Popover from './Popover'
import ConnectWallet from '../buynft/ConnectWallet'

const Header = () => {
  const theme = useTheme()
  const [connectedAccount]: any = useGlobalState('connectedAccount')
  const navigate = useNavigate()
  const location = useLocation()
  const match1000 = useMediaQuery('(min-width: 1000px)')
  const [open, setOpen] = React.useState(false)
  const [wOpen, setWOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }

  const handleOpen = (e: any) => {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }

  const navs: LinkItem[] = [
    {
      connectRequire: false,
      name: 'Introduction',
      link: '/user'
    },
    {
      connectRequire: true,
      name: 'My Collection',
      link: '/user/mycollection'
    }
  ]

  const other_navs: OtherLinkItem[] = [
    // { name: 'About Us' },
    { name: 'Legal' },
    { name: 'Differentials' },
    { name: 'Targets and potential' },
    { name: 'Value increase' },
    { name: 'Juridical' }
    // { name: 'Contact Us' }
  ]

  const handleWOpen = () => {
    if (!connectedAccount) {
      setWOpen(true)
    }
  }
  const handleWClose = () => { setWOpen(false) }

  const gotoHandler = (name: string) => {
    let ref = null
    navigate('/')
    if (name === 'About Us') {
      ref = document.getElementById('aboutus')
    } else if (name === 'Contact Us') {
      ref = document.getElementById('contactus')
    } else if (name === 'Legal') {
      ref = document.getElementById('legal')
    } else if (name === 'Differentials') {
      ref = document.getElementById('differentials')
    } else if (name === 'Targets and potential') {
      ref = document.getElementById('protential')
    } else if (name === 'Value increase') {
      ref = document.getElementById('increase')
    } else if (name === 'Juridical') {
      ref = document.getElementById('juridical')
    }
    const offsetTop = ref !== null ? ref.offsetTop : 0
    window.scrollTo({
      top: offsetTop - 100,
      behavior: 'smooth'
    })
    // navigate('/')
  }

  return (
    <>
    {
      location.pathname.search('/register') === -1 &&
      <HeaderDiv theme={theme}>
        <LogoDiv>
          <Logo src={LogoImage} onClick={ () => { navigate('/') }} />
          { match1000 && <Text>JUDICIAL ASSET</Text> }
        </LogoDiv>
        <NavDiv>
          {
            match1000 &&
            navs.map((nav, index) => (
              <LinkDiv to={nav.link} key={index} hidden={(nav.connectRequire && !connectedAccount)}>{nav.name}</LinkDiv>
            ))
          }
          {
            match1000 &&
            other_navs.map((nav, index) => (
              <OtherLinkDiv key={index} onClick={ () => { gotoHandler(nav.name) } }>{nav.name}</OtherLinkDiv>
            ))
          }
          <WalletDiv onClick={ handleWOpen }> { truncate(connectedAccount, 6, 6, 16) || 'Connect Wallet' }
            { connectedAccount && <ButtonDiv onClick={ () => { navigate('/user/register') } }>Profile</ButtonDiv> }
          </WalletDiv>
          {
            !match1000 &&
            <MenuIcon onClick={handleOpen} />
          }
        </NavDiv>
        <Popover open={open} anchorEl={anchorEl} handleClose={handleClose} navs={navs} other_navs={other_navs} gotoHandler={gotoHandler} connectedAccount={connectedAccount} />
        <ConnectWallet open={wOpen} handleClose={handleWClose} />
      </HeaderDiv>
    }
    </>
  )
}

export default Header
