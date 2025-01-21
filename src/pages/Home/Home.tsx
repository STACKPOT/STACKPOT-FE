import React, { useState } from "react";
import { css } from "@emotion/react";
import theme from "@styles/theme";
import { Banner, MushRoomProfile } from "@assets/images";
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
} from "./Home.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper";

const postCardsData = [
  {
    id: 1,
    profileImage: MushRoomProfile,
    nickname: "너무 착한 버섯",
    createdAt: "2025년 2월 8일 15:20",
    title: "프론트엔드 관련 프로젝트",
    content: "프론트엔드 개발을 같이 진행할 멤버를 찾습니다.",
    likeCount: 8,
    categories: ["프론트엔드"],
  },
  {
    id: 2,
    profileImage: MushRoomProfile,
    nickname: "친절한 디자이너",
    createdAt: "2025년 2월 9일 10:00",
    title: "디자인 컨셉 논의",
    content: "UI/UX 디자인에 관심 있는 분들과 협업하고 싶습니다.",
    likeCount: 12,
    categories: ["디자인"],
  },
  {
    id: 3,
    profileImage: MushRoomProfile,
    nickname: "열정적인 백엔드 개발자",
    createdAt: "2025년 2월 10일 18:00",
    title: "백엔드 서버 구축",
    content: "백엔드 서버를 구축할 팀원을 모집합니다.",
    likeCount: 5,
    categories: ["백엔드"],
  },
  {
    id: 4,
    profileImage: MushRoomProfile,
    nickname: "기획 천재",
    createdAt: "2025년 2월 11일 09:30",
    title: "기획 단계 협업",
    content: "서비스 기획에 함께할 분을 찾고 있습니다.",
    likeCount: 3,
    categories: ["기획"],
  },
];

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
      <img
        src={Banner}
        alt="Banner"
        style={{ width: "90.8rem", height: "21.1rem", marginTop: "2.4rem" }}
      />
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
            pagination={{
              type: "fraction",
            }}
            navigation={true}
          >
            {postCardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <PotCard
                  profileImage={card.profileImage}
                  nickname={card.nickname}
                  dday={0}
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
                <div
                  key={categoryName}
                  onClick={() => handleCategoryClick(categoryName)}
                >
                  <CategoryButton
                    content={categoryName}
                    selected={selectedCategory === categoryName}
                  />
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
