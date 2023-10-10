import style from "./style.module.scss";

interface IButtonProps {
  children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const { children } = props;

  return <h1 className={style.buttonFill}>{children}</h1>;
};

export default Button;
