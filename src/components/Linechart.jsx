import { useEffect, useState } from "react"
import Chart from "react-google-charts"

const Linechart = ({history}) => {
    const [data, setData] = useState([["Date","Prices"]])

    
    useEffect(() => {
        const dataCopy=[["Date","Prices"]]
        if(history.prices){
           history.prices.map((item)=>{
            dataCopy.push([`${new Date(item[0]).toLocaleString().slice(0,-5)}`,item[1]])
           })
           setData(dataCopy)
        }
     
    }, [history])
    
  return (
    <div>
      <Chart
        chartType="LineChart"
        data={data}
        height="100%"
      />
    </div>
  )
}

export default Linechart
