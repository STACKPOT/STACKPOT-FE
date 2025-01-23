import { CloseIcon } from "@assets/svgs";
import { closeIconStyle, descriptionStyle, kakaoIdStyle, memberContainer, membersContainer, modalStyle, nicknameStyle, profileStyle, titleStyle } from "./MemberKakaoIdModal.style";

interface MemberKakaoIdModalProps {
    members: { id: number; profileImage: string, nickname: string, kakaoId: string }[];
}
const MemberKakaoIdModal: React.FC<MemberKakaoIdModalProps> = ({ members }: MemberKakaoIdModalProps) => {
    return (
        <div css={modalStyle}>
            <CloseIcon css={closeIconStyle} />
            <>
                <h1 css={titleStyle}></h1>
                <p css={descriptionStyle}></p>
                <div css={membersContainer}>
                    {members.map((member) =>
                        <div css={memberContainer}>
                            <img css={profileStyle} src={member.profileImage} />
                            <p css={nicknameStyle}>{member.nickname}</p>
                            <p css={kakaoIdStyle}>{member.kakaoId}</p>
                        </div>)}
                </div>
            </>
        </div>
    )
}
export default MemberKakaoIdModal;