import { CloseIcon } from "@assets/svgs";
import { closeIconStyle, container, descriptionBlueStyle, descriptionStyle, kakaoIdStyle, memberContainer, membersContainer, modalBackgroundStyle, modalStyle, nicknameIdContainer, nicknameStyle, profileStyle, titleStyle } from "./MemberKakaoIdModal.style";
import useGetPotMembers from "apis/hooks/pots/useGetPotMembers";
import { roleImages } from "@constants/roleImage";
import { useEffect, useState } from "react";

interface MemberKakaoIdModalProps {
    potId: number;
    onModalCancel: () => void;
}
const MemberKakaoIdModal: React.FC<MemberKakaoIdModalProps> = ({ potId, onModalCancel }: MemberKakaoIdModalProps) => {
    const { data: members } = useGetPotMembers(potId);
    const [ownerNickname, setOwnerNickname] = useState<string>("팀장");

    useEffect(() => {
        if (members) {
            setOwnerNickname(members.find(member => member.owner)?.nickname || "팀장")
        }
    }, [members])

    return (
        <div css={modalBackgroundStyle}>
            <div css={modalStyle}>
                <CloseIcon css={closeIconStyle} onClick={onModalCancel} type="button" />
                <div css={container}>
                    <h1 css={titleStyle}>팀원 카카오톡 아이디를 알려드립니다.</h1>
                    <p css={descriptionStyle}>팀장인 <span css={descriptionBlueStyle}>{ownerNickname}</span>은 업무별 현황 페이지 상단에서 확인 가능합니다.</p>
                    <div css={membersContainer}>
                        {members && members.map((member) =>
                            <div css={memberContainer}>
                                <img css={profileStyle} src={roleImages[member.potRole]} alt="profile" />
                                <div css={nicknameIdContainer}>
                                    <p css={nicknameStyle}>{member.nickname}</p>
                                    <p css={kakaoIdStyle}>{member.kakaoId}</p>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MemberKakaoIdModal;