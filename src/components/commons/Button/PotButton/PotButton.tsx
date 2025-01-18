import { buttonStyle } from "./PotButton.style";

interface PotButtonProps {
    children: string;
}

const PotButton: React.FC<PotButtonProps> = ({ children }: PotButtonProps) => {
    return (
        <button css={buttonStyle}>{children}</button>
    )
}

export default PotButton;