import { ExplainModal } from "@components/index";
import { modalBackgroundStyle, container, profileStyle, nicknameStyle } from "./ProfileModal.style";

interface ProfileModalProps {
    type: "apply" | "member"
    profileImage: string;
    nickname: string;
    onButtonClick: () => void;
    onCancelModal: () => void;
}
const ProfileModal: React.FC<ProfileModalProps> = ({ type, profileImage, nickname, onButtonClick, onCancelModal }: ProfileModalProps) => {
    return (
        <div css={modalBackgroundStyle}>
            <ExplainModal
                title={(type === "apply" && `이 팟에 지원할까요?\n팟 게시자가 회원님의 프로필을 확인할 수 있어요.`) || `나의 팟 지원자의 프로필이에요.\n지원자 마이페이지로 이동할까요?`}
                buttonText={(type === "apply" && "지원하기") || "마이페이지로 이동"}
                onButtonClick={onButtonClick}
                onCancel={onCancelModal}>
                <div css={container}>
                    <img css={profileStyle} src={profileImage} />
                    <p css={nicknameStyle}>{nickname}</p>
                </div>
            </ExplainModal>
        </div>
    )
}
export default ProfileModal;