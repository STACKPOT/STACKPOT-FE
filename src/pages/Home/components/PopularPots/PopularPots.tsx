import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { buttonContainer, swiperContainer } from "./PopularPots.style";
import { PotCard } from "@components/index";
import useGetPots from "apis/hooks/pots/useGetPots";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { cardStyle } from "@components/cards/PotCard/PotCard.style";
import "react-loading-skeleton/dist/skeleton.css";
import PaginationButton from "@components/commons/Pagination/Pagination";

const PopularPots = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetPots({
    page: 1,
    size: 9,
    recruitmentRole: null,
    onlyMine: false,
  });

  const pots = data?.pots ?? [];
  const totalPages = Math.ceil(pots.length / 3);
  const currentPots = pots.slice((currentPage - 1) * 3, currentPage * 3);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {data?.pots?.length == 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <>
          <Swiper
            css={swiperContainer}
            key={currentPage}
            modules={[Pagination, Navigation]}
            centeredSlides={false}
            spaceBetween={16}
            slidesPerView={3}
            slidesPerGroup={3}
            observer={true}
            observeParents={true}
          >
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SwiperSlide key={`skeleton-${index}`}>
                    <Skeleton css={cardStyle} />
                  </SwiperSlide>
                ))
              : currentPots.map((pot) => (
                  <SwiperSlide key={pot.potId}>
                    <PotCard
                      userId={pot.userId}
                      potId={pot.potId}
                      role={pot.userRole}
                      nickname={pot.userNickname}
                      dday={pot.dday}
                      title={pot.potName}
                      content={pot.potContent}
                      categories={pot.recruitmentRoles}
                      isSaved={pot.isSaved}
                      potSaveCount={pot.potSaveCount}
                    />
                  </SwiperSlide>
                ))}
            <div css={buttonContainer}>
              <PaginationButton
                currentPage={currentPage}
                totalPages={totalPages}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </div>
          </Swiper>
        </>
      )}
    </>
  );
};

export default PopularPots;
