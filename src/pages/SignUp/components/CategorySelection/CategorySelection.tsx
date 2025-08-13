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
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

    const handleSelectCategory = (category: string) => {
      if (type === "interest") {
        setSelectedCategory((prev) => {
          const updated = prev.includes(category)
            ? prev.filter((item) => item !== category)
            : [...prev, category];
          setValue("interest", updated);
          return updated;
        });
      } else if (type === "role") {
        setSelectedCategory([category]);
        setValue("role", partMap[category]);
      }
    };

    return (
      <div ref={ref} css={container(type)}>
        <p css={titleStyle}>{title}</p>
        <div css={categoriesContainer}>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              style="pot"
              selected={selectedCategory.includes(category)}
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
