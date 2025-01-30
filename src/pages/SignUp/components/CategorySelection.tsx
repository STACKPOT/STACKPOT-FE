import { CategoryButton } from "@components/index";
import { categoriesContainer, container, titleStyle } from "./CategorySelection.style";
import { useState } from "react";
import { interests, partMap } from "@constants/categories";

interface CategorySelectionProps {
    type: "stack" | "interest";
    title: string;
    onSelect: (selectedCategory: string | null) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ type, title, onSelect }: CategorySelectionProps) => {
    const categories = (type === "stack") ? Object.keys(partMap) : interests;
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
        onSelect(category);
    }

    return (
        <div css={container(type)}>
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