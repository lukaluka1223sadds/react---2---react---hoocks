'use client'
import Homecomp from "../reusable-components/component-1/page"
import Homecomp2 from "../reusable-components/component-2/page"
import styles from "./page.module.css"
import funct1 from "./component-1-functions/1/page"
import UseEffect from "./component-1-functions/2/page"
import useMemo from "./component-1-functions/3/page"

export default function component1(){
    return(
        <div className={styles.page}>
        <Homecomp>{funct1()}</Homecomp>
        <Homecomp2>{UseEffect()}</Homecomp2>
        <Homecomp>{useMemo()}</Homecomp>
        <Homecomp2></Homecomp2>
        </div>
    )
}