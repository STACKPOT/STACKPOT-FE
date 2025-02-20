import { useState } from "react";
import {
  bodyContainer,
  container,
  dividerStyle,
  listContainer,
  tabsContainer,
  tabsTextStyle,
} from "./MyPage.style";
import { MyPageProfile } from "./components";
import { FinishedPotCard, FloatingButton, PostCard } from "@components/index";
import useGetMyPage from "apis/hooks/users/useGetMyPage";
import { Role } from "types/role";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [contentType, setContentType] = useState<"feed" | "pot">("feed");

  const { data } = useGetMyPage({
    dataType: contentType,
  });

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <main css={container}>
      <MyPageProfile />
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
                  isMyPost={true}
                />
              ))
            : data.completedPots.map((pot) => {
                let members = [] as Role[];
                Object.entries(pot.memberCounts).forEach((part) => {
                  for (let i = 0; i < part[1]; i++) {
                    members.push(part[0] as Role);
                  }
                });
                return (
                  <FinishedPotCard
                    id={pot.potId}
                    title={pot.potName}
                    myRole={pot.userPotRole}
                    startDate={pot.potStartDate}
                    stacks={pot.members}
                    languages={pot.potLan}
                    key={pot.potId}
                    members={members}
                    isProfilePage={true}
                    endDate={pot.potEndDate}
                    buttonType="appeal"
                    isUserPage={false}
                  />
                );
              })}
        </div>
      </div>
      <FloatingButton type={"feed"} />
    </main>
  );
};

export default MyPage;
