import React, { useState } from "react";
import { potCardContainer, categoryStyle, categoryButtonWrapper } from "./AllPotPage.style";
import PotCard from "@components/cards/PotCard/PotCard";
import potCardsData from "../../../mocks/potCardsData";
import { CategoryButton } from "@components/index";

const AllPotPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["프론트엔드", "백엔드", "디자인", "기획"];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const filteredCards = selectedCategory
    ? potCardsData.filter((card) => card.categories.includes(selectedCategory))
    : potCardsData;

  return (
    <>
      <div css={categoryStyle}>
        {categories.map((categoryName) => (
          <div
            key={categoryName}
            css={categoryButtonWrapper}
            onClick={() => handleCategoryClick(categoryName)}
          >
            <CategoryButton
              content={categoryName}
              selected={selectedCategory === categoryName}
            />
          </div>
        ))}
      </div>
      <div css={potCardContainer}>
        {filteredCards.map((card, index) => (
          <PotCard
            key={index}
            profileImage={card.profileImage}
            nickname={card.nickname}
            dday={card.dday}
            title={card.title}
            content={card.content}
            categories={card.categories}
          />
        ))}
      </div>
    </>
  );
};

export default AllPotPage;
