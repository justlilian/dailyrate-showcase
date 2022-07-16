import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

import styles from './css/JoinUs.module.css'

export default function JoinUs() {
  return (
    <form className={styles.container}>
      <span className={styles.about}>
        Intéressé ? Rejoignez nous maintenant 👇 et bénéficiez d’un 
        <u>accès prioritaire !</u>
      </span>
      <article className={styles.input_wrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder='Addresse e-mail'
        />
      </article>
      
    </form>
  )
}