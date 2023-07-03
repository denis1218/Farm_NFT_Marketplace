import * as React from 'react'

import {
  Box, Modal, TextField, Typography, RadioGroup, FormControlLabel, Radio
} from '@mui/material'
import {
  style, TitleDiv, Text, FooterDiv, ButtonDiv, MethodDiv, TopDiv
} from './styled/BuyNftModal.styled'
import { findSumCombinations } from 'src/utils/helper/optimizedFunc'
import { type BuyNftModalProps } from 'src/types/types'
import { buyNFTFromServer } from 'src/utils'
import { useSnackbar } from 'notistack'

const BuyNftModal = ({
  open,
  handleClose
}: BuyNftModalProps) => {
  const [price, setPrice] = React.useState(0)
  const [buyMethod, SetBuyMethod] = React.useState(-1)
  const revertHectars = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
  const { enqueueSnackbar } = useSnackbar()

  const handleChange = (e: any) => {
    if (e.target.value !== '') {
      setPrice(parseInt(e.target.value))
    }
  }

  const handleOptionChange = (e: any) => {
    if (e.target.value !== '') {
      SetBuyMethod(e.target.value)
    }
  }

  const displayPairs: number[][] = React.useMemo(() => {
    return findSumCombinations(revertHectars, price)
  }, [price])

  const handleBuy = () => {
    if (buyMethod < 0) {
      alert('Please choose method!!!')
      return
    }
    buyNFTFromServer(displayPairs[buyMethod], price, enqueueSnackbar)
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
        <TitleDiv><Text>Buy NFT</Text></TitleDiv>
        <TextField
          variant='standard'
          onChange={handleChange}
          value={price}
          type='number'
        />
        <RadioGroup name='method'>
        {
          displayPairs.map((method, i) => (
            <FormControlLabel
              key={i}
              value={i}
              control={<Radio />}
              onChange={handleOptionChange}
              label = {
                <MethodDiv>
                  {
                    revertHectars.map((hectar, j) => (
                      <Typography key={j} style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                      {
                        method.filter(x => x === hectar).length !== 0 &&
                        <>
                          <img src={`http://app.judicialasset.com/api/images/${10 - j}.png`} width="70px" height="70px" />
                          &nbsp;x
                          {method.filter(x => x === hectar).length}
                          &nbsp;&nbsp;
                        </>
                      }
                      </Typography>
                    ))
                  }
                  <br/>
                </MethodDiv>
              }
            />
          ))
        }
        </RadioGroup>
        <FooterDiv>
          <ButtonDiv onClick={handleBuy}>Buy</ButtonDiv>
        </FooterDiv>
      </Box>
    </Modal>
  )
}

export default BuyNftModal
