import React from 'react'
import Button from '../button'
import Container from '../container'
import Section from '../section'
import TagH1 from '../tags/h1'
import TagP from '../tags/p'
import style from './style.module.scss'

const Welcome = ({ ...rest }) => {
  return (
    <Section id="home" {...rest}>
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

export default Welcome
