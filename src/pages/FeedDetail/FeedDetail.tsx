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
  titleWrapper,
} from "./FeedDetail.style";
import useGetFeedDetail from "apis/hooks/feeds/useGetFeedDetail";
import { useNavigate, useParams } from "react-router-dom";
import { roleImages } from "@constants/roleImage";
import routes from "@constants/routes";
import { PotButton } from "@components/index";

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

  const handleUserClick = () => {
    const userId = data?.writerId;
    navigate(`${routes.userProfile}/${userId}`);
  };

  const handleEdit = () => {
    navigate(`${routes.feed.edit}/${feedId}`);
  };

  return (
    <main css={mainContainer}>
      <div css={headerContainer}>
        <div css={titleContainer}>
          <div css={titleWrapper}>
            <LeftIcon type="button" onClick={handleClick} css={iconStyle} />
            <h1 css={titleStyle}>{data?.title}</h1>
          </div>
          <PotButton onClick={handleEdit}>수정</PotButton>
        </div>
        <div css={profileContainer}>
          <img
            css={profileStyle}
            src={profileImage}
            alt="profileImage"
            onClick={handleUserClick}
          />
          <div css={informationContainer}>
            <p css={nicknameStyle} onClick={handleUserClick}>
              {data?.writer}
            </p>
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
