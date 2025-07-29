import { WandStarIcon } from "@assets/svgs";
import { buttonStyle } from "./AiButton.style";

interface AiButtonProps {
  onClick: () => void;
}

const AiButton: React.FC<AiButtonProps> = ({ onClick }: AiButtonProps) => {
  return (
    <div role="button" css={buttonStyle} onClick={onClick}>
      <WandStarIcon />
      AI 요약
    </div>
  );
};

export default AiButton;
