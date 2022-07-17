import { IoIosClose } from 'react-icons/io'
import { useMemo } from 'react'

import usePopup from './store'
import styles from './css/Popup.module.css'

export default function Popup ( ) {
  const { stack, close } = usePopup()

  const active = useMemo(() => stack.length > 0, [stack]);

  return <div
    className={`${styles.wrapper} ${active ? styles.active : ''}`}
    onClick={close}
  >
    {
      active && 
      <section className={styles.popup} >
        <div className={styles.close} onClick={close}>
          <IoIosClose size={20} />
        </div>
        <article className={styles.content}>
          {/* { stack[0].content } */}
        </article>
      </section>
    }
  </div>
}

