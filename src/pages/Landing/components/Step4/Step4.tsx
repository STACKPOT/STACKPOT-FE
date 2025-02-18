import { MyPageImage, PotDetailImage } from "@assets/images";
import {
  horizontalImageContainer,
  horizontalImageStyle,
  imageContentStyle,
  spanStyle,
} from "@pages/Landing/Landing.style";

const Step4 = () => {
  return (
    <div css={horizontalImageContainer}>
      <div>
        <img
          src={PotDetailImage}
          css={horizontalImageStyle}
          alt="PotDetailImage"
        />
        <p css={imageContentStyle}>
          지원에 바로 이용하며, <br />
          <span css={spanStyle}>기록 그 이상의 가치</span>를 찾아 보세요!
        </p>
      </div>
      <div>
        <img src={MyPageImage} css={horizontalImageStyle} alt="MyPageImage" />
        <p css={imageContentStyle}>
          팀원들의 참여도를 알 수 있는
          <br />
          <span css={spanStyle}>온도 지표</span>를 통해 신뢰도를 알 수 있어요
        </p>
      </div>
    </div>
  );
};

export default Step4;
