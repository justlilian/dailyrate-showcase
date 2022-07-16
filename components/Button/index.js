import styles from './css/Button.module.css'

export default function Button( props ) {

  const type = useMemo(() => {
    let res = styles.primary;
    if(props.secondary) {
      res = styles.secondary;
    }
    return res;
  }, [props.primary, props.secondary])

  return (
    <a className={`${styles.wrapper} ${type}`}>
      { props.children }
    </a>
  )
}