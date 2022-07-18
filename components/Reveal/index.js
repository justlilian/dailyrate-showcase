import { motion } from 'framer-motion'

export default function Reveal( props ) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: .2, duration: .6, bounce: .4 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      { props.children }
    </motion.div>
  )
}