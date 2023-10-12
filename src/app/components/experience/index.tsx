import Container from "../container";
import Section from "../section";
import TagH2 from "../tags/h2";
import TagP from "../tags/p";
import TitleAnimate from "../titleAnimate";
import style from "./style.module.scss";

const Experience = () => {
  return (
    <Section id="experience">
      <Container className={style.experienceSkill}>
        <div className={style.experience}>
          <TagH2>
            <TitleAnimate>Опыт</TitleAnimate>
            <br />
            <TitleAnimate>и Навыки</TitleAnimate>
          </TagH2>
          <br />
          <br />
          <TagP>
            Начал свой путь в качестве веб разработчика более 7 лет назад, я
            делал сайты для друзей и знакомых, вносил изминения на сайте крупной
            компании и параллельно много самостоятельно обучался.
            <br />
            <br />Я создаю адаптивные веб-сайты, быстрые, простые в
            использовании и созданы с учетом лучших практик. Основная область
            моих знаний - вёрстка, использую HTML, CSS, JS, создание небольших и
            средних веб-приложений.
          </TagP>
        </div>
        <div className={style.skill}>
          <br />
          <div className={style.item}>
            <div className={style.name}>HTML</div>
            <div className={style.bar}>
              <div
                className={style.barLong}
                style={{ width: "90%", background: "#03dac6" }}
              ></div>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.name}>CSS</div>
            <div className={style.bar}>
              <div
                className={style.barLong}
                style={{ width: "90%", background: "#ff0266" }}
              ></div>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.name}>JavaScript</div>
            <div className={style.bar}>
              <div
                className={style.barLong}
                style={{ width: "50%", background: "#c402ff" }}
              ></div>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.name}>Node JS</div>
            <div className={style.bar}>
              <div
                className={style.barLong}
                style={{ width: "20%", background: "#ff0266" }}
              ></div>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.name}>MySQL</div>
            <div className={style.bar}>
              <div
                className={style.barLong}
                style={{ width: "20%", background: "#03dac6" }}
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
