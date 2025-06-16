import React, { useState } from "react";
import {
  potCardContainer,
  categoryStyle,
  paginationStyle,
  paginationItemStyle,
  categoryButtonWrapper,
  ctaCardWrapper,
  container,
  noDataContainer,
  noDataTextStyle,
} from "./AllPotPage.style";
import PotCard from "@components/cards/PotCard/PotCard";
import useGetPots from "apis/hooks/pots/useGetPots";
import { Pagination, PaginationItem } from "@mui/material";
import { partMap, searchPartMap } from "@constants/categories";
import { Button, CategoryButton, CtaCard } from "@components/index";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

const AllPotPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('전체보기');
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState<string | null>(null);

  const { data } = useGetPots({
    page: currentPage,
    size: 9,
    recruitmentRole: category,
  });

  const handleClick = (partName: string) => {
    setCurrentPage(1);
    setSelectedCategory(partName);
    switch (partName) {
      case '전체보기':
        setCategory(null);
        return;
      case '내가 만든 팟':
        setCategory('MINE');
        return;
      default:
        setCategory(partMap[partName]);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  const handleNavigateToCreatePot = () => {
    navigate(routes.createPot);
    window.scrollTo(0, 0);
  }

  return (
    <div css={container}>
      <div css={categoryStyle}>
        {Object.keys(searchPartMap).concat(['내가 만든 팟']).map((partName) => (
          <div key={partName} css={categoryButtonWrapper}>
            <CategoryButton
              style="pot"
              selected={selectedCategory === partName}
              onClick={() => handleClick(partName)}>
              {partName}
            </CategoryButton>
          </div>
        ))}
      </div>
      <div css={ctaCardWrapper}>
        <CtaCard type="pot" />
      </div>
      {(data && data.pots.length > 0) ?
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
            />
          ))}
        </div>
        :
        <div css={noDataContainer}>
          <p css={noDataTextStyle}>😥{"\n"}생성된 팟이 없어요{"\n"}내 팟을 만들어 볼까요?</p>
          <Button variant="entry" onClick={handleNavigateToCreatePot}>팟 만들기</Button>
        </div>
      }
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
