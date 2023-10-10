import style from "./style.module.scss";

interface ITagH1Props {
  children: React.ReactNode;
}

const TagH1 = (props: ITagH1Props) => {
  const { children } = props;

  return <h1 className={style.h1}>{children}</h1>;
};

export default TagH1;
