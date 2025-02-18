import { CloseIcon } from "@assets/svgs";
import { cancelContainer, cancelIconStyle, contentTextStyle, gridContainer, highlightStyle, innerContainer, mainContainer, memberSetStyle, nicknameIdContainer, nickNameTextStyle, profileImageStyle, subContainer, titleTextStyle } from "./MemberIdModal.style";
import { useParams } from "react-router-dom";
import { useGetMyPotaMembers } from "apis/hooks/myPots/useGetMyPotMemeber";
import { MushroomImage } from "@assets/images";
import { kakaoIdStyle } from "@pages/PotDetail/components/MemberKakaoIdModal/MemberKakaoIdModal.style";

interface MemberIdModalProps {
  onClose: () => void;
}

const MemberIdModal: React.FC<MemberIdModalProps> = ({ onClose }) => {
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId);
  const { data } = useGetMyPotaMembers({ potId: potIdNumber });

  return (
    <div css={mainContainer}>
      <div css={cancelContainer}>
        <CloseIcon css={cancelIconStyle} onClick={onClose}/>
      </div>
      <div css={innerContainer}>
        <div css={subContainer}>
          <p css={titleTextStyle}>팀원 카카오톡 아이디를 알려드립니다.</p>
          <p css={contentTextStyle}>
            팀장인 <span css={highlightStyle}>{data?.result?.[0]?.nickname ?? ""}</span>은
            업무별 현황 페이지 상단에서 확인 가능합니다.
          </p>
        </div>
        <div css={gridContainer}>
          {data?.result?.slice(1).map((member) => (
            <div key={member.potMemberId} css={memberSetStyle}>
              <img src={MushroomImage} alt="프로필 이미지" css={profileImageStyle} />
        
              <div css={nicknameIdContainer}>
                <p css={nickNameTextStyle}>{member.nickname}</p>
                <p css={kakaoIdStyle}>{member.kakaoId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberIdModal;