import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import potCardsData from "mocks/potCardsData";
import { swiperContainer } from "./PopularPots.style";
import { PotCard } from "@components/index";

const PopularPots = () => {
  return (
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
  );
};

export default PopularPots;
