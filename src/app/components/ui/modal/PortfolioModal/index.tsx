import useModal from '../../../../hooks/useModal'
import ButtonLink from '../../../common/buttonLink'
import Card from '../../../common/card'
import Image from '../../../common/image'
import ModalClose from '../../../common/modal/ModalClose'
import ModalHeader from '../../../common/modal/ModalHeader'
import ModalWindow from '../../../common/modal/ModalWindow'
import TitleH3 from '../../../common/text/titleH3'
import style from './style.module.scss'

interface IProps {
  data: IPortfolio
}

interface IPortfolio {
  id: string
  name: string
  image: string
  text: string
  codeLink: string
  demoLink: string
}

const PortfolioModal = (props: IProps) => {
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
        <div className={style.footer}>
          <ButtonLink to={`${data.codeLink}`} target="_blank">
            Исходники
          </ButtonLink>
          <ButtonLink to={`${data.demoLink}`} target="_blank">
            Демо
          </ButtonLink>
        </div>
      </ModalWindow>
    </>
  )
}

export default PortfolioModal
