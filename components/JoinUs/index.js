import Button from '../Button'

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
        <Button primary text="Rejoindre l'aventure" />
      </article>
      
    </form>
  )
}