import { ExpandMoreIcon, Logo } from "@assets/svgs";
import {
  bgContainer,
  bgStyle,
  bottomContainer,
  buttonStyle,
  contentContainer,
  feedImageStyle,
  horizontalImageContainer,
  horizontalImageStyle,
  iconContainer,
  imageContainer,
  imageContentStyle,
  imageSubtitle,
  imageTitle,
  LogoContainer,
  logoStyle,
  mainContainer,
  myPotImageStyle,
  potImageStyle,
  profileContainer,
  profileImageStyle,
  profileTextContainer,
  sloganContainer,
  spanStyle,
  subTitleStyle,
  TaskImgageStyle,
  titleStyle,
} from "./Landing.style";
import { Button } from "@components/index";
import {
  FeedImage,
  FinishedPotImage,
  MyPageImage,
  MyPotImage,
  PotDetailImage,
  PotImage,
  TaskBoardImage,
  TaskImage,
} from "@assets/images";
import routes from "@constants/routes";
import { useNavigate } from "react-router-dom";
import { profileImages, sloganText } from "@constants/landing";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.home);
  };

  return (
    <main css={mainContainer}>
      <div css={bgContainer}>
        <div css={bgStyle} />
      </div>
      <div css={sloganContainer}>
        <p css={titleStyle}>{sloganText[0]}</p>
        <div css={LogoContainer}>
          <p>{sloganText[1]}</p>
          <Logo css={logoStyle} />
          <p>{sloganText[2]}</p>
        </div>
      </div>
      <p css={subTitleStyle}>{sloganText[3]}</p>
      <Button variant="landing" onClick={handleClick}>
        팟 만들러 가기
      </Button>
      <img src={TaskImage} alt="taskImage" css={TaskImgageStyle} />
      <div css={iconContainer}>
        <ExpandMoreIcon />
        <p>스크롤을 내려 어떤 서비스인지 알아볼까요?</p>
      </div>
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
      <div css={imageContainer}>
        <div css={contentContainer}>
          <p css={imageTitle}>
            나의<span css={spanStyle}>팟</span>을 만들고
            <br />
            <span css={spanStyle}>팀원</span>을 모집해 보세요
          </p>
          <p css={imageSubtitle}>
            팟을 만들고 나서 각 지원자의 피드를 보며 활동을 <br /> 구경하고
            원하는 지원자를 골라 더욱 효율적으로 <br /> 프로젝트를 시작할 수
            있어요.
          </p>
        </div>
        <img src={PotImage} alt="PotImage" css={potImageStyle} />
      </div>
      <div css={horizontalImageContainer}>
        <div>
          <img
            src={TaskBoardImage}
            css={horizontalImageStyle}
            alt="TaskBoardImage"
          />
          <p css={imageContentStyle}>
            TODO를 <span css={spanStyle}>쉽게 작성</span>하고 팀원들의{" "}
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
            TODO를 <span css={spanStyle}>쉽게 작성</span>하고 팀원들의{" "}
            <span css={spanStyle}>업무 진행도</span>를 확인해요
          </p>
        </div>
      </div>
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
      <div css={bottomContainer}>
        <div css={sloganContainer}>
          <div css={profileTextContainer}>
            <p>{sloganText[4]}</p>
            <div css={profileContainer}>
              {profileImages.map(({ src, alt }, index) => (
                <img key={index} src={src} alt={alt} css={profileImageStyle} />
              ))}
            </div>
            <p>{sloganText[5]}</p>
          </div>
          <Logo css={logoStyle} />
        </div>
        <Button variant="landing" onClick={handleClick} css={buttonStyle}>
          팟 만들러 가기
        </Button>
        <img src={MyPotImage} css={myPotImageStyle} alt="MyPotImage" />
      </div>
    </main>
  );
};

export default Landing;
