import { useInView } from "react-intersection-observer";
import {
  ModalImage,
  MyPageImage,
  PotDetailImage,
  UserProfileImage,
} from "@assets/images";
import {
  horizontalImageContainer,
  horizontalImageStyle,
  imageContentStyle,
  spanStyle,
} from "@pages/Landing/Landing.style";
import { imageContainer, modalStyle, profileImageStyle } from "./Step4.style";

const Step4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div css={horizontalImageContainer} ref={ref}>
      <div>
        <div css={imageContainer}>
          <img
            src={PotDetailImage}
            css={horizontalImageStyle}
            alt="PotDetailImage"
          />
          <img src={ModalImage} alt="ModalImage" css={modalStyle(inView)} />
        </div>
        <p css={imageContentStyle}>
          지원에 바로 이용하며, <br />
          <span css={spanStyle}>기록 그 이상의 가치</span>를 찾아 보세요!
        </p>
      </div>
      <div>
        <div css={imageContainer}>
          <img src={MyPageImage} css={horizontalImageStyle} alt="MyPageImage" />
          <img
            src={UserProfileImage}
            css={profileImageStyle(inView)}
            alt="ProfileImage"
          />
        </div>
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
