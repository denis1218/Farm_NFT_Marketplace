import * as React from 'react'
// import { GoogleMap, KmlLayer } from '@react-google-maps/api'
// import GoogleMapReact from 'google-map-react'
import { type NftModalProps } from 'src/types/types'
import {
  Modal, Box, Grid, Typography, useMediaQuery
} from '@mui/material'
import {
  style, ImgDiv, Title, DataDiv, Price, ButtonDiv, FirstDiv, DescP, MiddleDiv, FooterDiv, ContentDiv, ContentHeader, TopDiv
} from './styled/NftModal.styled'
import BuyNftItemModal from './BuyNftItemModal'

const NftModal = ({
  open,
  handleClose,
  img,
  nftname,
  price,
  detail,
  forSale,
  nftId
}: NftModalProps) => {
//   interface MapProps {
//     kmzUrl: string
//   }
//   const Map: React.FC<MapProps> = ({ kmzUrl }) => {
//     const mapContainerStyle = {
//       height: '500px',
//       width: '100%'
//     }
//     const center = {
//       lat: -21.50013671,
//       lng: -56.61308812
//     }
//     return (
//       <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
//         <KmlLayer url={kmzUrl} options={{ preserveViewport: true }} />
//       </GoogleMap>
//     )
//   }\

  const match800 = useMediaQuery('(min-width: 800px)')

  const detailHeaders = [
    'Bioceanic Route: ',
    'Natural Diversity of Bonito: ',
    'Trading with Bags of Soybeans: ',
    'Productive and Touristic Potential: '
  ]

  const details = [
    'The farm is strategically located on the edge of the Bioceanic Route, an infrastructure project that will connect Brazil to the Pacific Ocean, passing through Paraguay, Argentina, and Chile. This connection promises to boost economic development and significantly appreciate nearby properties, such as the farm in question. By acquiring it, you will invest in an asset with great potential for future appreciation',
    'The farm is nestled within the lush natural landscape of Bonito, known worldwide for its crystal-clear waters, rivers, waterfalls, and caves. As the owner of this farm, you will enjoy a peaceful and preserved environment, where you can observe the rich local biodiversity and even encounter some of its "distinguished guests", such as macaws, jaguars, and capybaras.',
    'If we obtain a favorable decision on repossession in the future, our team will put your farm up for sale, with the possibility of doing so using bags of soybeans as a means of exchange. This offers various benefits, such as protection against inflation and currency depreciation, in addition to allowing you to benefit from the growing demand for this commodity in the global market',
    "The farm has ideal areas for cultivating soybeans, corn, and other crops, as well as for raising Nelore cattle, ensuring a constant financial return. Furthermore, the proximity to Bonito and its tourist attractions offers the possibility of exploring the property's touristic potential, creating eco-friendly accommodations or activities focused on ecotourism"
  ]

  const [buyItemOpen, setBuyItemOpen] = React.useState(false)

  const handleBuyItemOpen = () => {
    setBuyItemOpen(true)
  }

  const handleBuyItemClose = () => {
    setBuyItemOpen(false)
  }

  return (
    <div>
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
          <Grid container spacing={5}>
            <Grid item xs={match800 ? 4 : 12}>
              <ImgDiv src={img} />
              <Title>{nftname}</Title>
              <DataDiv><Typography>Price</Typography><Price>{price} ETH</Price></DataDiv>
              { forSale && <ButtonDiv onClick={handleBuyItemOpen}>Buy</ButtonDiv> }
            </Grid>
            <Grid item xs={match800 ? 8 : 12}>
              <FirstDiv>
                <Typography>{detail.title}</Typography>
                <DescP>{detail.description}</DescP>
              </FirstDiv>
              <MiddleDiv>
                <Typography>Aurora Farm NFT</Typography>
                <DescP>Imagine being the owner of a unique and exceptional farm, located in one of the mostbeautiful and promising regions of Brazil, where nature and economic development coexistharmoniously. This is the opportunity we must present to you: a judicial asset that allows youto claim rights over a one-of-a-kind farm, located 65 km from Bonito, Mato Grosso do Sul, with the Bioceanic Route passing in front of the property and the future possibility of profiting from a transaction based on bags of soybeans. Here are some of the main reasons why you shouldn&apos;t miss this chance:</DescP>
              </MiddleDiv>
              <FooterDiv>
              {
                details.map((detail, index) => (
                  <ContentDiv key={index}>
                    <ContentHeader>{detailHeaders[index]}</ContentHeader>
                    <DescP>{detail}</DescP>
                  </ContentDiv>
                ))
              }
              </FooterDiv>
            </Grid>
          </Grid>
          <BuyNftItemModal open={buyItemOpen} handleClose={handleBuyItemClose} nftId={nftId} />
        </Box>
      </Modal>
    </div>
  )
}

export default NftModal
