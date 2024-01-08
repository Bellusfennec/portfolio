interface IModalButtonProps {
  onClick?: (event: any) => void;
  children: React.ReactNode;
  className?: string;
}

const ModalButton = (props: IModalButtonProps) => {
  const { onClick, children, className } = props;
  return (
    <button
      onClick={onClick}
      className={
        "flex justify-center gap-[8px] py-[12px] px-[20px] rounded-[8px] border border-grey-#4 text-blue-#4 font-semibold" +
        (className ? " " + className : "")
      }
    >
      {children}
    </button>
  );
};

export default ModalButton;
