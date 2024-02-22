import { useEffect, useState } from "react";
import { getStockData } from "./Services";

const LiveChart = (market,interval) => {
    const [stockData,setStockData] = useState([])

    useEffect(()=>{
        getStockData(market,interval)
        .then(data => setStockData(data))
        .catch(err=>{
            console.log(err)
        })
    },[stockData])

    return(
        <>
        {
            stockData['close']
        }
        </>
    );
};


export default LiveChart;