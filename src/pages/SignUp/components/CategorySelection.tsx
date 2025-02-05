import { forwardRef, useState } from "react";
import { CategoryButton } from "@components/index";
import {
  categoriesContainer,
  container,
  titleStyle,
} from "./CategorySelection.style";
import { interests, partMap } from "@constants/categories";
import { useFormContext } from "react-hook-form";

interface CategorySelectionProps {
  type: "role" | "interest";
  title: string;
}

const CategorySelection = forwardRef<HTMLDivElement, CategorySelectionProps>(
  ({ type, title }, ref) => {
    const { setValue } = useFormContext();
    const categories = type === "role" ? Object.keys(partMap) : interests;
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
      null
    );

    const handleSelectCategory = (category: string) => {
      setSelectedCategory(category);
      const value = type === "role" ? partMap[category] : category;
      setValue(type, value);
    };

    return (
      <div ref={ref} css={container(type)}>
        <p css={titleStyle}>{title}</p>
        <div css={categoriesContainer}>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              style="pot"
              selected={selectedCategory === category}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </div>
      </div>
    );
  }
);

export default CategorySelection;
