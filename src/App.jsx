import React, { useEffect, useState } from "react";
import TradingViewWidget from "./Components/BtcChartWidjet";
import BuySellWidget from "./Components/BuySell";
import "bootstrap/dist/css/bootstrap.min.css";
import { getStockData } from "./Components/Services";
import Cookies from "js-cookie";


function App() {
  //console.log(99999999999)
  if (Cookies.get("loaded") === undefined) {
    Cookies.set("loaded", 1);
    Cookies.set("Asset", 1000000);
    Cookies.set("Gquant", 0);
    Cookies.set("invested", 0);
    Cookies.set("quant", 0);
    Cookies.set("amount", 0);
  }
  //console.log(Cookies.get('loaded'),Cookies.get('Asset'),Cookies.get('Gquant'),Cookies.get('invested'),Cookies.get('quant'),Cookies.get('amount'))
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    getStockData()
      .then((data) => setStockData(data))
      .catch((err) => {
        console.log(err);
      });
  }, [stockData]);

  return (
    <>
      <div>
        <TradingViewWidget />
      </div>
      <div>
        <BuySellWidget stockdata={stockData["close"]} />
      </div>
    </>
  );
}

export default App;
