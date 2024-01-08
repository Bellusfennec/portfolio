import { motion } from 'framer-motion'

const MenuLinks = () => {
  const items = [
    { id: 'home', name: 'Главная' },
    { id: 'experience', name: 'Мой опыт' },
    { id: 'portfolio', name: 'Портфолио' },
    { id: 'document', name: 'Документы' },
    { id: 'contact', name: 'Контакты' },
  ]
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  }

  return (
    <motion.div className="links" variants={variants}>
      {items.map(({ id, name }) => (
        <motion.a
          key={id}
          href={`#${id}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {name}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default MenuLinks
