import { useMemo } from 'react'
import Image from 'next/image'
import splitbee from '@splitbee/web'

import styles from './css/Button.module.css'

export default function Button( props ) {

  const type = useMemo(() => {
    let res = styles.primary;
    if(props.secondary) {
      res = styles.secondary;
    }
    if(props.secondary) {
      res = styles.secondary;
    }
    if(props.dark) {
      res = styles.dark;
    }
    return res;
  }, [props.primary, props.secondary])

  const handleClick = e => {
    e.stopPropagation()
    if(props.text) {
      splitbee.track( props.text, props.data || {})
    }
    if(props.onClick) {
      props.onClick()
    }
  }

  const Icon = () => {
    return <>
      { props.react_icon &&
        <props.react_icon size={13} />
      }
      { props.icon &&
        <Image src={props.icon} height={18} width={18} />
      }
    </>
  }

  return (
    <a
      className={`
        ${styles.button}
        ${type} ${ props.icon || props.react_icon ? styles.large : ''}
        ${ props.shape === 'oval' ? styles.oval : '' }
        ${ props.icon_before ? styles.spaced : ''}
      `}
      onClick={handleClick}>
        { props.icon_before &&
          <Icon />
        }
        { props.text }
        {
          !props.icon_before &&
          <Icon />
        }
        
    </a>
  )
}