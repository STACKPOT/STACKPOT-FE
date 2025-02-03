import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  buttonContainer,
  buttonStyle,
  iconStyle,
  pageNumberStyle,
  swiperContainer,
} from "./PopularPots.style";
import { PotCard } from "@components/index";
import useGetPots from "apis/hooks/pots/useGetPots";
import { useState } from "react";
import { LeftIcon } from "@assets/svgs";
import Skeleton from "react-loading-skeleton";
import { cardStyle } from "@components/cards/PotCard/PotCard.style";

const PopularPots = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetPots({ page: currentPage, size: 3 });

  const totalPages = data?.totalPages || 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {data?.pots?.length == 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <>
          <Swiper
            css={swiperContainer}
            modules={[Pagination, Navigation]}
            centeredSlides={false}
            spaceBetween={16}
            slidesPerView={3}
            slidesPerGroup={3}
            navigation={true}
          >
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <div css={cardStyle}>
                      <Skeleton />
                    </div>
                  </SwiperSlide>
                ))
              : data?.pots.map((pot) => (
                  <SwiperSlide key={pot.userId}>
                    <PotCard
                      id={pot.userId}
                      role={pot.userRole}
                      nickname={pot.userNickname}
                      dday={pot.dday}
                      title={pot.potName}
                      content={pot.potContent}
                      categories={pot.recruitmentRoles}
                    />
                  </SwiperSlide>
                ))}
            <div css={buttonContainer}>
              <button
                type="button"
                css={buttonStyle}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <LeftIcon />
              </button>
              <p css={pageNumberStyle}>
                {currentPage} / {totalPages}
              </p>
              <button
                type="button"
                css={buttonStyle}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <LeftIcon css={iconStyle} />
              </button>
            </div>
          </Swiper>
        </>
      )}
    </>
  );
};

export default PopularPots;
