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

    const updateCategory = (category: string) => {
      const updated = selectedCategory.includes(category)
        ? selectedCategory.filter((item) => item !== category)
        : [...selectedCategory, category];

      setSelectedCategory(updated);

      if (type === "interest") {
        setValue("interest", updated);
      } else if (type === "role") {
        const roles = updated.map((item) => partMap[item]);
        setValue("roles", roles);
      }
    };

    return (
      <div ref={ref} css={container(type)}>
        <p css={titleStyle}>{title}</p>
        <div css={categoriesContainer}>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              selected={selectedCategory.includes(category)}
              onClick={() => updateCategory(category)}
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
