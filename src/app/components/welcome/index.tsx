import React from 'react'
import Button from '../button'
import Container from '../container'
import Section from '../section'
import TagH1 from '../tags/h1'
import TagP from '../tags/p'
import style from './style.module.scss'
import { motion } from 'framer-motion'

interface IWelcomeProps {
  observerRef: React.MutableRefObject<null>
}

const Welcome = (props: IWelcomeProps) => {
  const { observerRef } = props

  return (
    <div ref={observerRef}>
      <Section>
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
    </div>
  )
}

export default Welcome
