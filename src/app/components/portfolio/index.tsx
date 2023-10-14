import Container from "../container";
import Section from "../section";
import TagH2 from "../tags/h2";
import TitleAnimate from "../titleAnimate";
import style from "./style.module.scss";

const mockCertificate = [
  { id: 1, image: "certificate_2017-01-26.jpg", name: "certificate 2017" },
  { id: 2, image: "certificate_2021-09-21.jpg", name: "certificate 2021" },
];
const mockPortfolio = [
  { id: 1, image: "portfolio-1.PNG", name: "portfolio 1" },
  { id: 2, image: "portfolio-2.PNG", name: "portfolio 2" },
  { id: 3, image: "portfolio-3.PNG", name: "portfolio 3" },
  { id: 4, image: "portfolio-4.PNG", name: "portfolio 4" },
  { id: 5, image: "portfolio-5.PNG", name: "portfolio 5" },
];

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container>
        <TagH2>
          <TitleAnimate>Моё портфолио</TitleAnimate>
        </TagH2>
        <br />
        <div className={style.list}>
          {mockPortfolio.map(({ id, image, name }) => (
            <div key={id} className={style.item}>
              {/* <a target="_blank" href="/"></a> */}
              <div className={style.info}>{name}</div>
              <div className={style.image}>
                <img src={`./image/${image}`} alt={name} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
