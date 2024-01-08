import style from './style.module.scss'

interface ILinkButtonProps {
  children: React.ReactNode
  to: string
  target?: string
}

const LinkButton = (props: ILinkButtonProps) => {
  const { children, to, ...rest } = props

  return (
    <a href={to} className={style.button} {...rest}>
      {children}
    </a>
  )
}

export default LinkButton
