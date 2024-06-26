import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../context/cointContext";
import Linechart from "../components/Linechart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [history, setHistory] = useState();
  const { currency } = useContext(CoinContext);

  const fetchAllCoin = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-Qq6RWBF3zfaqyKSFfa448qjM' }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  }

  const fetchHistorical=async()=>{
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Qq6RWBF3zfaqyKSFfa448qjM'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
        .then(response => response.json())
        .then(response => setHistory(response))
        // .then(response => console.log(response))
        .catch(err => console.error(err));
}

  useEffect(() => {
    fetchAllCoin();
    fetchHistorical()
  }, [currency]);

  if (coinData,history) {
    return (
      <div className="px-5">
        <div className="flex items-center gap-5 flex-col mx-auto my-24 mb-12">
          <img className="w-24 " src={coinData.image.large} alt={`${coinData.name} logo`} />
          <p><b className="text-4xl font-semibold ">{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="max-w-xl h-[250px] m-auto"> <Linechart history={history}/></div>
        <div className="max-w-xl flex flex-col mx-auto my-12">
          <ul className="flex justify-between py-2 px-0 border-b-2 border-[#5f5d5f]">
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul className="flex justify-between py-2 px-0 border-b-2 border-[#5f5d5f]">
            <li>Currency Price</li>
            <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul className="flex justify-between py-2 px-0 border-b-2 border-[#5f5d5f]">
            <li>Market Cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul className="flex justify-between py-2 px-0 border-b-2 border-[#5f5d5f]">
            <li>24 Hour High</li>
            <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul className="flex justify-between py-2 px-0 border-b-2 border-[#5f5d5f]">
            <li>24 Low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
      
      </div>
    );
  } else {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div className="w-16 h-16 border-4 border-[#bdbdbd] border-t-[#4500c6] rounded-full animate-spin">
        </div>
      </div>
    );
  }
}

export default Coin;
