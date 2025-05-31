import styles from "./page.module.css"

type Children={children:React.ReactNode}


export default function Home(prop:Children){
    return (
        <div className={styles.div}> 
            {prop.children}
        </div>
    )
}