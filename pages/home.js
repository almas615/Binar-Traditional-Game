import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { style } from 'dom-helpers'

export default function Home() {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.intro}>
                    {/* <h1>Hello, {localStorage.getItem('username')}</h1> */}
                    <h1>Hello, </h1>
                    <p>Welcome to BINAR GAMES.</p>
                    <p>We have more than hundreds of free online games for all ages. Play Now!</p>
                    <a href='/listgames' className={styles.btnplaygame}>Click here</a>
                </div>
                <div>
                <Image className={styles.homepic} src='/pngegg.png' width={400} height={300}/>
                </div>
            </div>
        </div>
    )
  }