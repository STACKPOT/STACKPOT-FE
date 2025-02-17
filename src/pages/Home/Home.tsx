import { PotIcon, RightIcon } from "@assets/svgs";
import { Button, FloatingButton } from "@components/index";
import {
  container,
  content,
  contentTitle,
  iconStyle,
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
import PopularPots from "./components/PopularPots/PopularPots";
import Feed from "./components/Feed/Feed";

const Home: React.FC = () => {
  return (
    <>
      <div css={bannerStyle}>
        <div css={bannerContainer}>
          <p css={bannerTitleStyle}>
            <span css={spanStyle}>사이드 프로젝트</span>와
            <span css={spanStyle}>기록</span>을 동시에 해 보세요
          </p>
          <p css={bannerSubtitleStyle}>
            지금 바로 나와 함께할 팀원을 찾아볼까요?
          </p>
          <Button css={buttonStyle}>
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
              <PotIcon css={iconStyle} />
            </div>
            <PopularPots />
          </div>
          <div css={content}>
            <Feed />
          </div>
        </div>
        <FloatingButton type="feed" />
      </main>
    </>
  );
};

export default Home;
