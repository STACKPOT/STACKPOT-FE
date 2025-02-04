import { selectedButtonStyle, unselectedButtonStyle } from "./CategoryButton.style"
interface CategoryButtonProps {
    content: string,
    selected: boolean
}
const CategoryButton: React.FC<CategoryButtonProps> = ({ content, selected }: CategoryButtonProps) => {
    return (
        <>
            {selected ?
                <button css={selectedButtonStyle}>{content}</button> : <button css={unselectedButtonStyle}>{content}</button>
            }
        </>
    )
}
export default CategoryButton;