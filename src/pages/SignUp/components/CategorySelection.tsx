import { CategoryButton } from "@components/index";
import { categoriesContainer, container, titleStyle } from "./CategorySelection.style";
import { useEffect, useState } from "react";

interface CategorySelectionProps {
    type: "stack" | "interest";
    title: string;
    onSelect: (selectedCategory: string | null) => void;
}

const stacks = ["프론트엔드", "백엔드", "디자인", "기획"];
const interests = ["사이드 프로젝트", "공모전", "창업", "네트워킹 행사"];

const CategorySelection: React.FC<CategorySelectionProps> = ({ type, title, onSelect }: CategorySelectionProps) => {
    const [categories, setCategories] = useState<string[]>(type === "stack" ? stacks : interests);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
        onSelect(category);
    }

    return (
        <div css={container(type === "stack" ? "3.6rem" : "2rem")}>
            <p css={titleStyle}>{title}</p>
            <div css={categoriesContainer}>
                {categories.map((category) =>
                    <CategoryButton
                        style="pot"
                        selected={selectedCategory === category}
                        onClick={() => handleSelectCategory(category)}>{category}</CategoryButton>)}
            </div>
        </div>
    )
}
export default CategorySelection;