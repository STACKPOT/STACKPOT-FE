import { useState } from "react";
import {
  bodyContainer,
  container,
  dividerStyle,
  listContainer,
  tabsContainer,
  tabsTextStyle,
} from "./UserPage.style";
import { FinishedPotCard, FloatingButton, PostCard } from "@components/index";
import { UserPageProfile } from "./components";
import useGetUsersMypages from "apis/hooks/users/useGetUsersMyPages";
import { Role } from "types/role";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [contentType, setContentType] = useState<"feed" | "pot">("feed");
  const { userId } = useParams<{ userId: string }>();

  if (!userId) {
    return <div>유효한 유저 ID가 필요합니다.</div>;
  }

  const UserId = Number(userId);

  const { data } = useGetUsersMypages({
    userId: UserId,
    dataType: contentType,
  });

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <main css={container}>
      <UserPageProfile />
      <div css={dividerStyle} />
      <div css={bodyContainer}>
        <div css={tabsContainer}>
          <p
            css={tabsTextStyle(contentType === "feed")}
            onClick={() => setContentType("feed")}
          >
            피드
          </p>
          <p
            css={tabsTextStyle(contentType === "pot")}
            onClick={() => setContentType("pot")}
          >
            끓인 팟
          </p>
        </div>
        <div css={listContainer(contentType)}>
          {contentType === "feed"
            ? data.feeds.map((post) => (
                <PostCard
                  nickname={post.writer}
                  role={post.writerRole}
                  isLiked={false}
                  likeCount={post.likeCount}
                  key={post.feedId}
                  createdAt={post.createdAt}
                  title={post.title}
                  content={post.content}
                  feedId={post.feedId}
                  writerId={post.writerId}
                  isMyPost={false}
                />
              ))
            : data.completedPots.map((pot) => (
                <FinishedPotCard
                  id={pot.potId}
                  title={pot.potName}
                  myRole={pot.userPotRole}
                  startDate={pot.potStartDate}
                  stacks={pot.members}
                  languages={pot.potLan}
                  key={pot.potId}
                  endDate={pot.potEndDate}
                  members={Object.keys(pot.memberCounts) as Role[]}
                  isUserPage={true}
                  isProfilePage={false}
                />
              ))}
        </div>
      </div>
      <FloatingButton type={"feed"} />
    </main>
  );
};

export default UserPage;
