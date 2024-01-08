import { useState, useEffect } from "react";

const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
const SCREEN_XL = 1200;
const SCREEN_XXL = 1400;

const useResize = () => {
  const [widthScreen, setWidthScreen] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  const handleResize = (event: any) => setWidthScreen(event.target.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    widthScreen,
    isScreenSm: widthScreen >= SCREEN_SM,
    isScreenMd: widthScreen >= SCREEN_MD,
    isScreenLg: widthScreen >= SCREEN_LG,
    isScreenXl: widthScreen >= SCREEN_XL,
    isScreenXxl: widthScreen >= SCREEN_XXL
  };
};
export default useResize;
