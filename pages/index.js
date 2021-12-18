import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jewelery</title>
        <meta name="description" content="To shine " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.left}>left</div>
      <div className={styles.center}>left</div>
      <div className={styles.rigth}>left</div>
  
    </div>
  )
}
