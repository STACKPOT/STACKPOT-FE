import { CategoryButton, Dropdown, NoData, PostCard } from "@components/index";
import {
  buttonContainer,
  cardStyle,
  contentBody,
  contentHeader,
  iconContainer,
  iconStyle,
  feedWriteButton,
  emptyFeedFallbackStyle,
  emptyFeedContainerStyle,
} from "./Feed.style";
import { contentText, contentTitle } from "@pages/Home/Home.style";
import { useState, useEffect } from "react";
import { categoryText, searchPartMap } from "@constants/categories";
import useGetFeeds from "apis/hooks/feeds/useGetFeeds";
import { useInView } from "react-intersection-observer";
import { LoadingSpinnerIcon } from "@assets/svgs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import routes from "@constants/routes";
import useGetMyProfile from "apis/hooks/users/useGetMyProfile";

import { useNavigate } from "react-router-dom";

const options = [
  { label: "최신 순", key: "new" },
  { label: "인기 순", key: "popular" },
  { label: "오래된 순", key: "old" },
];

const EmptyFeedFallback = ({ onWrite }: { onWrite: () => void }) => (
  <div css={emptyFeedFallbackStyle}>
    <div>🥲</div>
    <p>
      피드가 비어 있어요.
      <br />첫 글을 써 볼까요?
    </p>
    <button onClick={onWrite} css={feedWriteButton}>
      피드 작성
    </button>
  </div>
);

const Feed = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("전체보기");
  const [sort, setSort] = useState<string>("new");
  const { data: user } = useGetMyProfile(!!localStorage.getItem("accessToken"));

  const handleCategoryClick = (partName: string) => {
    if (selectedCategory === partName) {
      setSelectedCategory("전체보기");
    } else {
      setSelectedCategory(partName);
    }
  };

  const handleChange = (key: string) => {
    setSort(key);
  };

  const handleWriteFeed = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate(routes.writePost);
    } else {
      const link = `https://kauth.kakao.com/oauth/authorize?client_id=${
        import.meta.env.VITE_REST_API_KEY
      }&redirect_uri=${
        import.meta.env.VITE_REDIRECT_URI
      }&response_type=code&scope=account_email&prompt=login`;
      window.location.href = link;
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetFeeds({
      category: searchPartMap[selectedCategory],
      sort,
      limit: 10,
      cursor: null,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      <div css={contentHeader}>
        <div css={contentTitle}>
          <p css={contentText}>
            {categoryText[searchPartMap[selectedCategory]]}
          </p>
          <p> 피드를 탐색해 볼까요?</p>
          <div css={{ marginLeft: "auto" }}>
            <Dropdown options={options} handleChange={handleChange} />
          </div>
        </div>
        <div css={buttonContainer}>
          {Object.keys(searchPartMap).map((partName) => (
            <div key={partName}>
              <CategoryButton
                style="pot"
                selected={selectedCategory === partName}
                onClick={() => handleCategoryClick(partName)}
              >
                {partName}
              </CategoryButton>
            </div>
          ))}
        </div>
      </div>
      <div css={contentBody}>
        {isLoading ? (
          <Skeleton css={cardStyle} />
        ) : data?.pages && data.pages.length > 0 ? (
          data.pages.map((page, pageIndex) => (
            <div key={`page-${pageIndex}`}>
              {page.result?.feeds && page.result.feeds.length > 0 ? (
                page.result.feeds.map((item, itemIndex) => {
                  const isLastItem =
                    pageIndex === data.pages.length - 1 &&
                    itemIndex === (page.result?.feeds?.length ?? 0) - 1;
                  const isMyPost = user?.id === item.writerId;
                  return (
                    <div
                      key={`feed-${item.feedId}`}
                      ref={isLastItem ? ref : null}
                    >
                      <PostCard
                        role={item.writerRole}
                        writerId={item.writerId}
                        nickname={item.writer}
                        createdAt={item.createdAt}
                        title={item.title}
                        content={item.content}
                        likeCount={item.likeCount}
                        saveCount={item.saveCount}
                        commentCount={item.commentCount}
                        isLiked={item.isLiked}
                        isSaved={item.isSaved}
                        feedId={item.feedId}
                        isMyPost={isMyPost}
                      />
                    </div>
                  );
                })
              ) : (
                <NoData
                  message={"🥲\n피드가 비어 있어요.\n첫 글을 써 볼까요?"}
                  buttonText="피드 작성"
                  onClickButton={handleWriteFeed}
                  containerStyle={emptyFeedContainerStyle}
                />
              )}
            </div>
          ))
        ) : (
          <NoData
            message={"🥲\n피드가 비어 있어요.\n첫 글을 써 볼까요?"}
            buttonText="피드 작성"
            onClickButton={handleWriteFeed}
            containerStyle={emptyFeedContainerStyle}
          />
        )}
        {isFetchingNextPage && (
          <div css={iconContainer}>
            <LoadingSpinnerIcon css={iconStyle} />
          </div>
        )}
      </div>
    </>
  );
};

export default Feed;
