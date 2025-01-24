import { ArrowLeftRoundIcon } from "@assets/svgs";
import { arrowIconStyle, buttonStyle } from "./ArrowButton.style";

interface ArrowButtonProps {
    direction: "right" | "left";
    onClick: () => void;
}
const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }: ArrowButtonProps) => {
    return (
        <button css={buttonStyle} onClick={onClick}>
            <ArrowLeftRoundIcon css={arrowIconStyle(direction)} />
        </button>
    )
}
export default ArrowButton;