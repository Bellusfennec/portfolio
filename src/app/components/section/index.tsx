import style from "./style.module.scss";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = (props: ISectionProps) => {
  const { children, className } = props;

  return (
    <section className={style.section + (className ? ` ${className}` : "")}>
      {children}
    </section>
  );
};

export default Section;
