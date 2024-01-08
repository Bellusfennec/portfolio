import useModal from '../../../../hooks/useModal'
import Card from '../../../common/card'
import Image from '../../../common/image'
import ModalClose from '../../../common/modal/ModalClose'
import ModalHeader from '../../../common/modal/ModalHeader'
import ModalWindow from '../../../common/modal/ModalWindow'
import TitleH3 from '../../../common/text/titleH3'
import style from './style.module.scss'

interface IProps {
  data: IDocument
}

interface IDocument {
  id: string
  name: string
  image: string
  text: string
}

const DocumentModal = (props: IProps) => {
  const { data } = props
  const { isOpen, handlerToggle } = useModal()

  return (
    <>
      <Card onClick={handlerToggle} name={data.name} image={data.image} />
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle}>
        <ModalHeader>
          <TitleH3>{data.name}</TitleH3>
          <ModalClose onClick={handlerToggle} />
        </ModalHeader>
        <div className={style.imageContainer}>
          <div className={style.image}>
            <Image image={data.image} alt={data.name} />
          </div>
        </div>
        <p>{data.text}</p>
      </ModalWindow>
    </>
  )
}

export default DocumentModal
