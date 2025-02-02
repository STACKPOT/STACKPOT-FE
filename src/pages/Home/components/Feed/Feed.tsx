import { CategoryButton, Dropdown, PostCard } from "@components/index";
import { buttonContainer, contentBody, contentHeader } from "./Feed.style";
import { contentTitle, subTitleStyle } from "@pages/Home/Home.style";
import { useState } from "react";
import { categories } from "@constants/categories";
import useGetFeeds from "apis/hooks/feeds/useGetFeeds";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("new");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const options = [
    { label: "최신 순", key: "new" },
    { label: "인기 순", key: "popular" },
    { label: "오래된 순", key: "old" },
  ];

  const handleChange = (key: string) => {
    setSort(key);
  };

  const { data } = useGetFeeds({
    category: selectedCategory || "ALL",
    sort: sort,
    limit: 10,
    cursor: "",
  });

  return (
    <>
      <div css={contentHeader}>
        <div css={contentTitle}>
          <p>피드</p>
        </div>
        <div css={buttonContainer}>
          {categories.map((categoryName) => (
            <div key={categoryName} css={categories}>
              <CategoryButton
                style="pot"
                selected={selectedCategory === categoryName}
                onClick={handleCategoryClick}
              >
                {categoryName}
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
        {data?.feeds && data.feeds.length > 0 ? (
          data.feeds.map((item) => (
            <PostCard
              key={item.id}
              role={item.writerRole}
              nickname={item.writer}
              createdAt={item.createdAt}
              title={item.title}
              content={item.content}
              likeCount={item.likeCount}
            />
          ))
        ) : (
          <p>게시물이 없습니다.</p>
        )}
      </div>
    </>
  );
};

export default Feed;
