import Head from 'next/head'
import Featured from '../Compo/Feature'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jewelery</title>
        <meta name="description" content="To shine " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
  
    </div>
  )
}
