import { useState } from 'react';
import Head from 'next/head'
import tinycolor from "tinycolor2";
import ColorBox from "../components/ColorBox.tsx";
import styles from '../styles/Home.module.css'

export default function Home() {
  const [rangeValue, setRangeValue] = useState(50);
  const handleChange = (e) => {
    setRangeValue(e.target.value);
  }

  const topColor = tinycolor.fromRatio({
    h: (rangeValue)/100,
    s: 0.86,
    l: 0.53,
  });

  const bottomColor = tinycolor.fromRatio({
    h: (rangeValue)/100 + 0.03,
    s: 0.89,
    l: 0.48,
  });

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
        
        <ColorBox colorFrom={topColor.toHexString()} colorTo={bottomColor.toHexString()}/>
        <div className={styles.spacer} />
        <div>
          <input type="range" step="1" min="0" max="100" value={rangeValue} onChange={handleChange} />
        </div>
      </main>
    </div>
  )
}
