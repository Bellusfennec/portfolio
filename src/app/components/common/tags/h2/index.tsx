import style from "./style.module.scss";

interface ITagH2Props {
  children: React.ReactNode;
}

const TagH2 = (props: ITagH2Props) => {
  const { children } = props;

  return <h2 className={style.h2}>{children}</h2>;
};

export default TagH2;
