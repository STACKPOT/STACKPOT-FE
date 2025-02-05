import { CategoryButton, Dropdown, PostCard } from "@components/index";
import {
  buttonContainer,
  cardStyle,
  contentBody,
  contentHeader,
  iconContainer,
  iconStyle,
} from "./Feed.style";
import { contentTitle, subTitleStyle } from "@pages/Home/Home.style";
import { useState, useEffect } from "react";
import { categories, partMap } from "@constants/categories";
import useGetFeeds from "apis/hooks/feeds/useGetFeeds";
import { useInView } from "react-intersection-observer";
import { LoadingSpinnerIcon } from "@assets/svgs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("new");

  const handleCategoryClick = (category: string, partName: string) => {
    if (selectedCategory === partName) {
      setSelectedCategory(null);
      setCategory("ALL");
    } else {
      setSelectedCategory(partName);
      setCategory(category);
    }
  };

  const options = [
    { label: "최신 순", key: "new" },
    { label: "인기 순", key: "popular" },
    { label: "오래된 순", key: "old" },
  ];

  const handleChange = (key: string) => {
    setSort(key);
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetFeeds({
      category: category || "ALL",
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
          <p>피드</p>
        </div>
        <div css={buttonContainer}>
          {Object.keys(partMap).map((partName) => (
            <div key={partName} css={categories}>
              <CategoryButton
                style="pot"
                selected={selectedCategory === partName}
                onClick={() => handleCategoryClick(partMap[partName], partName)}
              >
                {partName}
              </CategoryButton>
            </div>
          ))}
          <div css={{ marginLeft: "auto" }}>
            <Dropdown options={options} handleChange={handleChange} />
          </div>
        </div>
        <p css={subTitleStyle}>
          원하는 직군을 선택하고 필요한 글을 읽어 보세요!
        </p>
      </div>
      <div css={contentBody}>
        {isLoading ? (
          <Skeleton css={cardStyle} />
        ) : data?.pages && data.pages.length > 0 ? (
          data.pages.map((page, pageIndex) => (
            <div css={contentBody} key={pageIndex}>
              {page.result?.feeds && page.result.feeds.length > 0 ? (
                page.result.feeds.map((item, itemIndex) => {
                  const isLastItem =
                    pageIndex === data.pages.length - 1 &&
                    itemIndex === page.result.feeds.length - 1;
                  return (
                    <div key={item.id} ref={isLastItem ? ref : null}>
                      <PostCard
                        role={item.writerRole}
                        nickname={item.writer}
                        createdAt={item.createdAt}
                        title={item.title}
                        content={item.content}
                        likeCount={item.likeCount}
                      />
                    </div>
                  );
                })
              ) : (
                <p>게시물이 없습니다.</p>
              )}
            </div>
          ))
        ) : (
          <p>게시물이 없습니다.</p>
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
