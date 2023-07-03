import * as React from 'react'
import {
  NftDiv, ImgDiv, AmountDiv, SubTitleDiv, Text, EndDiv, SmallDiv, SmallText, PicDiv, DetailDiv, DetailP, BuyBtn
} from './styled/NftItem.styled'

import NftModal from './NftModal'
import BuyNftItemModal from './BuyNftItemModal'

const NftItem = (props: any) => {
  const {
    id, img, name, amount, cost, starts
  } = props.nft

  const {
    detail, forSale
  } = props

  const [open, setOpen] = React.useState(false)
  const [buyItemOpen, setBuyItemOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleBuyItemOpen = () => {
    setBuyItemOpen(true)
  }

  const handleBuyItemClose = () => {
    setBuyItemOpen(false)
  }

  return (
    <NftDiv>
      <PicDiv>
        <ImgDiv src={img} />
        <DetailDiv onClick={handleOpen}>
          <DetailP>DETAIL</DetailP>
        </DetailDiv>
        <AmountDiv>{amount}</AmountDiv>
      </PicDiv>
      <SubTitleDiv>
        <Text>{name}</Text>
      </SubTitleDiv>
      <EndDiv>
        <SmallDiv>
          <SmallText>price</SmallText>
          <Text>{cost} ETH</Text>
        </SmallDiv>
        <SmallDiv>
          { forSale && <BuyBtn onClick={handleBuyItemOpen}>Buy Now</BuyBtn> }
        </SmallDiv>
      </EndDiv>
      <NftModal open={open} handleClose={handleClose} img={img} nftname={name} starts={starts} price={cost} detail={detail} nftId={id} forSale={forSale} />
      <BuyNftItemModal open={buyItemOpen} handleClose={handleBuyItemClose} nftId={id} />
    </NftDiv>
  )
}

export default NftItem
