import style from './style.module.scss'

interface IFormTagProps {
  children: React.ReactNode
}

const FormTag = (props: IFormTagProps) => {
  const { children } = props

  return <div className={style.tag}>{children}</div>
}

export default FormTag
