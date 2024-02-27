import React, { useState, useEffect } from "react";
import { Form, InputGroup, Card, Container, Row, Col } from "react-bootstrap";
import BuyButton, { SellButton } from "./Buttons";

import "./Style.css";
import Cookies from "js-cookie";

//const [cookies,setcookies,removeCookie]=useCookies(['Asset'])

function AssetCard({ Value }) {
  return (
    <Card style={{ width: "18rem", height:"5rem"}}>
      <Card.Body>
        <Card.Title>ASSETS</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>{parseFloat(Cookies.get("Asset")).toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
function PriceChange({ val }) {
  if (val < 0) {
    return (
      <>
        <span style={{ color: "red", position: "absolute", right: "50px", fontWeight:'1000',fontSize:'1.8em'}}>
          {parseFloat(val).toFixed(2)}
        </span>
      </>
    );
  } else {
    return (
      <>
        <span style={{ color: "green", position: "absolute", right: "50px", fontWeight:'1000',fontSize:'1.8em'}}>
          {val}
        </span>
      </>
    );
  }
}

function InvestedCard() {
  return (
    <Card style={{ width: "18rem", height:"5rem"}}>
      <Card.Body>
        <Card.Title>INVESTED</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        {parseFloat(Cookies.get("invested")).toFixed(2)}
        
      </Card.Body>
    </Card>
  );
}
function StockList() {
  return (
    <Card style={{ width: "18rem", height:"5rem"}}>
      <Card.Body>
        <Card.Title>Stock List</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>{parseFloat(Cookies.get("Gquant")).toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Portifolio_PL({Value}){
  return(
    <Card style={{ width: "18rem", height:"5rem" }}>
      <Card.Body>
        <Card.Title>Portifolio Profit & Loss</Card.Title>
        <Card.Subtitle className="mb-3 text-muted"></Card.Subtitle>
        <PriceChange
          val={parseFloat((parseFloat(Cookies.get('Asset'))+Value)-1000000).toFixed(2)}
        />
      </Card.Body>
    </Card>
  )
}

function BuySellWidget({ stockdata }) {
  //console.log(stockdata)
  // const [stockData, setStockData] = useState([]);
  //const [Stockhold,setStockhold] = useState(0);
  // const [Invested, setInvested] = useState(0);
  // const [Asset, setAsset] = useState(100000);
  // const [quat, setQuant] = useState(0);
  // const [amount, setAmount] = useState(0);
  // const [Gquant, setGquant] = useState(0);
  //const quant=Cookies.get('quant')
  //const amount=Cookies.get('amount')
  //setcookies('Asset',Asset,{path:'/'})

  //const [change,setChange] =useState(0)
  //console.log(cookies.Asset)
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="quanthead">Quantity</h1>
        </Col>
        <Col>
          <h1 className="amounthead">Amount</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <Form.Control
              aria-label="With textarea"
              placeholder="Quantity"
              value={isNaN(Cookies.get("quant")) ? 0 : Cookies.get("quant")}
              onChange={(event) => {
                let tempq = event.target.value;
                Cookies.set("quant", parseFloat(tempq));
                Cookies.set("amount", parseFloat(tempq * stockdata));
              }}
            />
            <Form.Control
              aria-label="With textarea"
              placeholder="Amount"
              value={isNaN(Cookies.get("amount")) ? 0 : Cookies.get("amount")}
              onChange={(event) => {
                let tempq = event.target.value;
                Cookies.set("amount", parseFloat(tempq));
                Cookies.set("quant", parseFloat(tempq / stockdata));
              }}
            />
          </InputGroup>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="bs_btn">
          <div className="BuyButton">
            <BuyButton VAll={stockdata} />
          </div>
          <div className="SellButton">
            <SellButton VAll={stockdata} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <br></br>
          <AssetCard />
        </Col>
        <Col>
          <br></br>
          <InvestedCard />
        </Col>
        <Col>
          <br></br>
          <StockList />
        </Col>
        <Col>
        <br></br>
        <Portifolio_PL Value={parseFloat(Cookies.get("Gquant")) * stockdata}/>
        </Col>
      </Row>
    </Container>
  );
}

export default BuySellWidget;
