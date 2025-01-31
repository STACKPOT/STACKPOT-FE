import { PotIcon } from "@assets/svgs";
import { container, content, contentHeader, iconStyle } from "./MyPot.style";

const MyPot: React.FC = () => {
  return (
    <div css={container}>
      <div css={content}>
        <div css={contentHeader}>
          <p>나의 팟</p>
          <PotIcon css={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default MyPot;
