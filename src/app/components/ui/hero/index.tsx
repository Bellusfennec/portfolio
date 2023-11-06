import React from 'react'
import Button from '../../common/button'
import Container from '../../common/container'
import style from './style.module.scss'
import TagH1 from '../../common/tags/h1'
import TagP from '../../common/tags/p'
import Section from '../../common/section'

const Hero = ({ ...rest }) => {
  return (
    <Section id="home" {...rest} className={style.hero}>
      <Container>
        <TagH1>
          Привет,
          <br /> Я <span className={style.highlight}>Нияз</span>, <br />
          веб разработчик
        </TagH1>
        <TagP className={style.p}>Front End Developer</TagP>
        <br />
        <Button>Напиши мне!</Button>
      </Container>
    </Section>
  )
}

export default Hero
