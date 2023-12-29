import style from './style.module.scss'

interface IPropsButtonLink {
  children: React.ReactNode
  to: string
  target?: string
}

const ButtonLink = (props: IPropsButtonLink) => {
  const { children, to, ...rest } = props

  return (
    <a href={to} className={style.button} {...rest}>
      {children}
    </a>
  )
}

export default ButtonLink
