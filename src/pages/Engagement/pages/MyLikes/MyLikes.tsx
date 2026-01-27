import { CategoryButton } from "@components/index";
import { useState } from "react";
import * as styles from "./MyLikes.syls";

type Category = "pot" | "feed";

const MyLikes = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("pot");

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <section css={styles.categoryContainer} aria-label="콘텐츠 유형 선택">
        <CategoryButton
          style="basic"
          onClick={() => handleCategoryClick("pot")}
          selected={selectedCategory === "pot"}
        >
          팟
        </CategoryButton>

        <CategoryButton
          style="basic"
          onClick={() => handleCategoryClick("feed")}
          selected={selectedCategory === "feed"}
        >
          피드
        </CategoryButton>
      </section>
    </div>
  );
};

export default MyLikes;
