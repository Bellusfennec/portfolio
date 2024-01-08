import Image from '../image'
import style from './style.module.scss'

interface ICardProps {
  className?: string
  onClick: () => void
  name: string
  image: string
}

const Card = (props: ICardProps) => {
  const { className, onClick, name, image } = props

  return (
    <div onClick={onClick} className={style.card + (className ? ` ${className}` : '')}>
      <div className={style.info}>{name}</div>
      <Image image={image} alt={name} />
    </div>
  )
}

export default Card
