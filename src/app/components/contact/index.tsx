import Button from "../button";
import Container from "../container";
import TextField from "../field/text";
import TextareaField from "../field/textarea";
import Section from "../section";
import TagForm from "../tags/form";
import TagH2 from "../tags/h2";
import TagP from "../tags/p";
import TitleAnimate from "../titleAnimate";
import style from "./style.module.scss";

const Contact = () => {
  return (
    <Section>
      <Container>
        <section id="page-4" className="section__full section__contact">
          <div className="column">
            <TagH2>
              <TitleAnimate>Контакты</TitleAnimate>
            </TagH2>
            <br />
            <TagP className="tags">
              Если у вас есть предложение, напишите мне.
            </TagP>
            <br />
            <div className={style.contactForm}>
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
                  <div className={style.row + " " + style.footer}>
                    <Button>Отправить</Button>
                  </div>
                </form>
              </TagForm>
            </div>
          </div>
        </section>
      </Container>
    </Section>
  );
};

export default Contact;
