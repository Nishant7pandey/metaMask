import React,{useEffect,useState} from 'react';
import { Alchemy, Network } from "alchemy-sdk";
import NFTCards from '../NFTCards';
import "./styles.css";
import { Pagination } from "@mui/material";

const config = {
    apiKey: "BRErVTKxNh7d5oftsGTPDBOYDtcUKpgw",
    network: Network.ETH_MAINNET,
  };
const alchemy = new Alchemy(config);

const NFTScontainers = ({address}) => {
    const[pageNumber,setPageNumber] =useState(1);
    const[NFTData,setNFTData]=useState([]);
    const[loading,setLoading]=useState(false);
    useEffect(()=>{

        const prr =async()=>{
            await alchemy.nft.getNftsForOwner(address).then((response)=> setNFTData(response.ownedNfts));
            setLoading(true);
        }
        prr();
    },[])
    const handleChange = (event, value) => {
        setPageNumber(value);
      };
    // console.log(NFTData)
    return (
        <div>
         { loading ? (<>   
        <div style={{}} className="container">
            {NFTData.length !== 0 ? (NFTData.filter((e,i)=> {
                    return i>= 6*(pageNumber-1) && i<= 6*(pageNumber-1)+5
                    
                  }).map((item,i)=>(
                    <NFTCards name={item.rawMetadata.name} image={item.rawMetadata.image} description={item.rawMetadata.description}  key={i}/>
                ))):(<>No NFT</>)
                  }
        </div>    
            {NFTData.length !== 0 && <div className="pagination-div">
      <Pagination
        count={Math.ceil(NFTData.length/6)}
        page={pageNumber}
        onChange={handleChange}
        color='primary' variant="outlined" shape="rounded" size='large'
        
      /> 
    </div>}</>) : (<>Loading....please wait</>)
    }
        </div>
    );
}

export default NFTScontainers;
