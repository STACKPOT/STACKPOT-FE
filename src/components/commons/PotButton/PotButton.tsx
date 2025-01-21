import { blueButtonStyle, redButtonStyle } from "./PotButton.style";

interface PotButtonProps {
    children: string;
    type?: string;
    onClick: () => void;
}

const PotButton: React.FC<PotButtonProps> = ({ children, type, onClick }: PotButtonProps) => {
    return (
        <button css={type === "red" ? redButtonStyle : blueButtonStyle} onClick={onClick}>{children}</button>
    )
}

export default PotButton;