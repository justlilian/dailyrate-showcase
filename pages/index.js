import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'
import JoinUs from '../components/JoinUs'
import Reveal from '../components/Reveal'
import styles from '../styles/Landing.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dailyrate</title>
        <meta name="description" content='Louez mieux. Tout simplement' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.landing}>
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
          
          <article className={styles.clarity}>
            <Reveal>
              <Image src='/ui/clarity.png' layout='fill'/>
            </Reveal>
          </article>
          <article className={styles.integrations}>
            <Reveal>
              <Image src='/ui/integrations.png' layout='fill'/>
            </Reveal>
          </article>
          <article className={styles.customization}>
            <Reveal>
              <Image src='/ui/customization.png' layout='fill'/>
            </Reveal>
          </article>
          <article className={styles.insights}>
            <Reveal>
              <Image src='/ui/insights.png' layout='fill'/>
            </Reveal>
          </article>

          <JoinUs mobile_only />
        </body>
      </main>

      <Footer />
    </div>
  )
}
