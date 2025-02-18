import { feedImageStyle } from "./Step1.style";
import {
  contentContainer,
  imageContainer,
  imageSubtitle,
  imageTitle,
  spanStyle,
} from "@pages/Landing/Landing.style";
import { FeedImage } from "@assets/images";

const Step1: React.FC = () => {
  return (
    <div css={imageContainer}>
      <img src={FeedImage} alt="FeedImage" css={feedImageStyle} />
      <div css={contentContainer}>
        <p css={imageTitle}>
          피드를 보며 <span css={spanStyle}>IT 정보</span>를<br />
          <span css={spanStyle}>공유</span>
          하고 소통해요
        </p>
        <p css={imageSubtitle}>
          카테고리로 나와 관련된 직군 글을 모아보고, <br />
          프로젝트에 대해 회고 또는 학습한 것을 피드로
          <br />
          작성할 수 있어요.
        </p>
      </div>
    </div>
  );
};

export default Step1;
