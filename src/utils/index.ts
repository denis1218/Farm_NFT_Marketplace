import { ethers } from 'ethers'

import abi from '../abis/contracts/Contract.sol/Contract.json'
import address from '../abis/contractAddress.json'
import { getGlobalState, setGlobalState } from '../state/state'
import { displayErrorMessage } from './errors'
import { setIPAddress } from './helper/setIPAddress'
// import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
// import WalletConnect from '@walletconnect/web3-provider'
// import Web3Modal from 'web3modal'

const { ethereum }: any = window
const contractAddress = address.address
const contractAbi = abi.abi
const opensea_uri = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`
const hectars = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000]

const getEtheriumContractWithoutSigner = () => {
  const provider = new ethers.providers.InfuraProvider('goerli')
  const contract = new ethers.Contract(contractAddress, contractAbi, provider)

  return contract
}

const getEtheriumContract = () => {
  const connectedAccount = getGlobalState('connectedAccount')

  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)

    return contract
  } else {
    return getGlobalState('contract')
  }
}

const isWallectConnected = async () => {
  try {
    if (!ethereum) { alert('Please install Metamask'); return }
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    console.log('account', accounts)

    if (window) {
      // ethereum.on('chainChanged', (chainId: any) => {
      //   window.location.reload()
      // })

      ethereum.on('accountsChanged', async () => {
        setGlobalState('connectedAccount', accounts[0])
        await setIPAddress(accounts[0])
        await isWallectConnected()
        await loadMyNfts()
      })

      ethereum.on('disconnect', async () => {
        setGlobalState('connectedAccount', '')
      })
    }

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0])
    } else {
      // alert('Please connect wallet.')
    }
  } catch (error) {
    reportError(error)
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum) { alert('Please install Metamask'); return }
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    await setIPAddress(accounts[0])
    setGlobalState('connectedAccount', accounts[0])
    await loadNfts()
    await loadMyNfts()
  } catch (error) {
    reportError(error)
  }
}
// const providerOptions = {
//   coinbasewallet: {
//     package: CoinbaseWalletSDK,
//     options: {
//       appName: 'Web 3 Modal Demo',
//       infuraId: '9aa3d95b3bc440fa88ea12eaa4456161'
//     }
//   },
//   walletconnect: {
//     package: WalletConnect,
//     options: {
//       infuraId: '9aa3d95b3bc440fa88ea12eaa4456161'
//     }
//   }
// }

// const web3Modal = new Web3Modal({
//   providerOptions // required
// })

// const connectWallet = async () => {
//   try {
//     const connectedAccount = getGlobalState('connectedAccount')
//     if (!connectedAccount) {
//       const provider = await web3Modal.connect()
//       const library: any = new ethers.providers.Web3Provider(provider)
//       const accounts = await library.listAccounts()
//       console.log(accounts)
//       if (accounts) setGlobalState('connectedAccount', accounts[0])
//       await loadNfts()
//       await loadMyNfts()
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }

const truncate = (text: string, startChars: number, endChars: number, maxLength: number) => {
  if (text?.length > maxLength) {
    let start = text.substring(0, startChars)
    const end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const loadNfts = async () => {
  try {
    if (!ethereum) {
      alert('Please install Metamask')
      return
    }

    const contract: any = getEtheriumContractWithoutSigner()
    const nfts = await contract.getAllNFTs()
    setGlobalState('nfts', structuredNfts(nfts))
  } catch (error) {
    reportError(error)
  }
}

const loadUserNfts = async (wallet: string) => {
  try {
    if (!ethereum) {
      alert('Please install Metamask')
      return
    }

    const contract: any = getEtheriumContractWithoutSigner()
    const nfts: any = await contract.getAllNFTs()
    const userNfts = []

    for (let i = 0; i < nfts.length; ++i) {
      const nft = nfts[i]
      const count = Number(await contract.balanceOf(wallet, nft.id))
      count && userNfts.push({
        id: nft.id,
        owner: nft.owner,
        amount: count,
        cost: nft.cost,
        timestamp: nft.timestamp
      })
    }
    return structuredNfts(userNfts)
  } catch (error) {
    reportError(error)
  }
}

const loadMyNfts = async () => {
  try {
    if (!ethereum) {
      alert('Please install Metamask')
      return
    }

    const contract: any = getEtheriumContract()
    const connectedAccount = getGlobalState('connectedAccount')
    const nfts: any = await contract.getAllNFTs()
    const myNfts = []

    for (let i = 0; i < nfts.length; ++i) {
      const nft = nfts[i]
      const count = Number(await contract.balanceOf(connectedAccount, nft.id))
      count && myNfts.push({
        id: nft.id,
        owner: nft.owner,
        amount: count,
        cost: nft.cost,
        timestamp: nft.timestamp
      })
    }

    setGlobalState('myNfts', structuredNfts(myNfts))
  } catch (error) {
    reportError(error)
  }
}

const buyNFTFromServer = async (method: number[], acres: any, enqueueSnackbar: any) => {
  try {
    if (!ethereum) {
      alert('Please install Metamask')
      return
    }

    const connectedAccount = getGlobalState('connectedAccount')
    const contract: any = getEtheriumContract()

    const tokenIds: number[] = []
    const amounts: number[] = []

    for (let i = 0; i < hectars.length; ++i) {
      if (method.filter(x => x === hectars[i]).length !== 0) {
        tokenIds.push(i + 1)
        amounts.push(method.filter(x => x === hectars[i]).length)
      }
    }

    const amount: any = ethers.utils.parseEther('0.5')

    await contract.buyFromServer(tokenIds, amounts, Number(acres), {
      from: connectedAccount,
      value: amount.mul(acres)._hex
    })

    window.location.reload()
  } catch (error: any) {
    displayErrorMessage(enqueueSnackbar, error)
  }
}

const withdraw = async () => {
  try {
    if (!ethereum) {
      alert('Please install Metamask')
      return
    }

    const connectedAccount = getGlobalState('connectedAccount')
    const contract: any = getEtheriumContract()

    const amount: any = ethers.utils.parseEther('5')
    console.log('withdrawing')
    await contract.payTo(connectedAccount, amount)
  } catch (error: any) {
    console.log(error)
  }
}

const structuredNfts = (nfts: any) =>
  nfts
    .map((nft: any) => ({
      id: Number(nft.id),
      img: 'http://app.judicialasset.com/api/images/' + nft.id + '.png',
      url: opensea_uri + nft.id,
      owner: nft.owner,
      amount: Number(nft.amount),
      cost: parseInt(nft.cost._hex) / 10 ** 18,
      timestamp: new Date(nft.timestamp.toNumber()).getTime()
    }))

export {
  isWallectConnected,
  connectWallet,
  truncate,
  loadNfts,
  loadMyNfts,
  buyNFTFromServer,
  getEtheriumContract,
  getEtheriumContractWithoutSigner,
  loadUserNfts,
  withdraw
}
