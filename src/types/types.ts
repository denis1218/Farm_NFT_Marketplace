export interface IMenuItem {
  link: string
  label: string
  icon: any
}

export interface LinkItem {
  connectRequire: boolean
  name: string
  link: string
}

export interface OtherLinkItem {
  name: string
}

export interface NftItemType {
  img: any
  nftname: string
  starts: string
  price: string
}

export interface NftModalProps {
  open: boolean
  handleClose: () => void
  img: any
  nftname: string
  starts: string
  price: string
  forSale: boolean
  detail: any
  nftId: any
}

export interface BuyNftModalProps {
  open: boolean
  handleClose: () => void
}

export interface BuyNftItemModalProps {
  open: boolean
  handleClose: () => void
  nftId: number
}

export interface NavType {
  name: string
  link: string
}
