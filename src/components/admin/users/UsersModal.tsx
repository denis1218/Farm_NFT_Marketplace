import * as React from 'react'
import {
  style
} from './styled/UsersModal.styled'

import {
  Modal, Box, Typography, Grid, useMediaQuery, CircularProgress
} from '@mui/material'

import { loadUserNfts } from 'src/utils'
import NftItem from 'src/components/user/buynft/NftItem'
import detail from 'src/assets/details.json'

interface UsersModalType {
  open: boolean
  handleClose: () => void
  userInfo: any
}

const UsersModal = ({ open, handleClose, userInfo }: UsersModalType) => {
  const [nfts, SetNfts] = React.useState([])
  const [loadingNfts, SetLoadingNfts] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      if (userInfo.wallet) {
        SetLoadingNfts(true)
        const userNfts = await loadUserNfts(userInfo.wallet)
        SetNfts(userNfts)
        SetLoadingNfts(false)
      }
    })()
  }, [userInfo])

  const match1600 = useMediaQuery('(min-width: 1600px)')
  const match1300 = useMediaQuery('(min-width: 1300px)')
  const match1000 = useMediaQuery('(min-width: 1000px)')
  const match665 = useMediaQuery('(min-width: 665px)')

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h4" component="h2">
          User Details
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography id="modal-modal-description"> Name: { userInfo.first_name && userInfo.last_name ? userInfo.first_name + ' ' + userInfo.last_name : '*'} </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description"> Email: { userInfo.email ? userInfo.email : '*'} </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography id="modal-modal-description"> Wallet: { userInfo.wallet ? userInfo.wallet : '*'} </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description"> IP Address: { userInfo.ip_address ? userInfo.ip_address : '*'} </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-description"> Country: { userInfo.country ? userInfo.country : '*'} </Typography>
        </Grid>
      </Grid>
      { !loadingNfts
        ? <Grid container spacing={7}>
          {
            nfts.map((nft, index) => (
              <Grid item key={index} xs={match1600 ? 2.4 : (match1300 ? 3 : (match1000 ? 4 : (match665 ? 6 : 12)))}>
                <NftItem nft={nft} detail={detail[index]} />
              </Grid>
            ))
          }
        </Grid>
        : <CircularProgress />}
    </Box>
    </Modal>
  )
}

export default UsersModal
