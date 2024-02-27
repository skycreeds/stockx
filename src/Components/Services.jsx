import binanceApiNode from "binance-api-node"
import { Deta } from "deta"
import Cookies from "js-cookie"

const deta=Deta('a0tv7pxwpem_AAHSc2rBxNf5MNnE5sUT6JvPKbA88cCJ')
const dbase=deta.Base('stockx')


const client = new binanceApiNode()
export const getStockData = async(market,tickInterval) =>{
   const candles=await client.candles({symbol:'AVAXUSDT',interval:'1m'})
   //console.log(candles[499])
    return candles[499]
}

export const sendDBdata= async(name,value)=>{
    dbase.put({asset:value,email:Cookies.get('email'),profit_loss:(parseFloat(Cookies.get('Asset'))-1000000)},name)
}

