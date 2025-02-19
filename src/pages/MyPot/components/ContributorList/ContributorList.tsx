import { contributorButtonOuterContainer, contributorButtonStyle, contributorButtonInnerContainer, nicknameStyle, profileImageStyle } from "./ContributorList.style";
import { useParams } from "react-router-dom";
import { useGetMyPotMembers } from "apis/hooks/myPots/useGetMyPotMemeber";
import { MushroomImage } from "@assets/images";

const ContributorList: React.FC = () => {
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId);
  const { data } = useGetMyPotMembers({ potId: potIdNumber });

  return(
    <div css={contributorButtonOuterContainer}>
      {data?.result?.map((member) => (
        <div key={member.potMemberId} css={contributorButtonStyle(false)}>
          <div css={contributorButtonInnerContainer}>
            <img src={MushroomImage} alt="프로필 이미지" css={profileImageStyle} />
            <div css={nicknameStyle}>{member.nickname}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContributorList;
