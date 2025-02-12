import { LeftIcon } from "@assets/svgs";
import {
  contentStyle,
  dateStyle,
  dividerStyle,
  headerContainer,
  iconStyle,
  informationContainer,
  mainContainer,
  nicknameStyle,
  profileContainer,
  titleContainer,
  titleStyle,
} from "./FeedDetail.style";

const FeedDetail = () => {
  return (
    <main css={mainContainer}>
      <div css={headerContainer}>
        <div css={titleContainer}>
          <LeftIcon css={iconStyle} />
          <h1 css={titleStyle}>개발자 입문자를 위한 안내 글을 써보았다.</h1>
        </div>
        <div css={profileContainer}>
          <div>버섯</div>
          <div css={informationContainer}>
            <p css={nicknameStyle}>닉네임</p>
            <p css={dateStyle}>날짜</p>
          </div>
        </div>
        <div css={dividerStyle} />
      </div>
      <div css={contentStyle}>본문내용</div>
    </main>
  );
};

export default FeedDetail;
