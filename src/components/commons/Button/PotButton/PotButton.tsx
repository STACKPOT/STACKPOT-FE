import { blueButtonStyle, redButtonStyle } from "./PotButton.style";

interface PotButtonProps {
    children: string;
    type: string;
    onClick: () => void;
}

const PotButton: React.FC<PotButtonProps> = ({ children, type, onClick }: PotButtonProps) => {
    return (
        <>
            {type == "blue" && <button css={blueButtonStyle} onClick={onClick}>{children}</button>}
            {type == "red" && <button css={redButtonStyle} onClick={onClick}>{children}</button>}
        </>

    )
}

export default PotButton;