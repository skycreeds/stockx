import React, { useState, useEffect } from "react";
import { Form, InputGroup, Card, Container, Row, Col } from "react-bootstrap";
import BuyButton, { SellButton } from "./Buttons";

import "./Style.css";
import Cookies from "js-cookie";

//const [cookies,setcookies,removeCookie]=useCookies(['Asset'])

function AssetCard({ Value }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>ASSETS</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>{Cookies.get("Asset")}</Card.Text>
      </Card.Body>
    </Card>
  );
}
function PriceChange({ val }) {
  if (val < 0) {
    return (
      <>
        <span style={{ color: "red", position: "absolute", right: "50px" }}>
          {val}
        </span>
        <img
          style={{ position: "absolute", right: "100px", top: "50px", height:"40px"}}
          src="src/assets/icons8-down-arrow-64.png"
        />
      </>
    );
  } else {
    return (
      <>
        <span style={{ color: "green", position: "absolute", right: "50px" }}>
          {val}
        </span>
        <img
          style={{  position: "absolute", right: "90px", top: "40px", height:"40px" }}
          src="src/assets/icons8-up-30.png"
        />
      </>
    );
  }
}

function InvestedCard({ Value }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>INVESTED</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        {Cookies.get("invested")}{" "}
        <PriceChange
          val={(parseFloat(Cookies.get('Asset'))+Value)-1000000}
        />
      </Card.Body>
    </Card>
  );
}
function StockList() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Stock List</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>{Cookies.get("Gquant")}</Card.Text>
      </Card.Body>
    </Card>
  );
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
          <InvestedCard Value={parseFloat(Cookies.get("Gquant")) * stockdata} />
        </Col>
        <Col>
          <br></br>
          <StockList />
        </Col>
      </Row>
    </Container>
  );
}

export default BuySellWidget;
