import { CategoryButton } from "@components/index";
import { categoriesContainer, container, titleStyle } from "./CategorySelection.style";

interface CategorySelectionProps {
    title: string,
    gap: string,
    categories: string[],
    selectedCategories: string[],
    onSelect: (category: string) => void,
}
const CategorySelection: React.FC<CategorySelectionProps> = ({ title, gap, categories, selectedCategories, onSelect }: CategorySelectionProps) => {
    return (
        <div css={container(gap)}>
            <p css={titleStyle}>{title}</p>
            <div css={categoriesContainer}>
                {categories.map((category) =>
                    <CategoryButton
                        selected={selectedCategories.includes(category)}
                        onClick={(content: string) => onSelect(content)}>{category}</CategoryButton>)}
            </div>
        </div>
    )
}
export default CategorySelection;