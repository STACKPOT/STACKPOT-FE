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
import postCardsData from "mocks/postCardsData";
import { FinishedPotCard, FloatingButton, PostCard } from "@components/index";
import { MushroomImage } from "@assets/images";
import appliedPotsData from "mocks/appliedPotsData";
import useGetMyPage from "apis/hooks/mypage/useGetMyPage";

const MyPage = () => {
  const [contentType, setContentType] = useState<"feed" | "pot">("feed");
  const [posts, setPosts] = useState(postCardsData);
  const [finishedPots, setFinishedPots] = useState(appliedPotsData);

  const { data } = useGetMyPage({
    dataType: contentType,
  });

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <main css={container}>
      <MyPageProfile
        profileImage={MushroomImage}
        nickname="아아 마시는 버섯"
        introduction="개발전공 대학생입니다"
        temperature={65}
      />
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
                  key={post.id}
                  {...post}
                />
              ))
            : data.completedPots.map((pot) => (
                <FinishedPotCard
                  id={pot.potId}
                  title={pot.potName}
                  startDate={pot.potStartDate}
                  period={pot.potEndDate}
                  method={""}
                  stacks={""}
                  languages={pot.potLan}
                  key={pot.potId}
                  {...pot}
                />
              ))}
        </div>
      </div>
      <FloatingButton />
    </main>
  );
};

export default MyPage;
