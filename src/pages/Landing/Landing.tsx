import {
  ArrowRightIcon,
  ChevronRightIcon,
  ExpandMoreIcon,
  Logo,
  RightIcon,
} from "@assets/svgs";
import {
  bgContainer,
  bgStyle,
  bottomContainer,
  buttonStyle,
  iconContainer,
  LogoContainer,
  logoStyle,
  mainContainer,
  myPotImageStyle,
  profileContainer,
  profileImageStyle,
  profileTextContainer,
  rightIconStyle,
  sloganContainer,
  subTitleStyle,
  TaskImgageStyle,
  titleStyle,
} from "./Landing.style";
import { Button } from "@components/index";
import { MyPotImage, TaskImage } from "@assets/images";
import routes from "@constants/routes";
import { useNavigate } from "react-router-dom";
import { profileImages, sloganText } from "@constants/landing";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.home);
  };

  const handleButtonClick = () => {
    window.open(import.meta.env.VITE_DESCRIPTION_URL);
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
        STACKPOT 바로가기
      </Button>
      <img src={TaskImage} alt="taskImage" css={TaskImgageStyle} />
      <div css={iconContainer}>
        <ExpandMoreIcon />
        <p>스크롤을 내려 어떤 서비스인지 알아볼까요?</p>
      </div>

      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
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
        <Button variant="landing" onClick={handleButtonClick} css={buttonStyle}>
          더 알아보기
          <ChevronRightIcon css={rightIconStyle} />
        </Button>
        <img src={MyPotImage} css={myPotImageStyle} alt="MyPotImage" />
      </div>
    </main>
  );
};

export default Landing;
