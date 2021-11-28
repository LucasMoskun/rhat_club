import React from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import {ERC20_ABI} from './abi';
import { NFT_ABI } from './abi_nft';

export const EnableWeb3 = async () => {
    const provider = await detectEthereumProvider();
    if(provider) {
        return establishWeb3Conenction(provider);
    } else {
        alert("Please Install Metamask!");
        return false;
    }
}

function establishWeb3Conenction(provider) {
    if(provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed');
    } else {
        const Web3 = require("web3");
        const ethEnabled = () => {
            if(window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                return true;
            }
            return false;
        }

        if(ethEnabled()){
            //console.log("eth enabled");
        } else {
            //console.log("eth not enabled");
        }
    }
}

export const HandleWalletChange = async (setDisplayHappy) => {
  await EnableWeb3();
  if(!window.ethereum) {return;}
  window.ethereum.on("accountsChanged", async() => VerifyRHat(setDisplayHappy)); 
}

export const VerifyRHat = async (setDisplayHappy) => {
    await EnableWeb3();

    let accounts;
    let account;

    try{
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
        account = accounts[0];
    } catch (error) {
        console.error(error);
        setDisplayHappy(false);
        return{empty:true};
    }

    const rHatAddress = "0x4f0fe57066ab1c84569dc6dd2edfe08b92f97f33";
    const rHatNftAddress = "0x6cd6d15b8b69850dae31f9c87c94b5ff721c704c";
    const rHatContract = new window.web3.eth.Contract(ERC20_ABI, rHatAddress);
    const nftContract = new window.web3.eth.Contract(NFT_ABI, rHatNftAddress);
    const balance = await rHatContract.methods.balanceOf(account).call();
    const nftBalance = await nftContract.methods.balanceOf(account, 0).call();
    console.log("RHAT Balance: " + balance);
    console.log(typeof balance);
    if(balance === "1" || nftBalance === "1"){
        setDisplayHappy(true);
    } else {
        setDisplayHappy(false);
    }
}