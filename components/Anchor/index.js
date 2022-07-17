import Link from 'next/link'
import splitbee from '@splitbee/web'

export default function Anchor ( props ) {

  const handleClick = () => {
    splitbee.track('Follow link', { url: props.href })
  }

  if(props.href && props.href.startsWith('/')) {
    return (
      <Link {...props} onClick={handleClick}>
        <a >
        { props.children }
        </a>
      </Link>
    )
  } else {
    return (
      <a {...props} target='_blank' rel='noopener noreferrer' onClick={handleClick}>
        { props.children }
      </a>
    )
  }
}