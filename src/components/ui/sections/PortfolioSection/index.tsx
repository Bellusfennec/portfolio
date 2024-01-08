import { useSelector } from 'react-redux'
import { getCurrentUser } from '../../../store/user.slicer'
import Container from '../../common/container'
import Section from '../../common/section'
import TagH2 from '../../common/tags/h2'
import TitleAnimate from '../../common/titleAnimate'
import PortfolioModal from '../modal/PortfolioModal'
import style from './style.module.scss'

interface IProps {
  id?: string
}
interface IPortfolio {
  id: string
  name: string
  image: string
  text: string
  codeLink: string
  demoLink: string
}

const Portfolio = (props: IProps) => {
  const { id } = props
  const { portfolio } = useSelector(getCurrentUser())

  return (
    <Section id={id} className={style.container}>
      <Container>
        <TagH2>
          <TitleAnimate>Моё портфолио</TitleAnimate>
        </TagH2>
        <br />
        {portfolio?.length && (
          <div className={style.list}>
            {portfolio.map((item: IPortfolio) => (
              <PortfolioModal key={item.id} data={item} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}

export default Portfolio
