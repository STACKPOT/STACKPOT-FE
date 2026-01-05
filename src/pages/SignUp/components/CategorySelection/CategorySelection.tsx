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
      if (type === "interest") {
        setSelectedCategory((prev) => {
          const updated = prev.includes(category)
            ? prev.filter((item) => item !== category)
            : [...prev, category];
          setValue("interest", updated, {
            shouldValidate: true,
            shouldDirty: true,
          });
          return updated;
        });
      } else if (type === "role") {
        setSelectedCategory([category]);
        setValue("roles", [partMap[category]], {
          shouldValidate: true,
          shouldDirty: true,
        });
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
