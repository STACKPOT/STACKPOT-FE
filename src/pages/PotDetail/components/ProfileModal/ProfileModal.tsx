import { ExplainModal } from "@components/index";
import { container, profileStyle, nicknameStyle } from "./ProfileModal.style";

interface ProfileModalProps {
    type: "apply" | "member"
    profileImage: string;
    nickname: string;
    onButtonClick?: () => void;
    onCancelModal: () => void;
}
const ProfileModal: React.FC<ProfileModalProps> = ({ type, profileImage, nickname, onButtonClick, onCancelModal }: ProfileModalProps) => {
    const handleApply = () => {
        // todo: 지원하기 api 호출
        onCancelModal();
        onButtonClick && onButtonClick();
    }
    const handleMemberProfile = () => {
        // todo: 해당 멤버 페이지로 이동
        onCancelModal();
    }

    return (
        <ExplainModal
            title={(type === "apply" && `이 팟에 지원할까요?\n팟 게시자가 회원님의 프로필을 확인할 수 있어요.`) || `나의 팟 지원자의 프로필이에요.\n지원자 마이페이지로 이동할까요?`}
            buttonText={(type === "apply" && "지원하기") || "지원자 활동 더보기"}
            onButtonClick={(type === "apply" && handleApply) || handleMemberProfile}
            onCancel={onCancelModal}>
            <div css={container}>
                <img css={profileStyle} src={profileImage} alt="profile"/>
                <p css={nicknameStyle}>{nickname}</p>
            </div>
        </ExplainModal>
    )
}
export default ProfileModal;