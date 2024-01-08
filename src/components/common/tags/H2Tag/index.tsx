import style from "./style.module.scss";

interface IH2TagProps {
  children: React.ReactNode;
}

const H2Tag = (props: IH2TagProps) => {
  const { children } = props;

  return <h2 className={style.h2}>{children}</h2>;
};

export default H2Tag;
