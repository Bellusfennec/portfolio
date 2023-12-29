import { useState } from 'react'
import MenuLinks from './menuLinks'
import './style.scss'
import ToggleButton from './toggleButton'
import { motion } from 'framer-motion'
// import ToggleTheme from '../../common/toggleTheme'

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }
  return (
    <motion.div className="sidebar" animate={isOpen ? 'open' : 'closed'}>
      <motion.div className="bg myClass" variants={variants}>
        <MenuLinks />
        <div className="theme">{/* <ToggleTheme /> */}</div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
