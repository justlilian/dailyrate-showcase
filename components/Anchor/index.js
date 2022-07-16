import Link from 'next/link'

export default function Anchor ( props ) {

  if(props.href && props.href.startsWith('/')) {
    return (
      <Link {...props} >
        <a >
        { props.children }
        </a>
      </Link>
    )
  } else {
    return (
      <a {...props} target='_blank' rel='noopener noreferrer'>
        { props.children }
      </a>
    )
  }
}