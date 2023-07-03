import * as React from 'react'

import { ContactList, MainDiv, SubTitle } from './styled/ContactUs.styled'
import { Grid, useMediaQuery } from '@mui/material'

const ContactUs = () => {
  const aboutus = ['Company', 'Careers', 'News']
  const support = ['Contact Us', 'Knowledge Base', 'Product Help Center']
  const partner = ['Agencies', 'Associations', 'Francises', 'Affilates', 'Offers']
  const onairn = ['SharpSpring', 'Retention Science']

  const match1040 = useMediaQuery('(min-width: 1040px)')
  const match450 = useMediaQuery('(min-width: 450px)')

  return (
    <MainDiv id="contactus">
      <Grid container>
        <Grid item xs={match1040 ? 3 : 6}>
          <SubTitle>About Us</SubTitle>
          {
            aboutus.map((d, i) => (
              <ContactList key={i}>{d}</ContactList>
            ))
          }
        </Grid>
        <Grid item xs={match1040 ? 3 : 6}>
        <SubTitle>Support</SubTitle>
          {
            support.map((d, i) => (
              <ContactList key={i}>{d}</ContactList>
            ))
          }
        </Grid>
        <Grid item xs={match1040 ? 3 : 6}>
        <SubTitle>Become{ !match450 && <br/> } a Partner</SubTitle>
          {
            partner.map((d, i) => (
              <ContactList key={i}>{d}</ContactList>
            ))
          }
        </Grid>
        <Grid item xs={match1040 ? 3 : 6}>
        <SubTitle>Constant Contact Onairn</SubTitle>
          {
            onairn.map((d, i) => (
              <ContactList key={i}>{d}</ContactList>
            ))
          }
        </Grid>
      </Grid>
    </MainDiv>
  )
}

export default ContactUs
