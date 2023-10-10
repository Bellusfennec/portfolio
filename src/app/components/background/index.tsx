import style from "./style.module.scss";

interface IBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const Background = (props: IBackgroundProps) => {
  const { children, className } = props;

  return (
    <Background
      className={style.background + (className ? ` ${className}` : "")}
    >
      {children}
    </Background>
  );
};

export default Background;
