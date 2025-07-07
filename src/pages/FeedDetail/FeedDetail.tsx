import React from "react";
import { LeftIcon } from "@assets/svgs";
import {
  contentStyle,
  dateStyle,
  dividerStyle,
  sectionContainer,
  iconStyle,
  informationContainer,
  mainContainer,
  nicknameStyle,
  profileContainer,
  profileStyle,
  titleContainer,
  titleStyle,
  postButtonsContainer,
  editButtonStyle,
} from "./FeedDetail.style";
import useGetFeedDetail from "apis/hooks/feeds/useGetFeedDetail";
import { useNavigate, useParams } from "react-router-dom";
import { roleImages } from "@constants/roleImage";
import routes from "@constants/routes";
import { Button, CommentSection, PostButton } from "@components/index";
import useGetMyProfile from "apis/hooks/users/useGetMyProfile";

const FeedDetail = () => {
  const { feedId } = useParams();
  const numericFeedId = Number(feedId);
  const { data: user } = useGetMyProfile();

  const { data } = useGetFeedDetail(numericFeedId);

  const navigate = useNavigate();

  const profileImage = data?.feed.writerRole
    ? roleImages[data.feed.writerRole]
    : undefined;

  const handleClick = () => {
    navigate(-1);
  };

  const handleUserClick = () => {
    const userId = data?.feed.writerId;
    navigate(`${routes.userProfile}/${userId}`);
  };

  const handleEdit = () => {
    navigate(`${routes.feed.edit}/${feedId}`);
  };

  return (
    <main css={mainContainer}>
      <div css={sectionContainer}>
        <div css={titleContainer}>
          <LeftIcon type="button" onClick={handleClick} css={iconStyle} />
          <h1 css={titleStyle}>{data?.feed.title}</h1>
          {user?.id === data?.feed.writerId && (
            <Button
              variant="action"
              actionType="alt"
              onClick={handleEdit}
              css={editButtonStyle}
            >
              수정
            </Button>
          )}{" "}
        </div>
        <div css={profileContainer}>
          <img
            css={profileStyle}
            src={profileImage}
            alt="profileImage"
            onClick={handleUserClick}
          />
          <div css={informationContainer}>
            <a css={nicknameStyle} onClick={handleUserClick}>
              {data?.feed.writer}
            </a>
            <p css={dateStyle}>{data?.feed.createdAt}</p>
          </div>
        </div>
        <div css={dividerStyle} />
      </div>
      <div css={sectionContainer}>
        <div css={contentStyle}>
          {data?.feed.content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div css={postButtonsContainer}>
          <PostButton
            postType="like"
            isToggled={data?.feed.isLiked ?? false}
            id={numericFeedId}
          />
          <PostButton postType="save" isToggled={false} id={numericFeedId} />
        </div>
      </div>
      <CommentSection type="feed" id={numericFeedId} />
    </main>
  );
};

export default FeedDetail;
