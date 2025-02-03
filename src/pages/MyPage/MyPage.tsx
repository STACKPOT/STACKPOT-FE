import { useEffect, useState } from "react";
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
  const { data, isLoading, error } = useGetMyPage();
  const [contentType, setContentType] = useState<"feed" | "pot">("feed");
  const [posts, setPosts] = useState(postCardsData);
  const [finishedPots, setFinishedPots] = useState(appliedPotsData);

  useEffect(() => {
    if (data) {
      setPosts(data.feeds || []);
      setFinishedPots(data.completedPosts || []);
    }
  }, [data]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다. 다시 시도해주세요.</div>;
  }

  return (
    <main css={container}>
      <MyPageProfile
        profileImage={MushroomImage}
        nickname={data?.nickname || "닉네임"}
        introduction={data?.userIntroduction || "소개 없음"}
        temperature={data?.userTemperature || 0}
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
            ? posts.map((post) => <PostCard key={post.id} {...post} />)
            : finishedPots.map((pot) => (
                <FinishedPotCard key={pot.id} {...pot} />
              ))}
        </div>
      </div>
      <FloatingButton />
    </main>
  );
};

export default MyPage;
