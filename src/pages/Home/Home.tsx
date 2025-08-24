import { RightIcon } from "@assets/svgs";
import { Button, CtaCard } from "@components/index";

import {
  container,
  content,
  contentTitle,
  bannerStyle,
  bannerTitleStyle,
  spanStyle,
  bannerSubtitleStyle,
  buttonStyle,
  buttonIconStyle,
  bannerContainer,
} from "./Home.style";

import "swiper/swiper-bundle.css";
import "swiper";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { Feed, PopularPots } from "./components";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REST_API_KEY
    }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code
&scope=account_email
&prompt=login`;

  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate(routes.createPot);
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      <div css={bannerStyle}>
        <div css={bannerContainer}>
          <p css={bannerTitleStyle}>
            <span css={spanStyle}>사이드 프로젝트</span>와
            <span css={spanStyle}> 기록</span>을 동시에 해 보세요
          </p>
          <p css={bannerSubtitleStyle}>
            지금 바로 나와 함께할 팀원을 찾아볼까요?
          </p>
          <Button css={buttonStyle} onClick={handleClick}>
            팟 만들러 가기
            <RightIcon css={buttonIconStyle} />
          </Button>
        </div>
      </div>
      <main>
        <div css={container}>
          <div css={content}>
            <div css={contentTitle}>
              <p>실시간 인기 팟</p>
              <p>🔥</p>
            </div>
            <PopularPots />
          </div>
          <CtaCard type="feed" />
          <div css={content}>
            <Feed />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
