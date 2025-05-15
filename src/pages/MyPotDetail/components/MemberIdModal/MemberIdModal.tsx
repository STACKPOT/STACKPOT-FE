import { CloseIcon } from "@assets/svgs";
import {
  cancelContainer,
  cancelIconStyle,
  gridContainer,
  innerContainer,
  mainContainer,
  memberSetStyle,
  nicknameIdContainer,
  nickNameTextStyle,
  profileImageStyle,
  subContainer,
  titleTextStyle
} from "./MemberIdModal.style";
import { useParams } from "react-router-dom";
import { useGetMyPotMembers } from "apis/hooks/myPots/useGetMyPotMemeber";
import { kakaoIdStyle } from "@pages/PotDetail/components/MemberKakaoIdModal/MemberKakaoIdModal.style";
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role"; 

interface MemberIdModalProps {
  onClose: () => void;
}

const MemberIdModal: React.FC<MemberIdModalProps> = ({ onClose }) => {
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId);
  const { data } = useGetMyPotMembers({ potId: potIdNumber });

  return (
    <div css={mainContainer}>
      <div css={cancelContainer}>
        <CloseIcon css={cancelIconStyle} onClick={onClose} />
      </div>
      <div css={innerContainer}>
        <div css={subContainer}>
          <p css={titleTextStyle}>팀원 카카오톡 아이디를 알려드립니다.</p>
        </div>
        <div css={gridContainer}>
          {data?.result
            ?.filter((member) => !member.owner)
            .map((member) => {
              const profileImage = roleImages[member.potRole as Role] || roleImages.DEFAULT;

              return (
                <div key={member.potMemberId} css={memberSetStyle}>
                  <img src={profileImage} alt="프로필 이미지" css={profileImageStyle} />

                  <div css={nicknameIdContainer}>
                    <p css={nickNameTextStyle}>{member.nickname}</p>
                    <p css={kakaoIdStyle}>{member.kakaoId}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MemberIdModal;
