import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mysnippits</title>
        <meta name="description" content="mysnippits Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <p>Home page!</p>
    </div>
  )
}
