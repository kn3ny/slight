import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cbstyle from '../styles/ColorBox.module.scss'

export default function Home() {
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

        <div className={cbstyle.blue} />
        <div className={cbstyle.spacer} />
        <div className={cbstyle.blue} />
      </main>
    </div>
  )
}
