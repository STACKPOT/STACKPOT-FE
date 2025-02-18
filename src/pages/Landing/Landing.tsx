import { ExpandMoreIcon, Logo } from "@assets/svgs";
import {
  bgContainer,
  bgStyle,
  bottomContainer,
  buttonStyle,
  iconContainer,
  LogoContainer,
  logoStyle,
  mainContainer,
  MyPotImageStyle,
  profileContainer,
  profileImageStyle,
  profileTextContainer,
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
        <img src={MyPotImage} css={MyPotImageStyle} alt="MyPotImage" />
      </div>
    </main>
  );
};

export default Landing;
