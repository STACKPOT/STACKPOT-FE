import React, { useState } from "react";
import {
  potCardContainer,
  categoryStyle,
  paginationStyle,
  paginationItemStyle,
  categoryButtonWrapper,
  ctaCardWrapper,
  container,
} from "./AllPotPage.style";
import PotCard from "@components/cards/PotCard/PotCard";
import useGetPots from "apis/hooks/pots/useGetPots";
import { Pagination, PaginationItem } from "@mui/material";
import { partMap, searchPartMap } from "@constants/categories";
import { CategoryButton, CtaCard, NoData } from "@components/index";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

const AllPotPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("전체보기");
  const [isMyPot, setIsMyPot] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const accessToken = localStorage.getItem("accessToken");

  const { data } = useGetPots({
    page: currentPage,
    size: 9,
    recruitmentRoles: partMap[selectedCategory] ?? null,
    onlyMine: isMyPot,
  });

  const handleClick = (partName: string) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken || partName !== "내가 만든 팟") {
      setCurrentPage(1);
      setSelectedCategory(partName);
      setIsMyPot(partName === "내가 만든 팟");
    }
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  const handleNavigateToCreatePot = () => {
    navigate(routes.createPot);
    window.scrollTo(0, 0);
  };

  return (
    <div css={container}>
      <div css={categoryStyle}>
        {(accessToken
          ? Object.keys(searchPartMap).concat(["내가 만든 팟"])
          : Object.keys(searchPartMap)
        ).map((partName) => (
          <div key={partName} css={categoryButtonWrapper}>
            <CategoryButton
              style={partName === "내가 만든 팟" ? "background" : "basic"}
              selected={selectedCategory === partName}
              onClick={() => handleClick(partName)}
            >
              {partName}
            </CategoryButton>
          </div>
        ))}
      </div>
      <div css={ctaCardWrapper}>
        <CtaCard type="pot" />
      </div>
      {data && data.pots.length > 0 ? (
        <div css={potCardContainer}>
          {data.pots.map((pot, index) => (
            <PotCard
              key={index}
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
          ))}
        </div>
      ) : (
        <NoData
          message={`😥\n생성된 팟이 없어요\n내 팟을 만들어 볼까요?`}
          buttonText="팟 만들기"
          onClickButton={handleNavigateToCreatePot}
        />
      )}

      <Pagination
        count={data?.totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
        css={paginationStyle}
        renderItem={(item) => (
          <PaginationItem {...item} css={paginationItemStyle} />
        )}
      />
    </div>
  );
};

export default AllPotPage;
