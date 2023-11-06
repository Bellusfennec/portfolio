import style from "./style.module.scss";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = (props: IContainerProps) => {
  const { children, className } = props;

  return (
    <div className={style.container + (className ? ` ${className}` : "")}>
      {children}
    </div>
  );
};

export default Container;
