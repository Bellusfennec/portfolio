import { useRef } from 'react'
import style from './style.module.scss'

interface IProps {
  children: React.ReactNode
  onClickOut?: (arg0?: boolean) => void
  isOpen: boolean
}

const ModalWindow = (props: IProps) => {
  const { children, onClickOut, isOpen } = props
  const backgroundRef = useRef(null)

  const handlerClickBackground = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === backgroundRef.current) onClickOut?.()
  }

  return (
    isOpen && (
      <div ref={backgroundRef} onClick={handlerClickBackground} className={style.background}>
        <div className={style.modalContainer}>
          <div className={style.modal}>{children}</div>
        </div>
      </div>
    )
  )
}

export default ModalWindow
