import { PartyIcon } from "@assets/svgs";
import { container, textStyle, toastStyle } from "./UploadToast.style";
import { useEffect, useState } from "react";

const UploadToast: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let fadeInTimer: NodeJS.Timeout | null = null;
    let fadeOutTimer: NodeJS.Timeout | null = null;

    const fadeIn = () => {
      fadeInTimer = setInterval(() => {
        setOpacity((prevOpacity) => {
          if (prevOpacity < 100) {
            return prevOpacity + 2;
          } else {
            clearInterval(fadeInTimer!);
            setTimeout(() => fadeOut(), 1000);
            return prevOpacity;
          }
        });
      }, 40);
    };

    const fadeOut = () => {
      fadeOutTimer = setInterval(() => {
        setOpacity((prevOpacity) => {
          if (prevOpacity > 0) {
            return prevOpacity - 2;
          } else {
            clearInterval(fadeOutTimer!);
            return prevOpacity;
          }
        });
      }, 40);
    };

    fadeIn();

    return () => {
      if (fadeInTimer) clearInterval(fadeInTimer);
      if (fadeOutTimer) clearInterval(fadeOutTimer);
    };
  }, []);

  return (
    <div css={container(opacity)}>
      <div css={toastStyle}>
        <PartyIcon />
        <div css={textStyle}>업로드를 완료했어요</div>
      </div>
    </div>
  );
};

export default UploadToast;
