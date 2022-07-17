/* This file defines popup templates that can be opened from their name */
import Image from 'next/image'

import JoinUs from '../JoinUs'
import styles from './css/Popup.module.css'

function JoinForm () {
  return <>
    <div className={styles.imageWrapper}>
      <Image src='/gifs/typing.gif' layout='fill' />
    </div>
    <h1>Rejoignez-nous !</h1>
    <JoinUs />
  </>
}

export default {
  'join-us': JoinForm
}