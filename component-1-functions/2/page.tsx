'use client'
import styles from "./page.module.css";
import axios from "axios";
import Quadrati from "./quadrati";
import { useState } from "react";
import imag from "../../../../public/pngegg (1).png"
import Image from "next/image";


type CartItem = {
    id: number;
    userId: number;
    date: string;
    products: any[]; 
};

export default function UseEffect(){
    const [boll , setBoll] = useState(false)
    const [API , setAPI] = useState<CartItem[]>([])
  function axiosRequest() {
    axios.get("https://fakestoreapi.com/carts").then((response: { data: CartItem[] }) => setAPI(response.data));
    setBoll(prevState=> !prevState)
}
  return (
    <div className={styles.div1}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Noto+Sans+JP:wght@100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
        <h1 className={styles.div} >axios request + useEffect + useState</h1>
        {boll==true? <Quadrati prop={API}/>:<><Image src={imag} alt="" style={{ height: 150, width: 150, transform: "translate(-70px , -10px)", rotate: "210deg" }} /><h1 className={styles.div3} style={{
             fontFamily: "Roboto Mono",
        }}>clicca qui</h1></>}
        <button onClick={axiosRequest} style={{transform: `translate( ${boll !== true ? "0px , 44px" : 0})` , width:70 , height: 30}}>click</button>
    </div>
  );
}
