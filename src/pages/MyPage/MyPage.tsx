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
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role";

const MyPage = () => {
  const [contentType, setContentType] = useState<"feed" | "pot">("pot");

  const { data } = useGetMyPage({
    dataType: contentType,
  });

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  const mapRoleToEnum = (role: string): Role => {
    switch (role) {
      case "프론트엔드":
        return "FRONTEND";
      case "백엔드":
        return "BACKEND";
      case "기획":
        return "PLANNING";
      case "디자인":
        return "DESIGN";
      default:
        return "PLANNING";
    }
  };

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
            : data.completedPots.map((pot) => {
                const memberRoles = pot.members.split(",").map((member) => {
                  const rawRole = member.trim().split("(")[0];
                  return mapRoleToEnum(rawRole);
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
                    memberProfiles={memberRoles.map(
                      (role) => roleImages[role] || ""
                    )}
                    isMyPage={true}
                    endDate={pot.potEndDate}
                  />
                );
              })}
        </div>
      </div>
      <FloatingButton />
    </main>
  );
};

export default MyPage;
