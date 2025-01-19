import { selectedButtonStyle, unselectedButtonStyle } from "./CategoryButton.style"

interface CategoryButtonProps {
    children: string,
    selected: boolean,
    onClick: (category: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ children, selected, onClick }: CategoryButtonProps) => {
    return (
        <button css={selected ? selectedButtonStyle : unselectedButtonStyle} onClick={() => onClick(children)}>{children}</button>
    )
}

export default CategoryButton;