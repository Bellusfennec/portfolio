import Container from "../container";
import { BsSuitHeartFill } from "react-icons/bs";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container className={style.note}>
        С любовью
        <span className={style.icon}>
          <BsSuitHeartFill />
        </span>
        <a
          href="https://github.com/Bellusfennec"
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          Нияз
        </a>
        &copy; 2021
      </Container>
    </footer>
  );
};

export default Footer;
