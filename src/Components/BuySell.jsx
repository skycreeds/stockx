import React, { useState, useEffect } from "react";
import { Form, InputGroup, Card, Container, Row, Col } from "react-bootstrap";
import BuyButton, { SellButton } from "./Buttons";


import "./Style.css";

//const [cookies,setcookies,removeCookie]=useCookies(['Asset'])

function AssetCard({ Value }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>ASSETS</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>{Value}</Card.Text>
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
          style={{ position: "absolute", right: "60px", top: "40px" }}
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
          style={{ position: "absolute", right: "80px" }}
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
        {Value[0]} <PriceChange val={Value[1] < 0 ? 0 : Value[1] - Value[0]} />
      </Card.Body>
    </Card>
  );
}
function StockList({ Value }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Stock List</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>{Value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function BuySellWidget({ stockdata }) {
  //console.log(stockdata)
  // const [stockData, setStockData] = useState([]);
  //const [Stockhold,setStockhold] = useState(0);
  const [Invested, setInvested] = useState(0);
  const [Asset, setAsset] = useState(100000);
  const [quat, setQuant] = useState(0);
  const [amount, setAmount] = useState(0);
  const [Gquant, setGquant] = useState(0);
  
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
              value={isNaN(quat) ? 0 : quat}
              onChange={(event) => {
                let tempq = event.target.value;
                setQuant(parseFloat(tempq));
                setAmount(parseFloat(tempq * stockdata));
              }}
            />
            <Form.Control
              aria-label="With textarea"
              placeholder="Amount"
              value={isNaN(amount) ? 0 : amount}
              onChange={(event) => {
                let tempq = event.target.value;
                setAmount(parseFloat(tempq));
                setQuant(parseFloat(tempq / stockdata));
              }}
            />
          </InputGroup>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className="bs_btn">
          <div className="BuyButton">
            <BuyButton
              VAll={[
                Asset,
                setAsset,
                Invested,
                setInvested,
                stockdata,
                quat,
                amount,
                setGquant,
                Gquant,
              ]}
            />
          </div>
          <div className="SellButton">
            <SellButton
              VAll={[
                Asset,
                setAsset,
                Invested,
                setInvested,
                stockdata,
                quat,
                amount,
                setGquant,
                Gquant,
              ]}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <br></br>
          <AssetCard Value={Asset} />
        </Col>
        <Col>
          <br></br>
          <InvestedCard Value={[Invested, Gquant * stockdata]} />
        </Col>
        <Col>
          <br></br>
          <StockList Value={Gquant} />
        </Col>
      </Row>
    </Container>
  );
}

export default BuySellWidget;
