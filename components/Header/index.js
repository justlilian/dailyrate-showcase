import Image from 'next/image'
import Anchor from '../Anchor'
import { FiArrowUpRight } from 'react-icons/fi'

import Button from '../Button'
import styles from './css/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Anchor href='/'>
        <Image src='/images/hero.svg' width={140} height={38}/>
      </Anchor>
      <Anchor className={styles.twitter} href='https://twitter.com/_justlilian'>
        <Image src='/images/twitter.svg' width={22} height={22} />
      </Anchor>
      <Button 
        dark
        react_icon={FiArrowUpRight}
        text="Rejoindre l'aventure"
        shape='oval'
      />
    </header>
  )
}