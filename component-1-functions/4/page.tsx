"use client";

import { Col, Row } from "antd";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function useTerminal() {
  const [n1, setN1] = useState<number>(1);
  const [texta, setTexta] = useState<string>(`entering room ${n1}...`);
  const [tex, setTex] = useState<string>("");
  const [boll, setBoll] = useState<boolean>(true);
  const [exitTimeout, setExitTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTexta(`entered room ${n1}...`);
  }, [n1]);

  function interv(e: number) {
    setTexta(`exiting room ${n1}...`);

    if (exitTimeout) {
      clearTimeout(exitTimeout);
    }

    const timeout = setTimeout(() => {
      setN1(e);
      setTexta(`entered room ${e} !!!`);
    }, 2000);

    setExitTimeout(timeout);
  }

  function ent(e: any) {
    if (e.key === "Enter") {
      for(let i=0; i < tex.length; i++) {
        const ch = tex[i];
        if(ch === '1' || ch === '2' || ch === '3' || ch === '4') {
          interv(Number(ch));
          break;
        }
      }
      setBoll(prevState => !prevState); 
    }
  }

  function chang(e:any) {
    setTex(e.target.value);
  }

  useEffect(() => {
    setTex('');
  }, [boll]);

  useEffect(() => {
    return () => {
      if (exitTimeout) {
        clearTimeout(exitTimeout);
      }
    }
  }, []);

  return (
    <div className={styles.div1}>
      <h1 className={styles.h1}>Terminal " Enter Rooms "</h1>
      <Row className={styles.rowcol}>
        <Col>
          <div
            className={n1 === 1 ? styles.div4ze : styles.div4aze}
            onClick={() => interv(1)}
          >
            <h1>1</h1>
          </div>
        </Col>
        <Col>
          <div
            className={n1 === 2 ? styles.div4ze : styles.div4aze}
            onClick={() => interv(2)}
          >
            <h1>2</h1>
          </div>
        </Col>
        <Col>
          <div
            className={n1 === 3 ? styles.div4ze : styles.div4aze}
            onClick={() => interv(3)}
          >
            <h1>3</h1>
          </div>
        </Col>
        <Col>
          <div
            className={n1 === 4 ? styles.div4ze : styles.div4aze}
            onClick={() => interv(4)}
          >
            <h1>4</h1>
          </div>
        </Col>
      </Row>
      <Row className={styles.rowcolT}>
        <Col>
          <div className={styles.div3}>
            <input
              type="text"
              className={styles.input4}
              disabled
            />
            <input
              type="text"
              className={styles.input4}
              onChange={chang}
              value={tex}
              onKeyDown={ent}
            />
            <input
              type="text"
              className={styles.input4}
              disabled
              placeholder={texta}
            />
            <input
              type="text"
              className={styles.input4}
              disabled
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
