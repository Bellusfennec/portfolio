interface IModalMiniButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const ModalMiniButton = (props: IModalMiniButtonProps) => {
  const { onClick, children, className } = props;
  return (
    <button
      onClick={onClick}
      className={
        "flex justify-center gap-[8px] py-[10px] px-[20px] rounded-[8px] border border-grey-#4 text-blue-#4 font-medium text-[14px]" +
        (className ? " " + className : "")
      }
    >
      {children}
    </button>
  );
};

export default ModalMiniButton;
