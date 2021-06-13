import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import {API_KEY} from '../private/onboard_api'
import {ERC20_ABI} from './abi';

let web3;

export const onboard = Onboard({
  dappId: API_KEY,
  networkId: 1,  
  subscriptions: {
    wallet: wallet => {
       web3 = new Web3(wallet.provider)
    }
  }
});

export const VerifyRHat = async () => {
    var accounts = await web3.eth.getAccounts();
    console.log("Accounts: " + accounts);
    let account;
    account = accounts[0];
    const rHatAddress = "0x4f0fe57066ab1c84569dc6dd2edfe08b92f97f33";
    const rHatContract = new web3.eth.Contract(ERC20_ABI, rHatAddress);
    const balance = await rHatContract.methods.balanceOf(account).call();
    console.log("RHAT Balance: " + balance);
    console.log(typeof balance);
}
