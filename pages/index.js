import { useState } from 'react';
import Head from 'next/head'
import ColorBox from "../components/ColorBox.tsx";
import styles from '../styles/Home.module.css'

export default function Home() {
  const [rangeValue, setRangeValue] = useState(50);
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>slight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          slight
        </h1>
        
        <ColorBox step={rangeValue} />
        <div className={styles.spacer} />
        <div>
          <input type="range" step="1" min="0" max="100" value={rangeValue} onChange={handleChange} />
        </div>
      </main>
    </div>
  )
}
