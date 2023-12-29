import style from './style.module.scss'

interface IProps {
  children: React.ReactNode
}

const ModalHeader = ({ children }: IProps) => {
  return <div className={style.header}>{children}</div>
}

export default ModalHeader
