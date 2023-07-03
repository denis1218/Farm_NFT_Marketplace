import * as React from 'react'
import {
  Popover, List, ListItem
} from '@mui/material'

import { Link } from 'react-router-dom'
import { styled } from '@mui/styles'
import tagStyled from 'styled-components'

const MyPopover = ({
  open,
  anchorEl,
  handleClose,
  navs,
  navigate
}: any) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      style={{ zIndex: 100 }}
    >
      <List>
      {
        navs.map((nav: any, index: number) => (
          <ListItem key={index} onClick={ () => { navigate(nav.link) } }>
            <OtherLinkDiv key={index}>{nav.name}</OtherLinkDiv>
          </ListItem>
        ))
      }
      </List>
    </Popover>
  )
}

export const LinkDiv = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  marginLeft: '1rem',
  padding: 3
})

export const OtherLinkDiv = tagStyled.div`
  text-decoration: none;
  color: black;
  margin-left: 1rem;  
  cursor: pointer;
  padding: 3px;
`

export default MyPopover
