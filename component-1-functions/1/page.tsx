"use client";
import styles from "./page.module.css"
import { Row, Col } from "antd";
import { useState } from "react";

export default function UseState() {
  const [cont, setCont] = useState(0);
  const [symbol, setSymbol] = useState("");

  function onch() {
       setCont(cont + 1)
  }
  
  function onch1(e: React.ChangeEvent<HTMLInputElement>) {
       setSymbol(e.target.value);
  }

  function onch2() {
    setCont(cont - 1)
  }

  return (
    < div className={styles.container}>
      <h1 style={{ margin: "10px 0 60px 285px" }}>UseState Hook</h1>
      <Row>
        <Col>
          <h2>number:{cont}</h2> <h2>text:{symbol}</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <button  value="input number" onClick={onch}  style={{width:"200px", marginRight:"20px"}} className={styles.button}> click + 1</button>
          <button  value="input number" onClick={onch2}  style={{width:"200px", marginRight:"20px"}} className={styles.button}> click - 1</button>
          <input type="text" placeholder="input text ......" onChange={onch1} className={styles.button}/>
        </Col>
      </Row>
    </div>
  );
}
