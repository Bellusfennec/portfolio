import { useSelector } from 'react-redux'
import Container from '../container'
import Section from '../section'
import TagH2 from '../tags/h2'
import TagP from '../tags/p'
import TitleAnimate from '../titleAnimate'
import style from './style.module.scss'
import { getCurrentUser } from '../../store/user.slicer'
import { motion } from 'framer-motion'

interface ISkills {
  id: number
  name: string
  percent: number
  color: string
}

const Experience = () => {
  const currentUser = useSelector(getCurrentUser())
  const { skills } = currentUser

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5 },
    }),
  }

  return (
    <Section id="experience">
      <Container className={style.experienceSkill}>
        <div className={style.experience}>
          <TagH2>
            <TitleAnimate>Опыт</TitleAnimate>
            <br />
            <TitleAnimate>и Навыки</TitleAnimate>
          </TagH2>
          <br />
          <br />
          <TagP>
            Начал свой путь в качестве веб разработчика более 3 лет назад, делая сайты для друзей и
            знакомых, паралельно много совершенствовался.
            <br />
            <br />
            Сейчас создаю адаптивные веб приложения, быстрые, простые в использовании и с учетом
            лучших практик. Основная область моих знаний - SPA (single page application), использую
            ReactJS, NodeJS, для создание небольших и средних веб-приложений.
          </TagP>
        </div>
        <div className={style.skill}>
          <br />
          <motion.div initial="hidden" animate="visible" variants={variants}>
            {skills?.map(({ id, name, percent, color }: ISkills, i: number) => (
              <motion.div variants={variants} custom={i} key={id} className={style.item}>
                <div className={style.name}>{name}</div>
                <div className={style.bar}>
                  <div
                    className={style.barLong}
                    style={{ width: `${percent}%`, background: color }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default Experience
