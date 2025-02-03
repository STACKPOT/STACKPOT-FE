import { PotIcon } from "@assets/svgs";
import { contributorButtonOuterContainer, contributorButtonStyle, contributorButtonInnerContainer, nicknameStyle } from "./ContributorList.style";

const ContributorList: React.FC = () => (
  <div css={contributorButtonOuterContainer}>
    {Array.from({ length: 8 }, (_, index) => (
      <div key={index} css={contributorButtonStyle(false)}>
        <div css={contributorButtonInnerContainer}>
          <PotIcon />
          <div css={nicknameStyle}>너무 착한 브로콜리</div>
        </div>
      </div>
    ))}
  </div>
);

export default ContributorList;
