import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  connectedAccount: '',
  contract: null,
  nfts: [],
  myNfts: [],
  chartsData: []
})

export {
  setGlobalState,
  useGlobalState,
  getGlobalState
}
