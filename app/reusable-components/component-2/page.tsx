'use client'
import { JSX } from "react"
import style from "./page.module.css"
type Children={children?:JSX.Element}
export default function homes(props:Children){
    return(
        <div className={style.homes} style={{border:"10px solid black" , borderStyle:" solid dashed"}}>{props.children}</div>
    )
}