import { FinishedPotCard, PostCard } from "@components/index";
import { Role } from "types/role";
import {
  emptyFeedFallbackStyle,
  introductionWriteButton,
  introductionContentStyle,
  introductionTitleStyle,
  introductionBodyStyle,
  introductionEditButton,
  feedHeaderContainer,
  feedCategoryButtonGroup,
  feedCategoryButton,
  feedSearchBox,
  feedCategoryAddButton,
} from "./MyPageContent.style";
import { AddIcon, SearchBlueIcon } from "@assets/svgs";
import { useState } from "react";

type FeedPost = {
  writer: string;
  writerRole: Role;
  isLiked: boolean;
  likeCount: number;
  feedId: number;
  createdAt: string;
  title: string;
  content: string;
  writerId: number;
  saveCount: number;
  commentCount: number;
  isSaved: boolean;
};

type Pot = {
  potId: number;
  potName: string;
  userPotRole: string;
  potStartDate: string;
  potEndDate: string;
  members: string;
  potLan: string;
  memberCounts: Record<string, number>;
};

const FeedContent = ({ posts }: { posts: FeedPost[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const mockSeries = [
    { label: "전체보기" },
    { label: "시리즈1" },
    { label: "개발 공부" },
    { label: "동아리 프로젝트" },
    { label: "면접 후기" },
  ];

  return (
    <>
      <div css={feedHeaderContainer}>
        <div css={feedCategoryButtonGroup}>
          <button css={feedCategoryAddButton}><AddIcon /></button>
          {mockSeries.map(({ label }, index) => (
            <button
              key={label}
              css={feedCategoryButton(selectedIndex === index)}
              onClick={() => setSelectedIndex(index)}
            >
              {label}
            </button>
          ))}
        </div>
        <div css={feedSearchBox}>
          <input placeholder="검색어를 입력해주세요." />
          <span role="img" aria-label="search"><SearchBlueIcon /></span>
        </div>
      </div>
      {posts.map((post) => (
        <PostCard
          nickname={post.writer}
          role={post.writerRole}
          isLiked={post.isLiked}
          likeCount={post.likeCount}
          key={post.feedId}
          createdAt={post.createdAt}
          title={post.title}
          content={post.content}
          feedId={post.feedId}
          writerId={post.writerId}
          saveCount={post.saveCount}
          commentCount={post.commentCount}
          isSaved={post.isSaved}
          isMyPost={true}
        />
      ))}
    </>
  );
};

const PotContent = ({ pots }: { pots: Pot[] }) => (
  <>
    {pots.map((pot) => {
      let members = [] as Role[];
      Object.entries(pot.memberCounts).forEach(([role, count]) => {
        for (let i = 0; i < count; i++) {
          members.push(role as Role);
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
  </>
);

const EmptyFeedFallback = ({ onWrite }: { onWrite: () => void }) => (
  <div css={emptyFeedFallbackStyle}>
    <div>소개가 작성되지 않았어요</div>
    <p>
      당신의 이야기를 기다리고 있어요!
      <br />비어 있는 이 공간에 당신만의 색을 칠해보세요
    </p>
    <button onClick={onWrite} css={introductionWriteButton}>
      소개글 작성하기
    </button>
  </div>
);

const IntroductionContent = ({ introduction }: { introduction: { title: string, body: string } }) => {
  console.log(introduction);

  const handleWriteIntroduction = () => {
    console.log("소개 작성");
  }

  const handleEditIntroduction = () => {
    console.log("소개 편집");
  };

  if (!introduction) {
    return (
      <EmptyFeedFallback onWrite={handleWriteIntroduction} />
    );
  }

  return (
    <div css={introductionContentStyle}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={handleEditIntroduction} css={introductionEditButton}>
          편집하기
        </button>
      </div>
      <h2 css={introductionTitleStyle}>{introduction.title}</h2>
      <p css={introductionBodyStyle}>{introduction.body}</p>
    </div>
  );
};

const MyPageContent = ({ contentType, data }: { contentType: 'feed' | 'pot' | 'introduction'; data: any }) => {
  switch (contentType) {
    case 'feed':
      return <FeedContent posts={data.feeds} />;
    case 'pot':
      return <PotContent pots={data.completedPots} />;
    default:
      return <IntroductionContent introduction={data.introduction} />;
  }
};

export default MyPageContent;