import { PartyIcon } from "@assets/svgs";
import { container, textStyle, toastStyle } from "./UploadToast.style";

const UploadToast: React.FC = () => {
  return (
      <div css={container}>
        <div css={toastStyle}>
            <PartyIcon />
            <div css={textStyle}>업로드를 완료했어요</div>
        </div>
      </div>
  );
}

export default UploadToast;