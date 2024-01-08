import style from './style.module.scss'

interface IProps {
  image?: string
  alt?: string
}

const Image = (props: IProps) => {
  const { image, alt } = props

  return image && <img className={style.image} src={`./image/${image}`} alt={alt} />
}

export default Image
