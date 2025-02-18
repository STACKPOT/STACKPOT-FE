import { PotImage } from "@assets/images";
import {
  contentContainer,
  imageContainer,
  imageSubtitle,
  imageTitle,
  potImageStyle,
  spanStyle,
} from "@pages/Landing/Landing.style";

const Step2 = () => {
  return (
    <div css={imageContainer}>
      <div css={contentContainer}>
        <p css={imageTitle}>
          나의 <span css={spanStyle}>팟</span>을 만들고
          <br />
          <span css={spanStyle}>팀원</span>을 모집해 보세요
        </p>
        <p css={imageSubtitle}>
          팟을 만들고 나서 각 지원자의 피드를 보며 활동을 <br /> 구경하고 원하는
          지원자를 골라 더욱 효율적으로 <br /> 프로젝트를 시작할 수 있어요.
        </p>
      </div>
      <img src={PotImage} alt="PotImage" css={potImageStyle} />
    </div>
  );
};

export default Step2;
