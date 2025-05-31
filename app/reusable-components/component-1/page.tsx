'use client'
import { JSX } from "react"
import styles from "./page.module.css"
type Children = {children?:JSX.Element}
export default function homes(prop:Children){
    return(
        <div className={styles.homes}>{prop.children}</div>
    )
}