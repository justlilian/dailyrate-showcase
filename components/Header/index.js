import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

import Button from '../Button'
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
      <Button 
        dark
        react_icon={FiArrowUpRight}
        text="Rejoindre l'aventure"
        shape='oval'
      />
    </header>
  )
}