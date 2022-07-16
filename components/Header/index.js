import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

import styles from './css/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image src='/images/hero.svg' width={140} height={38}/>
      </Link>
      <a className={styles.twitter}>
        <Image src='/images/twitter.svg' width={22} height={22} />
      </a>
      <a className={styles.join}>
        Rejoindre l&apos;aventure
        <FiArrowUpRight size={13} />
      </a>
    </header>
  )
}