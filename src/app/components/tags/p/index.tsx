import style from "./style.module.scss";

interface ITagPProps {
  children: React.ReactNode;
  className?: string;
}

const TagP = (props: ITagPProps) => {
  const { children, className } = props;

  return (
    <p className={style.p + (className ? ` ${className}` : "")}>{children}</p>
  );
};

export default TagP;
