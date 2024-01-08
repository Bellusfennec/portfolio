import style from './style.module.scss'

interface IH1TagProps {
  children: React.ReactNode
}

const H1Tag = (props: IH1TagProps) => {
  const { children } = props

  return <h1 className={style.h1}>{children}</h1>
}

export default H1Tag
