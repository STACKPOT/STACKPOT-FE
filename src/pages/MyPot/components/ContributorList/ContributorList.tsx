import {
  contributorButtonOuterContainer,
  contributorButtonStyle,
  contributorButtonInnerContainer,
  nicknameStyle,
  profileImageStyle,
} from "./ContributorList.style";
import { useParams } from "react-router-dom";
import { useGetMyPotMembers } from "apis/hooks/myPots/useGetMyPotMemeber";
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role";

interface ContributorListProps {
  participants: number[];
  setSelectedParticipants: (memberId: number) => void;
}

const ContributorList: React.FC<ContributorListProps> = ({
  participants,
  setSelectedParticipants,
}) => {
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId);
  const { data } = useGetMyPotMembers({ potId: potIdNumber });

  return (
    <div key={JSON.stringify(participants)} css={contributorButtonOuterContainer}>
      {data?.result?.map((member) => {
        const isSelected = participants.includes(member.potMemberId);
        const profileImage = roleImages[member.potRole as Role] || roleImages.DEFAULT;
        return (
          <div
            key={member.potMemberId}
            css={contributorButtonStyle(isSelected)}
            onClick={() => setSelectedParticipants(member.potMemberId)}
          >
            <div css={contributorButtonInnerContainer}>
              <img src={profileImage} alt="프로필 이미지" css={profileImageStyle} />
              <div css={nicknameStyle}>{member.nickname}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
  
};

export default ContributorList;
