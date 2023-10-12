import style from "./style.module.scss";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = (props: ISectionProps) => {
  const { children, className } = props;
  const id = props.id ? props.id : "";

  return (
    <section
      id={id}
      className={style.section + (className ? ` ${className}` : "")}
    >
      {children}
    </section>
  );
};

export default Section;
