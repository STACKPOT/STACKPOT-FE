import { CategoryButton, Dropdown, PostCard } from "@components/index";
import { buttonContainer, contentBody, contentHeader } from "./Feed.style";
import { contentTitle, subTitleStyle } from "@pages/Home/Home.style";
import postCardsData from "mocks/postCardsData";
import { useState } from "react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["프론트엔드", "백엔드", "디자인", "기획"];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const options = [
    { label: "최신 순", key: "latest" },
    { label: "인기 순", key: "popular" },
    { label: "오래된 순", key: "oldest" },
  ];

  const handleChange = (key: string) => {
    console.log("선택된 옵션:", key);
  };

  const filteredPostCards = selectedCategory
    ? postCardsData.filter((post) => post.categories.includes(selectedCategory))
    : postCardsData;

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
            <Dropdown
              options={options}
              handleChange={handleChange}
              selectedKey="latest"
            />
          </div>
        </div>
        <p css={subTitleStyle}>
          원하는 직군을 선택하고 필요한 글을 읽어 보세요!
        </p>
      </div>
      <div css={contentBody}>
        {filteredPostCards.map((post) => (
          <PostCard
            key={post.id}
            profileImage={post.profileImage}
            nickname={post.nickname}
            createdAt={post.createdAt}
            title={post.title}
            content={post.content}
            likeCount={post.likeCount}
          />
        ))}
      </div>
    </>
  );
};

export default Feed;
