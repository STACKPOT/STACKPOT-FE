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
import finishedPotsData from "mocks/finishedPotsData";

const MyPage = () => {
  const [contentType, setContentType] = useState<"feed" | "pot">("feed");
  const [posts, setPosts] = useState(postCardsData);
  const [finishedPots, setFinishedPots] = useState(finishedPotsData);

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
            ? posts.map((post) => (
              <PostCard
                role={"FRONTEND"}
                isLiked={false}
                key={post.id}
                {...post}
              />
            ))
            : finishedPots.map((pot) => (
              <FinishedPotCard
                key={pot.id}
                {...pot}
                isMyPage={true}
                buttonType="appeal" />
            ))}
        </div>
      </div>
      <FloatingButton />
    </main>
  );
};

export default MyPage;
