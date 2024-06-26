import logo from "../assets/logo.png"
import arrow_icon from "../assets/arrow_icon.png"
import { useContext } from "react"
import { CoinContext } from "../context/cointContext"
import { Link } from "react-router-dom"
const Navbar = () => {

  const {setcurrency}=useContext(CoinContext)

  const currencyHandler=(event)=>{
    switch(event.target.value){
        case "usd":{
            setcurrency({name:"usd",symbol:"$"})
            break;
        }
       case "eur":{
        setcurrency({name:"eur",symbol:"E"})
        break;
       }
       case "inr":{
        setcurrency({name:"inr",symbol:"ir"})
        break;
       }
       default: {
        setcurrency({name:"inr",symbol:"ir"})
        break;
       }
    }
    
  }
  return (
    <div className="container">
    <div className="flex justify-between items-center py-4 px-[5%] sm:py-5 sm:px-[13%] md:py-5 md:px-[9%] xl:py-5 xl:px-[10%] border-b-2 border-[#3c3c3c] text-[#ddd]">
     <Link to={"/"}> <img src={logo} alt="" className="w-max-12vw-120px" /></Link> 
       <ul className="md:flex hidden sm:gap-7 gap-10 cursor-pointer">
       <Link to={"/"}> <li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
       
       </ul>
       {/* Navbar Right */}
       <div className="flex items-center gap-max-1vw-12px">
       <select onChange={currencyHandler} className="px-1 sm:px-2 py-1 rounded-md border-2 border-white text-white bg-transparent">
        <option className="bg-[#09005c] text-white" value="usd">USD</option>
        <option className="bg-[#09005c] text-white"  value="eur">EUR</option>
        <option className="bg-[#09005c] text-white"  value="inr">INR</option>
       </select>
       <button className="btn-custom gap-1 sm:gap-2">
  Sign up <img src={arrow_icon} alt="Arrow Icon" className="w-3" />
</button>

       </div>
       </div>
    </div>
  )
}

export default Navbar
