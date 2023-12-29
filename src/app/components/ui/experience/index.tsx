import { useSelector } from 'react-redux'
import Container from '../../common/container'
import Section from '../../common/section'
import TagH2 from '../../common/tags/h2'
import TagP from '../../common/tags/p'
import TitleAnimate from '../../common/titleAnimate'
import style from './style.module.scss'
import { getCurrentUser } from '../../../store/user.slicer'
import { motion } from 'framer-motion'

interface IProps {
  id?: string
}
interface ISkills {
  id: number
  name: string
  percent: number
  color: string
}

const Experience = (props: IProps) => {
  const { id } = props
  const { skills } = useSelector(getCurrentUser())

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5 },
    }),
  }

  return (
    <Section className={style.container} id={id}>
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
            Начал свой путь в качестве веб разработчика более 3 лет назад, делал сайты для друзей и
            знакомых.
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
