import binanceApiNode from "binance-api-node"



const client = new binanceApiNode()
export const getStockData = async(market,tickInterval) =>{
   const candles=await client.candles({symbol:'AVAXUSDT',interval:'1m'})
   //console.log(candles[499])
    return candles[499]
}

