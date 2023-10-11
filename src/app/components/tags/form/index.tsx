import style from "./style.module.scss";

interface ITagFormProps {
  children: React.ReactNode;
}

const TagForm = (props: ITagFormProps) => {
  const { children } = props;

  return <div className={style.tag}>{children}</div>;
};

export default TagForm;
