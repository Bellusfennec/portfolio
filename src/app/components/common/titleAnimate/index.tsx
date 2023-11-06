import React, {
  Children,
  DetailedReactHTMLElement,
  HTMLAttributes,
  useRef,
} from "react";
import style from "./style.module.scss";

interface ITitleAnimateProps {
  children: any;
}

const TitleAnimate = (props: ITitleAnimateProps) => {
  const { children } = props;
  const childRef =
    useRef<
      DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>[]
    >();

  Children.map(children, (child): any => {
    if (child && typeof children === "string") {
      childRef.current = [...child].map((char: any, i) => {
        if (char === " ") return char;
        return React.createElement(
          "span",
          { className: style.span, key: i },
          char
        );
      });
    }
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child);
  });

  return <>{childRef.current}</>;
};

export default TitleAnimate;
