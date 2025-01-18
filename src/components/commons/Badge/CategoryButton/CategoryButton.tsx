import { useState } from "react";
import { selectedButtonStyle, unselectedButtonStyle } from "./CategoryButton.style"

interface CategoryButtonProps {
    children: string,
    selected: boolean,
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ children, selected, onClick }: CategoryButtonProps) => {
    const [select, setSelect] = useState(selected);

    const handleClick = () => {
        setSelect(!select);
        onClick();
    }
    return (
        <>
            {select ?
                <button css={selectedButtonStyle} onClick={handleClick}>{children}</button> :
                <button css={unselectedButtonStyle} onClick={handleClick}>{children}</button>
            }
        </>
    )
}

export default CategoryButton;