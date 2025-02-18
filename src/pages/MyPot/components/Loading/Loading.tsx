import { iconContainer, iconStyle } from "../../../Home/components/Feed/Feed.style";
import { LoadingSpinnerIcon } from "@assets/svgs";

const Loading: React.FC = () => {
    return (
        <div css={iconContainer}>
            <LoadingSpinnerIcon css={iconStyle} />
        </div>
    );
};

export default Loading;
