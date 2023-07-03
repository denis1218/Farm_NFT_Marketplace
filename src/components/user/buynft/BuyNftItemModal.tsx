import * as React from 'react'

import {
  Box, Modal, TextField, Typography
} from '@mui/material'
import {
  style, TitleDiv, Text, FooterDiv, ButtonDiv, BodyDiv, TopDiv
} from './styled/BuyNftModal.styled'
import { type BuyNftItemModalProps } from 'src/types/types'
import { buyNFTFromServer, connectWallet } from 'src/utils'
import { useGlobalState } from 'src/state/state'
import { useSnackbar } from 'notistack'

const BuyNftItemModal = ({
  open,
  handleClose,
  nftId
}: BuyNftItemModalProps) => {
  const [amount, setAmount] = React.useState(0)
  // const [buyMethod, SetBuyMethod] = React.useState(-1)
  // const hectars = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]
  const [nfts] = useGlobalState('nfts')
  const nft: any = nfts[nftId - 1]
  const { enqueueSnackbar } = useSnackbar()
  const [connectedAccount]: any = useGlobalState('connectedAccount')

  const handleChange = (e: any) => {
    if (e.target.value !== '') {
      setAmount(parseInt(e.target.value))
    }
  }

  const handleBuy = () => {
    const method = Array(amount).fill(nft.cost * 2)
    buyNFTFromServer(method, amount * nft.cost * 2, enqueueSnackbar)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TopDiv>
          <Typography onClick={handleClose}>&times;</Typography>
        </TopDiv>
        <TitleDiv><Text>Buy {nft.cost * 2} Acres NFT</Text></TitleDiv>
        <BodyDiv>
          <TextField
            variant="standard"
            onChange={handleChange}
            value={amount}
            type='number'
          />
        </BodyDiv>
        <FooterDiv>
        {
          connectedAccount
            ? <ButtonDiv onClick={handleBuy}>Buy</ButtonDiv>
            : <ButtonDiv onClick={connectWallet}>Connect Wallet</ButtonDiv>
        }
        </FooterDiv>
      </Box>
    </Modal>
  )
}

export default BuyNftItemModal
