interface IBigButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const BigButton = (props: IBigButtonProps) => {
  const { onClick, children } = props;
  return (
    <button onClick={onClick} className="px-[20px] py-[12px] bg-blue-#1 text-white rounded-[8px] font-semibold">
      {children}
    </button>
  );
};

export default BigButton;
