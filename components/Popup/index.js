import { IoIosClose } from 'react-icons/io'
import { useMemo } from 'react'

import usePopup from './store'
import styles from './css/Popup.module.css'

export default function Popup ( ) {
  const stack = usePopup(state => state.stack)
  const close = usePopup(state => state.close)

  const active = useMemo(() => stack.length > 0, [stack]);

  const handleClick = (e) => {
    e.stopPropagation()
  }

  const handleClose = (e) => {
    e.stopPropagation()
    close()
  }

  return <div
    className={`${styles.wrapper} ${active ? styles.active : ''}`}
    onClick={close}
  >
    <section className={styles.popup} onClick={handleClick}>
        <div className={styles.close} onClick={handleClose}>
          <IoIosClose size={25} />
        </div>
        <article className={styles.content}>
          { stack.length > 0 && stack[0] }
        </article>
      </section>
  </div>
}

