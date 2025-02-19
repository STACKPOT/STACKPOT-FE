import { PotImage } from "@assets/images";
import { useInView } from "react-intersection-observer";
import {
  contentContainer,
  imageContainer,
  imageSubtitle,
  imageTitle,
  spanStyle,
} from "@pages/Landing/Landing.style";
import { potImageStyle } from "./Step2.style";

const Step2: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
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
      <img
        ref={ref}
        src={PotImage}
        alt="PotImage"
        css={potImageStyle(inView)}
      />
    </div>
  );
};

export default Step2;
