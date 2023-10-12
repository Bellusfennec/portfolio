import Container from "../container";
import style from "./style.module.scss";

interface INavProps {
  isIntersecting?: boolean;
}

const Nav = (props: INavProps) => {
  const { isIntersecting } = props;

  return (
    <nav className={style.nav + (!isIntersecting ? ` ${style.visible}` : "")}>
      <Container>
        <div className={style.menu}>
          <div className="menu-container">
            <div className="bars">
              <span></span>
              <span></span>
              <span></span>
              <div className="other-bar"></div>
            </div>
          </div>
          <a href="#portfolio" className={style.link}>
            Портфолио
          </a>
          <a href="#experience" className={style.link}>
            О себе и Навыки
          </a>
          {/* <a href="#page-3"  className={style.link}>Обучение</a> */}
          <a href="#contact" className={style.link}>
            Контакты
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
