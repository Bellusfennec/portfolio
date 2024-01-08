import { getRandomNumberId } from "@/utils/randomId";
import { useEffect, useMemo, useState } from "react";

interface useClickOutCloseProps {
  onClickOut: (arg0?: boolean) => void;
  isOpen: boolean;
}

const useClickOutClose = (props: useClickOutCloseProps) => {
  const { onClickOut, isOpen } = props;
  const id = useMemo(() => getRandomNumberId(), []);
  const classNameContainer = `no-close-container-${id}`;

  const handlerClickOutSide = ({ target }: any) => {
    if (target?.closest(`.${classNameContainer}`) === null) onClickOut?.();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handlerClickOutSide);
      return () => document.removeEventListener("click", handlerClickOutSide);
    }
  }, [isOpen]);

  return { classNameContainer };
};

export default useClickOutClose;
