import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import {API_KEY} from './private/onboard_api'

let web3;

export const onboard = Onboard({
  dappId: API_KEY,       // [String] The API key created by step one above
  networkId: 1,  // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: wallet => {
       web3 = new Web3(wallet.provider)
    }
  }
});