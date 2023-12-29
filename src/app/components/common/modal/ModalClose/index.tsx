import style from './style.module.scss'

interface IProps {
  children?: React.ReactNode
  onClick: () => void
}

const ModalClose = ({ children, onClick }: IProps) => {
  return (
    <button className={style.close} onClick={onClick}>
      {children || 'X'}
    </button>
  )
}

export default ModalClose
