import Container from '@/components/common/Container'
import Section from '@/components/common/Section'
import LinkButton from '@/components/common/buttons/LinkButton'
import H1Tag from '@/components/common/tags/H1Tag'
import PTag from '@/components/common/tags/PTag'
import style from './style.module.scss'
import Theme from '../../Theme'

const HeroSection = () => {
  console.log('HeroSection')

  return (
    <Section id="home" className={style.hero}>
      <Container>
        <H1Tag>
          Привет,
          <br /> Я <span className={style.highlight}>Нияз</span>, <br />
          веб разработчик
        </H1Tag>
        <PTag className={style.p}>Front End Developer</PTag>
        <br />
        <LinkButton to={'#contact'}>Напиши мне!</LinkButton>
        <Theme />
      </Container>
    </Section>
  )
}

export default HeroSection
