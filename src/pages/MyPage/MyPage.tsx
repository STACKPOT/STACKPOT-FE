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
import useGetMyPage from "apis/hooks/mypage/useGetMyPage";

const MyPage = () => {
  const [contentType, setContentType] = useState<"feed" | "pot">("pot");

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
                  key={post.id}
                  createdAt={post.createdAt}
                  title={post.title}
                  content={post.content}
                />
              ))
            : data.completedPots.map((pot) => (
                <FinishedPotCard
                  id={pot.potId}
                  title={pot.potName}
                  startDate={pot.potStartDate}
                  period={"pot.potEndDate"}
                  method={""}
                  stacks={""}
                  languages={pot.potLan}
                  key={pot.potId}
                />
              ))}
        </div>
      </div>
      <FloatingButton />
    </main>
  );
};

export default MyPage;
