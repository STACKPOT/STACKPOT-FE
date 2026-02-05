import { CategoryButton } from "@components/index";
import * as styles from "./MySaves.styles";
import { useState } from "react";
import MySavedFeeds from "@pages/Engagement/pages/MySaves/components/MySavedFeeds/MySavedFeeds";
import MySavedPots from "@pages/Engagement/pages/MySaves/components/MySavedPots/MySavedPots";

type Category = "pot" | "feed";

const TABS = [
  { key: "pot" as const, label: "팟" },
  { key: "feed" as const, label: "피드" },
];

const MySaves = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("pot");

  return (
    <>
      <section css={styles.categoryContainer} aria-label="콘텐츠 유형 선택">
        {TABS.map((t) => (
          <CategoryButton
            key={t.key}
            style="basic"
            onClick={() => setSelectedCategory(t.key)}
            selected={selectedCategory === t.key}
          >
            {t.label}
          </CategoryButton>
        ))}
      </section>

      {selectedCategory === "pot" && <MySavedPots />}
      {selectedCategory === "feed" && <MySavedFeeds />}
    </>
  );
};

export default MySaves;
