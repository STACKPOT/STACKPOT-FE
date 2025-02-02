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
import {
  TaskImgage,
  BroccoliImage,
  CarrotImage,
  OnionImage,
  MushroomImage,
  MyPotImage,
} from "@assets/images";
import routes from "@constants/routes";
import { useNavigate } from "react-router-dom";

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
        <p css={titleStyle}>사이드 프로젝트,</p>
        <div css={LogoContainer}>
          <p>이제는</p>
          <Logo css={logoStyle} />
          <p>에서</p>
        </div>
      </div>
      <p css={subTitleStyle}>더욱 효율적으로 하는 사이드 프로젝트</p>
      <Button variant="landing" onClick={handleClick}>
        팟 만들러 가기
      </Button>
      <img src={TaskImgage} alt="taskImage" css={TaskImgageStyle} />
      <div css={iconContainer}>
        <ExpandMoreIcon />
        <p>스크롤을 내려 어떤 서비스인지 알아볼까요?</p>
      </div>
      <div css={bottomContainer}>
        <div css={sloganContainer}>
          <div css={profileTextContainer}>
            <p>내가 가장</p>
            <div css={profileContainer}>
              <img
                src={CarrotImage}
                css={profileImageStyle}
                alt="CarrotImage"
              />
              <img src={OnionImage} css={profileImageStyle} alt="OnionImage" />
              <img
                src={BroccoliImage}
                css={profileImageStyle}
                alt="BroccoliImage"
              />
              <img
                src={MushroomImage}
                css={profileImageStyle}
                alt="MushroomImage"
              />
            </div>
            <p>다울 수 있는</p>
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
