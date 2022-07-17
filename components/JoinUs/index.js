import Button from '../Button'

import styles from './css/JoinUs.module.css'

export default function JoinUs( props ) {

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
        />
        <Button primary text="Rejoindre l'aventure" />
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