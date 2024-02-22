import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import Cookies from "js-cookie";
import "./Style.css";
//VAll=[Asset,setAsset,Invested,setInvested,stockdata,quant,amount,setGquant,Gquant]
//       0        1      2         3           4         5     6       7        8

function BuyButton({ VAll }) {
  const BuyButtonHandle = (data) => {
    //console.log(data[0]);
    data[1](data[0] - data[5] * data[4]);
    console.log(data[5])
    console.log(data[8])
    data[7](data[8] + data[5]); //setting global quamtity
    console.log(data[8])
    data[3](data[8] * data[4]);
    
  };

  return (
    <>
      <ReactiveButton
        size="large"
        color="green"
        idleText="BUY"
        loadingText="Loading"
        successText="Done"
        onClick={() => BuyButtonHandle(VAll)}
        style={{
          //left:'50%',
          //position:'absolute',
          borderRadius: "5px",
        }}
      />
    </>
  );
}

export function SellButton({ VAll }) {
  //VAll=[Asset,setAsset,Invested,setInvested,stockdata,quant,amount,setGquant,Gquant]
  //       0        1      2         3           4         5      6       7     8
  const SellButtonHandle = (data) => {
    console.log(data[2])
    const amt = data[5] * data[4];
    data[1](data[0] + amt);
    data[7](data[8] - data[5]);
    data[3](data[8] * data[4]);
    
    
    //sessionStorage.setItem("Asset", data[0]);
    //sessionStorage.setItem('invested',data[2])
    //sessionStorage.setItem("Gquant", data[8]);
  };

  return (
    <>
      <ReactiveButton
        size="large"
        color="red"
        idleText="SELL"
        loadingText="Loading"
        successText="Done"
        onClick={() => SellButtonHandle(VAll)}
        style={{
          borderRadius: "5px",
        }}
      />
    </>
  );
}

export default BuyButton;