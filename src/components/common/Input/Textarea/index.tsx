import style from "./style.module.scss";

interface ITextareaFieldProps {
  placeholder: string;
  className?: string;
}

const TextareaField = (props: ITextareaFieldProps) => {
  const { placeholder, className } = props;
  return (
    <textarea
      cols={30}
      rows={10}
      placeholder={placeholder}
      className={style.field + (className ? ` ${className}` : "")}
    />
  );
};

export default TextareaField;
