import style from "./style.module.scss";

interface ITextFieldProps {
  type?: string;
  placeholder: string;
  className?: string;
}

const TextField = (props: ITextFieldProps) => {
  const { placeholder, className } = props;
  const type = props.type ? props.type : "text";
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={style.field + (className ? ` ${className}` : "")}
    />
  );
};

export default TextField;
