import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import JoinUs from '../components/JoinUs'
import styles from '../styles/Landing.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dailyrate</title>
        <meta name="description" content='Louez mieux. Tout simplement' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <span className={styles.hello}>
          <Image src='/emotes/👋🏼.png' width={20} height={20} />
          <p>Bonjour</p>
        </span>
        <body className={styles.content}>
          <h1 className={styles.title}>
            Louez mieux.<br/>Tout simplement
          </h1>
          <p className={styles.desc}>
            Dailyrate optimise chaque jour les revenus de vos locations 
            court-terme.
          </p>
          <p className={styles.desc}>
            Notre technologie intelligente détermine le meilleur prix 
            en analysant le marché — de très près. 🔍
          </p>
          <JoinUs />
        </body>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
