import Image from 'next/image'
import Anchor from '../Anchor'

import styles from './css/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
        <Anchor href='/'>
          <a>
            <Image alt='logo' src='/images/logo.svg' width={40} height={40}/>
          </a>
        </Anchor>
      
      <p className={styles.brand}>© 2022 Dailyrate.</p>
      <span className={styles.by}>
        Built with 💚 by <Anchor href='https://github.com/justlilian'><u>Lilian</u></Anchor>
      </span>
    </footer>
  )
}