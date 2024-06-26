import { useContext, useEffect, useState } from "react"
import { CoinContext } from "../context/cointContext"
import { Link } from "react-router-dom"
const Home = () => {
  const {allcoin,currency}=useContext(CoinContext)
  const [displaycoin, setDisplaycoin] = useState([])
  const [input, setInput] = useState("")
  const inputHnadler=(e)=>{
     setInput(e.target.value)
     if(e.target.value===""){
      return setDisplaycoin(allcoin)
     }
  }

  const searchHandler=async(e)=>{
    e.preventDefault();
    const coin= await allcoin.filter((item)=>{
       return item.name.toLowerCase().includes(input.toLowerCase())
    }) 
    setDisplaycoin(coin)
  }
  useEffect(() => {
    setDisplaycoin(allcoin)
  }, [allcoin])
  
  return (
   
   

    <div className="pb-20 py-0 px-2">
    <div className="container">
      <div className="flex items-center gap-7 text-center max-w-xl mx-auto my-20 flex-col">
        <h1 className="text-max-4vw-36px">Largest <br/>Crypto Marketplace</h1>
        <p className="w-[75%] text-[#e3e3e3] leading-[1.3]">Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about crypto</p>
        <form action="" onSubmit={searchHandler} className="p-2 w-3/4 bg-white  flex justify-between items-center text-lg rounded-md  ">
          <input list="coinList" value={input} onChange={inputHnadler} className="text-lg text-black w-24 flex-1 border-none outline-none pl-1 xms:pl-2" type="text" placeholder="Search crypto...." required/>
  <datalist id="coinList">
     {allcoin.map((item,index)=>(
      <option key={index} value={item.name}/>
     ))}
  </datalist>


          <button className="border-none cursor-pointer text-white bg-[#7927ff] text-sm xms:text-lg rounded-md 
           xms:py-3 py-2 xms:px-8 px-5" type="submit">Search</button>
        </form>
      </div>
      <div className="rounded-2xl m-auto max-w-3xl bg-gradient">
        <div className="grid grid-cols-Mobile md:grid-cols-custom items-center border-b-2 border-[#3c3c3c] py-4 px-5">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className=" text-center">24H change</p>
          <p className="text-right hidden md:block">Market Cap</p>
        </div>
        {displaycoin.slice(0,10).map((item,index)=>(
               <Link to={`/coin/${item.id}`} className="grid grid-cols-Mobile md:grid-cols-custom items-center border-b-2 border-[#3c3c3c] py-4 px-5 last:border-b-0" key={index}>
                <p>{item.market_cap_rank}</p>
                <div className="flex items-center gap-2">
                  <img src={item.image} alt="" className="w-6 sm:w-9 "/>
                  <p>{item.name + " - " + item.symbol}</p>
                </div>
                <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                <p className={`text-center ${item.price_change_percentage_24h > 0 ? 'text-[#00D515]' : 'text-[#ff4646]'}`}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                <p className="text-right hidden md:block">{currency.symbol} {item.market_cap.toLocaleString()}</p>
               </Link>
          ))}
      </div>
      </div>
    </div>
  )
}

export default Home
