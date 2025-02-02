import { PotIcon } from "@assets/svgs";
import { FloatingButton } from "@components/index";
import {
  container,
  content,
  contentTitle,
  iconStyle,
  bannerStyle,
} from "./Home.style";

import "swiper/swiper-bundle.css";
import "swiper";
import { BannerImage } from "@assets/images";
import PopularPots from "./components/PopularPots/PopularPots";
import Feed from "./components/Feed/Feed";

const Home: React.FC = () => {
  return (
    <main>
      <img css={bannerStyle} src={BannerImage} alt="Banner" />
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
      <FloatingButton />
    </main>
  );
};

export default Home;
