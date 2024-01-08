import style from './style.module.scss'

interface IPTagProps {
  children: React.ReactNode
  className?: string
}

const PTag = (props: IPTagProps) => {
  const { children, className } = props

  return <p className={style.p + (className ? ` ${className}` : '')}>{children}</p>
}

export default PTag
