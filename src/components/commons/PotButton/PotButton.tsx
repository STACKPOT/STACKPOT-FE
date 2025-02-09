import React from "react";
import { blueButtonStyle, redButtonStyle } from "./PotButton.style";

interface PotButtonProps {
    children: string | React.ReactNode;
    type?: string;
    onClick: () => void;
}

const PotButton: React.FC<PotButtonProps> = ({ children, type, onClick }: PotButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick();
    }
    return (
        <button
            type="button"
            css={type === "red" ? redButtonStyle : blueButtonStyle}
            onClick={handleClick}>{children}</button>
    )
}

export default PotButton;