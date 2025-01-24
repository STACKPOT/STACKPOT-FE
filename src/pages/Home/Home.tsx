import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "@styles/theme";
import { Banner } from "@assets/images";
import postCardsData from "mocks/postCardsData";
import potCardsData from "mocks/potCardsData";
import { PotIcon } from "@assets/svgs";
import {
  PotCard,
  CategoryButton,
  Dropdown,
  PostCard,
  FloatingButton,
} from "@components/index";
import {
  container,
  content,
  swiperContainer,
  contentTitle,
  buttonContainer,
  contentHeader,
  contentBody,
  iconStyle,
  bannerStyle,
} from "./Home.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper";

const Home: React.FC = () => {
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
    <main>
      <img css={bannerStyle} src={Banner} alt="Banner" />
      <div css={container}>
        <div css={content}>
          <div css={contentTitle}>
            <p>실시간 인기 팟</p>
            <PotIcon css={iconStyle} />
          </div>

          <Swiper
            css={swiperContainer}
            modules={[Pagination, Navigation]}
            centeredSlides={false}
            spaceBetween={16}
            slidesPerView={3}
            slidesPerGroup={3}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
          >
            {potCardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <PotCard
                  profileImage={card.profileImage}
                  nickname={card.nickname}
                  dday={card.dday}
                  title={card.title}
                  content={card.content}
                  categories={card.categories}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div css={content}>
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
            <p
              css={css`
                color: ${theme.color.object.assistive};
                ${theme.font.caption3};
              `}
            >
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
        </div>
      </div>
      <FloatingButton />
    </main>
  );
};

export default Home;
