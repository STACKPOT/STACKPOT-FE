import { CategoryButton } from "@components/index";
import { useFormContext, useWatch } from "react-hook-form";
import {
  categoryContainer,
  content,
  contentHeader,
} from "./CategorySelection.style";
import { interests, partMap } from "@constants/categories";
interface CategorySelectionProps {
  type: "roles" | "interest";
  title: string;
}

const CategorySelection = ({ type, title }: CategorySelectionProps) => {
  const { control, setValue } = useFormContext<{ interest: string[]; roles: string[] }>();
  const roles = useWatch({ control, name: "roles", defaultValue: [] });
  const interest = useWatch({ control, name: "interest", defaultValue: [] });
  const categories = type === "roles" ? Object.keys(partMap) : interests;
  const selectedCategory = type === "roles" ? roles : interest;

  const handleSelectCategory = (category: string) => {
    const categoryEnum = type === "roles" ? partMap[category] : category;

    const updated = selectedCategory.includes(categoryEnum)
      ? selectedCategory.filter((item) => item !== categoryEnum)
      : [...selectedCategory, categoryEnum];

    setValue(type, updated);
  };

  return (
    <div css={content(false)}>
      <div css={contentHeader}>
        <div>{title}</div>
        <div css={categoryContainer}>
          {categories.map((item) => (
            <div key={item}>
              <CategoryButton
                selected={
                  type === "roles"
                    ? selectedCategory.includes(partMap[item])
                    : selectedCategory.includes(item)
                }
                onClick={() => handleSelectCategory(item)}
              >
                {item}
              </CategoryButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategorySelection;
