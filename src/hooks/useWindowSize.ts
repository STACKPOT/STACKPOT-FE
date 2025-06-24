import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = windowSize;

  const modalWidth =
    width >= 1920
      ? 760
      : width >= 1440
        ? 560
        : 400;

  const modalHeight = height * 0.6;

  return {
    ...windowSize,
    modalWidth: modalWidth,
    modalHeight: modalHeight
  };
};

export default useWindowSize;