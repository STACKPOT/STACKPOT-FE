import React from "react";
import { css } from "@emotion/react";
import theme from "@styles/theme";
import { PotColoredIcon } from "@assets/svgs";
import { MushRoomProfile } from "@assets/images";
import { PotCard, CategoryButton, Dropdown } from "@components/index";
import {
  container,
  content,
  swiperContainer,
  contentTitle,
  buttonContainer,
  contentHeader,
  contentBody,
} from "./Home.style";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper";

const potCardsData = [
  {
    dday: 5,
    profileImage: MushRoomProfile,
    nickname: "아아 마시는 버섯",
    title: "AI 자동화 챗봇 어플 공부할 스터디원",
    content:
      "스터디의 자세한 내용은 여기에 보입니다. 최대 두 줄만 보이는 것이 좋을 것 같습니다.",
    saveCount: 8,
  },
  {
    dday: 12,
    profileImage: MushRoomProfile,
    nickname: "차분한 탐험가",
    title: "독서 앱 서비스 사이드 프로젝트 해요",
    content: "책과 함께하는 독서 프로젝트 멤버를 찾습니다.",
    saveCount: 15,
  },
  {
    dday: 2,
    profileImage: MushRoomProfile,
    nickname: "데이터 분석가",
    title: "공공 데이터 기반 약 관리 앱",
    content:
      "공공 데이터를 활용한 약 관리 시스템 프로젝트에 관심이 있다면 참여하세요.",
    saveCount: 10,
  },
  {
    dday: 2,
    profileImage: MushRoomProfile,
    nickname: "데이터 분석가",
    title: "공공 데이터 기반 약 관리 앱",
    content:
      "공공 데이터를 활용한 약 관리 시스템 프로젝트에 관심이 있다면 참여하세요.",
    saveCount: 10,
  },
];

const options = [
  { label: "최신 순", key: "latest" },
  { label: "인기 순", key: "popular" },
  { label: "오래된 순", key: "oldest" },
];

const handleChange = (key: string) => {
  console.log("선택된 옵션:", key); // 선택된 옵션 출력
};

const Home: React.FC = () => {
  return (
    <main>
      <div css={container}>
        <div css={content}>
          <div css={contentTitle}>
            <p>실시간 인기 팟</p>
            <PotColoredIcon />
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
            navigation
          >
            {potCardsData.map((pot, index) => (
              <SwiperSlide key={index}>
                <PotCard
                  dday={pot.dday}
                  profileImage={pot.profileImage}
                  nickname={pot.nickname}
                  title={pot.title}
                  content={pot.content}
                  saveCount={pot.saveCount}
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
              <CategoryButton content="프론트엔드" selected={true} />
              <CategoryButton content="백엔드" selected={true} />
              <CategoryButton content="디자인" selected={true} />
              <CategoryButton content="기획" selected={true} />
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
            {/* <PostCard
              profileImage={MushRoomProfile}
              nickname="너무 착한 버섯"
              createdAt="2025년 2월 8일 15:20"
              title="메인 제목은 여기 입력할 수 있습니다"
              content="국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다. 사법권은 법관으로 구성된 법원에 속한다."
              likeCount={8}
              saveCount={3}
            />
            <PostCard
              profileImage={MushRoomProfile}
              nickname="너무 착한 버섯"
              createdAt="2025년 2월 8일 15:20"
              title="메인 제목은 여기 입력할 수 있습니다"
              content="국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다. 사법권은 법관으로 구성된 법원에 속한다."
              likeCount={8}
              saveCount={3}
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
