import style from "./style.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";

interface IButtonScrollUpProps {
  isIntersecting?: boolean;
}

const ButtonScrollUp = (props: IButtonScrollUpProps) => {
  const { isIntersecting } = props;

  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handlerScrollUp}
      className={style.button + (!isIntersecting ? ` ${style.visible}` : "")}
    >
      <AiOutlineArrowUp />
    </button>
  );
};

export default ButtonScrollUp;
