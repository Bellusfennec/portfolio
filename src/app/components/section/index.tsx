import { MutableRefObject } from 'react'
import style from './style.module.scss'

interface ISectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  ref?: MutableRefObject<null>
}

const Section = (props: ISectionProps) => {
  const { children, className, ref } = props
  const id = props.id ? props.id : ''

  return (
    <section ref={ref} id={id} className={style.section + (className ? ` ${className}` : '')}>
      {children}
    </section>
  )
}

export default Section
