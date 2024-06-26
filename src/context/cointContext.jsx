import { createContext, useEffect, useState } from "react";

export const CoinContext=createContext();

const CoinContextProvider=(props)=>{
 
    const [allcoin, setAllcoin] = useState([])
    const [currency, setcurrency] = useState({
        name:"usd",
        symbol:"$"
    })

    const fetchAllcoin=async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Qq6RWBF3zfaqyKSFfa448qjM'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllcoin(response))
            // .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
       fetchAllcoin()
    },[currency])

    const contextValue={
        allcoin,currency,setcurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
             {props.children}
        </CoinContext.Provider>
    )
}
export default CoinContextProvider;