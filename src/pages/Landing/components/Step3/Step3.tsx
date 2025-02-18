import {
  AISummaryImage,
  FinishedPotImage,
  TaskBoardImage,
  TaskCardImage,
} from "@assets/images";
import {
  horizontalImageContainer,
  horizontalImageStyle,
  imageContentStyle,
  spanStyle,
} from "@pages/Landing/Landing.style";
import { useInView } from "react-intersection-observer";
import { AISummaryStyle, imageContainer, TaskCardStyle } from "./Step3.style";

const Step3: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div css={horizontalImageContainer} ref={ref}>
      <div>
        <div css={imageContainer}>
          <img
            src={TaskBoardImage}
            css={horizontalImageStyle}
            alt="TaskBoardImage"
          />
          <img
            src={TaskCardImage}
            css={TaskCardStyle(inView)}
            alt="TaskBoardImage"
          />
        </div>
        <p css={imageContentStyle}>
          TODO를 <span css={spanStyle}>쉽게 작성</span>하고 팀원들의
          <span css={spanStyle}>업무 진행도</span>를 확인해요
        </p>
      </div>
      <div>
        <div css={imageContainer}>
          <img
            src={FinishedPotImage}
            css={horizontalImageStyle}
            alt="FinishedPotImage"
          />
          <img
            src={AISummaryImage}
            css={AISummaryStyle(inView)}
            alt="AISummaryImage"
          />
        </div>
        <p css={imageContentStyle}>
          정리하기 번거로운 프로젝트는
          <span css={spanStyle}>AI로 내용을 요약</span>해 보세요
        </p>
      </div>
    </div>
  );
};

export default Step3;
