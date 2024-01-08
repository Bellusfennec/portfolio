import { useSelector } from 'react-redux'
import { getCurrentUser } from '../../../store/user.slicer'
import Container from '../../common/container'
import Section from '../../common/section'
import TagH2 from '../../common/tags/h2'
import TitleAnimate from '../../common/titleAnimate'
import DocumentModal from '../modal/DocumentModal'
import style from './style.module.scss'

interface IProps {
  id?: string
}
interface IDocument {
  id: string
  name: string
  image: string
  text: string
}

const Document = (props: IProps) => {
  const { id } = props
  const { document } = useSelector(getCurrentUser())
  return (
    <Section id={id} className={style.container}>
      <Container>
        <TagH2>
          <TitleAnimate>Мои документы</TitleAnimate>
        </TagH2>
        <br />
        {document && (
          <div className={style.list}>
            {document.map((item: IDocument) => (
              <DocumentModal key={item.id} data={item} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}

export default Document
