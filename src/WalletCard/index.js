import React ,{useState,useEffect}from 'react';

import axios from "axios";
import {ethers} from "ethers";
import Button from '@mui/material/Button';
import "./styles.css";
import NFTScontainers from "../NFTScontainers";


const WalletCard = () => {
    const[address,setAddress] = useState(null)
    const[nft,setNFT]= useState([]);
    const[balance,setBalance] =useState(0);
    const[loading,setLoading] =useState(false);
    const connectWallet=async()=>{
        if (typeof window.ethereum !== 'undefined') {
            // console.log('MetaMask is installed!');
            const account =await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            getUserBalance(account[0]);
            setAddress(account[0])
            // console.log(account)
            // const contractAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"

            setLoading(true);
        }
        else{
            alert("please install metamask")
        }
        
    }
    const getUserBalance =(addres)=>{
        window.ethereum.request({
            method:'eth_getBalance', 
            params: [addres, 'latest']
        }).then(balance => {
            setBalance(ethers.utils.formatEther(balance));   
        })

    }

    // "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"

    return (
        <div className='mainContainer'>
            <Button onClick={connectWallet} variant="contained">Connect</Button>
            {loading && (<div className='details'>
            <strong>
            Balance: {balance}
                </strong>
            <NFTScontainers address={address}/>

            </div>)}
            
            
            
        </div>
    );
}

export default WalletCard;
