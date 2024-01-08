import Container from '../../common/container'
import Section from '../../common/section'
import TagH2 from '../../common/tags/h2'
import TagP from '../../common/tags/p'
import TitleAnimate from '../../common/titleAnimate'
import style from './style.module.scss'

interface IProps {
  id?: string
}

const Contact = (props: IProps) => {
  const { id } = props
  return (
    <Section id={id} className={style.container}>
      <Container>
        <TagH2>
          <TitleAnimate>Контакты</TitleAnimate>
        </TagH2>
        <br />
        <TagP className="tags">Если у вас есть предложение, напишите мне.</TagP>
        <br />
        {/* <div className={style.contactForm}>
          <TagForm>
            <form action="" className={style.form}>
              <div className={style.row}>
                <TextField type="text" placeholder="Имя" />
                <TextField type="email" placeholder="Email" />
              </div>
              <div className={style.row}>
                <TextField type="text" placeholder="Тема" />
              </div>
              <div className={style.row}>
                <TextareaField placeholder="Сообщение"></TextareaField>
              </div>
              <div className={style.row + ' ' + style.footer}>
                <Button>Отправить</Button>
              </div>
            </form>
          </TagForm>
        </div> */}
      </Container>
    </Section>
  )
}

export default Contact
