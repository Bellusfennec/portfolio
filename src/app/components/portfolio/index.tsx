import Container from "../container";
import Section from "../section";
import TagH2 from "../tags/h2";
import TitleAnimate from "../titleAnimate";
import style from "./style.module.scss";

const Portfolio = () => {
  return (
    <Section>
      <Container>
        <TagH2>
          <TitleAnimate>Моё портфолио</TitleAnimate>
        </TagH2>
        <div className={style.portfolio}>
          <div className={style.portfolio_item}>
            <div className={style.portfolio_gallery}>
              <a target="_blank" href="/">
                <img src="" alt="" />
              </a>
            </div>
          </div>
          <div className={style.portfolio_item}>
            <div className={style.portfolio_gallery}>
              <a target="_blank" href="/">
                <img src="" alt="" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
