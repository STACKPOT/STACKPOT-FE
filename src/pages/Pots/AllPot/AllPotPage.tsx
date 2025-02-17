import React, { useState } from "react";
import {
  potCardContainer,
  categoryStyle,
  paginationStyle,
  paginationItemStyle,
  categoryButtonWrapper,
} from "./AllPotPage.style";
import PotCard from "@components/cards/PotCard/PotCard";
import useGetPots from "apis/hooks/pots/useGetPots";
import { Pagination, PaginationItem } from "@mui/material";
import { partMap } from "@constants/categories";
import { CategoryButton } from "@components/index";

const AllPotPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState<string | null>(null);

  const { data } = useGetPots({
    page: currentPage,
    size: 9,
    recruitmentRole: category,
  });

  const handleClick = (category: string, partName: string) => {
    setCurrentPage(1);
    if (selectedCategory === partName) {
      setSelectedCategory(null);
      setCategory(null);
    } else {
      setSelectedCategory(partName);
      setCategory(category);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div css={categoryStyle}>
        {Object.keys(partMap).map((partName) => (
          <div key={partName} css={categoryButtonWrapper}>
            <CategoryButton
              style="pot"
              selected={selectedCategory === partName}
              onClick={() => handleClick(partMap[partName], partName)}
            >
              {partName}
            </CategoryButton>
          </div>
        ))}
      </div>
      <div css={potCardContainer}>
        {data && data.pots.length > 0 ? (
          data.pots.map((pot, index) => (
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
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </div>
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
    </>
  );
};

export default AllPotPage;
