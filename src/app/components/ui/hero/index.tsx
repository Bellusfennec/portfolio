import ButtonLink from '../../common/buttonLink'
import Container from '../../common/container'
import Section from '../../common/section'
import TagH1 from '../../common/tags/h1'
import TagP from '../../common/tags/p'
import style from './style.module.scss'

interface IProps {
  onIntersected: (arg0: boolean) => void
}

const Hero = ({ onIntersected }: IProps) => {
  return (
    <Section id="home" onIntersected={onIntersected} className={style.hero}>
      <Container>
        <TagH1>
          Привет,
          <br /> Я <span className={style.highlight}>Нияз</span>, <br />
          веб разработчик
        </TagH1>
        <TagP className={style.p}>Front End Developer</TagP>
        <br />
        <ButtonLink to={'#contact'}>Напиши мне!</ButtonLink>
      </Container>
    </Section>
  )
}

export default Hero
