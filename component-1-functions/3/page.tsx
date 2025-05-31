'use client';
import { useState, useMemo } from "react";
import styles from "./page.module.css"

export default function Usememo() {
    const [boll, setBoll] = useState(true);
    const [n, setN] = useState(0);
    const [createdNumbers, setCreatedNumbers] = useState([0, 1, 1]);
    const [createdNum, setCreatedNum] = useState([...createdNumbers])

    function change(e:any) {
        setN(e.target.value); 
    }

    const fibonacciNumbers = useMemo(() => {
        for (let i = 3; i <= n; i++) { 
            const arr1 = createdNumbers.slice(-1);
            const arr2 = createdNumbers.slice(-2);
            const finalArr = arr1[0] + arr2[0];
            createdNumbers.push(finalArr);
        }
        return createdNum;
    }, [n, createdNumbers]);

    function clear(){
       setCreatedNum([0 , 1 , 1])
    }

    const handleClick = () => {
        setCreatedNumbers(fibonacciNumbers);
        setBoll(prevState => !prevState);
    };

    return (
        <div className={styles.div}>
            <input type="number" placeholder="input number" onChange={change} className={styles.input}/>
            <button onClick={handleClick} className={styles.buttons}>Click for create Fibonacci numbers</button>
            <button onClick={clear} className={styles.buttons}>clear</button>
            <div>Numeri creati: {createdNum.join(', ')}</div>
        </div>
    );
}