import { selectedBadgeStyle, unselectedBadgeStyle } from "./CategoryBadge.style"

interface CategoryBadgeProps {
    content: string,
    selected: boolean
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ content, selected }: CategoryBadgeProps) => {
    return (
        <>
            {selected ?
                <div css={selectedBadgeStyle}>{content}</div> : <div css={unselectedBadgeStyle}>{content}</div>
            }
        </>
    )
}

export default CategoryBadge;