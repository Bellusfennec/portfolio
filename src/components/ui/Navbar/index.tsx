import Container from '../../common/container'
import style from './style.module.scss'
import { motion } from 'framer-motion'

interface INavProps {
  isIntersecting?: boolean
}

const Nav = (props: INavProps) => {
  const { isIntersecting } = props

  return (
    <nav className={style.nav + (!isIntersecting ? ` ${style.visible}` : '')}>
      <Container>
        <div className={style.menu}>
          <div className="menu-container">
            <div className="bars">
              <span></span>
              <span></span>
              <span></span>
              <div className="other-bar"></div>
            </div>
          </div>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="#portfolio"
            className={style.link}
          >
            Портфолио
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="#experience"
            className={style.link}
          >
            О себе и Навыки
          </motion.a>
          {/* <a href="#page-3"  className={style.link}>Обучение</a> */}
          {/* <a href="#contact" className={style.link}>
            Контакты
          </a> */}
        </div>
      </Container>
    </nav>
  )
}

export default Nav
