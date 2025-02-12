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
  profileStyle,
  titleContainer,
  titleStyle,
} from "./FeedDetail.style";
import useGetFeedDetail from "apis/hooks/feeds/useGetFeedDetail";
import { useNavigate, useParams } from "react-router-dom";
import { roleImages } from "@constants/roleImage";

const FeedDetail = () => {
  const { feedId } = useParams();
  const numericFeedId = Number(feedId);
  const { data } = useGetFeedDetail(numericFeedId);

  const navigate = useNavigate();

  const profileImage = data?.writerRole
    ? roleImages[data.writerRole]
    : undefined;

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <main css={mainContainer}>
      <div css={headerContainer}>
        <div css={titleContainer}>
          <LeftIcon type="button" onClick={handleClick} css={iconStyle} />
          <h1 css={titleStyle}>{data?.title}</h1>
        </div>
        <div css={profileContainer}>
          <img css={profileStyle} src={profileImage} alt="profileImage" />
          <div css={informationContainer}>
            <p css={nicknameStyle}>{data?.writer}</p>
            <p css={dateStyle}>{data?.createdAt}</p>
          </div>
        </div>
        <div css={dividerStyle} />
      </div>
      <div css={contentStyle}>{data?.content}</div>
    </main>
  );
};

export default FeedDetail;
