import style from "./style.module.scss";

interface IButtonProps {
  children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const { children } = props;

  return <button className={style.button}>{children}</button>;
};

export default Button;
