import toast from 'react-hot-toast'
import joi from 'joi'
import { useState } from 'react'

import Button from '../Button'
import styles from './css/JoinUs.module.css'

export default function JoinUs( props ) {

  const [email, setEmail] = useState('')

  const handleJoin = async () => {
    const isEmail = joi.string().email({ tlds: { allow: false }})
    if(isEmail.validate( email ).error) {
      toast.error('Oops, email invalide')
    } else {
      toast.success('Bienvenue !');
    }
  }

  const handleContact = () => {
    const a = document.createElement('a');
    a.href = 'mailto:hello@dailyrate.io';
    a.click();
  }

  return (
    <form className={`
      ${styles.container}
      ${props.mobile_only ? styles.mobile_only : ''}
      ${props.force_center ? styles.force_center : ''}
    `}>
      <span className={styles.about}>
        Intéressé ? Rejoignez nous maintenant 👇 et bénéficiez d’un <u>accès prioritaire !</u>
      </span>
      <article className={styles.input_wrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder='Addresse e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          primary
          text="Rejoindre l'aventure"
          onClick={handleJoin}
          data={{ email }}
        />
      </article>
      <span className={styles.or}>ou</span>
      <article className={styles.contact_wrapper}>
        <Button
          secondary
          text='Nous contacter'
          icon={'/emotes/🌍.png'}
          icon_before
          onClick={handleContact}
        />
      </article>
    </form>
  )
}