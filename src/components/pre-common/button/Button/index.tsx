interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  const { onClick, children } = props;
  return (
    <button
      onClick={onClick}
      className="flex justify-center gap-[8px] py-[8px] px-[14px] rounded-[8px] border border-grey-#4 text-blue-#4"
    >
      {children}
    </button>
  );
};

export default Button;
