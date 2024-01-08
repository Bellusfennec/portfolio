import useClickOutClose from "@/hooks/useClickOutClose";
import { useDisableBodyScroll } from "@/hooks/useDisableBodyScroll";
import useResize from "@/hooks/useResize";
import { useEffect, useRef, useState } from "react";

interface IModalWindowProps {
  children: React.ReactNode;
  onClickOut: () => void;
  className?: string;
  width?: number;
  isOpen: boolean;
}

const ModalWindow = (props: IModalWindowProps) => {
  const { children, isOpen, onClickOut, className, width } = props;
  const { classNameContainer } = useClickOutClose({ isOpen, onClickOut });
  const { widthScreen } = useResize();
  useDisableBodyScroll({ isOpen });

  const [size, setSize] = useState({
    width: width ? width : 745,
    value: width ? `${width}px` : "745px"
  });

  useEffect(() => {
    if (widthScreen <= size.width && size.value !== "auto") {
      setSize(state => ({ ...state, value: "auto" }));
    }
  }, [widthScreen]);

  return (
    isOpen && (
      <div
        className={
          "animate-background-modal fixed inset-0 z-[9998] overflow-y-auto backdrop-blur-md bg-[#344054ab]" +
          (className ? " " + className : "")
        }
      >
        <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" + ` ${classNameContainer}`}>
          <div
            className="opacity-0 animate-open-modal relative dark:shadow-sm dark:shadow-graySecond"
            style={{ width: size.value }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default ModalWindow;
