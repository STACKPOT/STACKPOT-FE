import { PartyIcon } from "@assets/svgs";
import { container, textStyle, toastStyle } from "./UploadToast.style";
import { useEffect, useState } from "react";

const UploadToast: React.FC = () => {
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const fadeOut = () => {
        setOpacity((prevOpacity) => {
          if ( prevOpacity > 80 ) {
            timer = setTimeout(fadeOut, 1000); 
            return prevOpacity - 1;
          } else if ( prevOpacity > 0 ) {
            timer = setTimeout(fadeOut, 200);
            return prevOpacity -1;
          } else {
            return prevOpacity;
          }
        });          
    };

    fadeOut();

    return () => {
      if (timer) clearTimeout(timer); 
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
