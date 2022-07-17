import { IoIosClose } from 'react-icons/io'
import { useMemo, useEffect } from 'react'

import scroll from '../../utils/scroll'
import usePopup from './store'
import styles from './css/Popup.module.css'

export default function Popup ( ) {
  const stack = usePopup(state => state.stack)
  const close = usePopup(state => state.close)

  const active = useMemo(() => stack.length > 0, [stack]);

  useEffect(() => {
    if(active) {
      scroll.disable();
    } else {
      scroll.enable();
    }
    return scroll.enable;
  }, [active])

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
          { stack[0] }
        </article>
      </section>
    }
  </div>
}

