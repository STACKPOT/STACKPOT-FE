import { FinishedPotImage, TaskBoardImage } from "@assets/images";
import {
  horizontalImageContainer,
  horizontalImageStyle,
  imageContentStyle,
  spanStyle,
} from "@pages/Landing/Landing.style";

const Step3 = () => {
  return (
    <div css={horizontalImageContainer}>
      <div>
        <img
          src={TaskBoardImage}
          css={horizontalImageStyle}
          alt="TaskBoardImage"
        />
        <p css={imageContentStyle}>
          TODO를 <span css={spanStyle}>쉽게 작성</span>하고 팀원들의
          <span css={spanStyle}>업무 진행도</span>를 확인해요
        </p>
      </div>
      <div>
        <img
          src={FinishedPotImage}
          css={horizontalImageStyle}
          alt="FinishedPotImage"
        />
        <p css={imageContentStyle}>
          정리하기 번거로운 프로젝트는
          <span css={spanStyle}>AI로 내용을 요약</span>해 보세요
        </p>
      </div>
    </div>
  );
};

export default Step3;
