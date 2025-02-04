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
import { MushroomImage } from "@assets/images";
import useGetMyPage from "apis/hooks/mypage/useGetMyPage";
import { error } from "console";

const MyPage = () => {
  const [contentType, setContentType] = useState<"feed" | "pot">("feed");

  // API 데이터 연동
  const { data, isLoading, isError } = useGetMyPage({ dataType: "ALL" });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return console.log(error);

  return (
    <main css={container}>
      <MyPageProfile
        profileImage={MushroomImage}
        nickname={data?.result.nickname || "닉네임 없음"}
        introduction={data?.result.userIntroduction || "소개 없음"}
        temperature={data?.result.userTemperature || 0}
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
            ? data?.result.feeds?.map((post) => (
                <PostCard
                  role={post.writerRole}
                  nickname={post.writer}
                  isLiked={false}
                  key={post.feedId}
                  {...post}
                />
              ))
            : data?.result.completedPots?.map((pot) => (
                <FinishedPotCard
                  id={pot.potId}
                  title={pot.potName}
                  startDate={pot.potStartDate}
                  period={`${pot.potStartDate} ~ ${pot.potEndDate}`}
                  method={""}
                  stacks={""}
                  languages={""}
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
