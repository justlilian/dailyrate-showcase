import Image from 'next/image'
import Link from 'next/link'

import styles from './css/Footer.module.css'

export default function Footer() {
  return (
    <header className={styles.footer}>
      <Link href='/'>
        <Image src='/images/logo.svg' width={40} height={40}/>
      </Link>
      <p className={styles.brand}>© 2022 Dailyrate.</p>
      <span className={styles.by}>
        Built with 💚 by <Link href='https://github.com/justlilian'><u>Lilian</u></Link>
      </span>
    </header>
  )
}