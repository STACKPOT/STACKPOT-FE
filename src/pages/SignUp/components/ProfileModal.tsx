import { ExplainModal } from "@components/index"
import { nicknameStyle, profileContainer, profileStyle } from "./ProfileModal.style"

interface ProfileModalProps {
    profile: string,
    nickname: string,
    onModalCancel: () => void,
}
const ProfileModal: React.FC<ProfileModalProps> = ({ profile, nickname, onModalCancel }: ProfileModalProps) => {

    const handleNavigateToHome = () => {
        onModalCancel();
        //todo: 홈 페이지로 이동
    }

    return (
        <ExplainModal
            title="가입이 완료되었어요! 완성된 나의 프로필이에요."
            buttonText="메인 홈으로 이동하기"
            onButtonClick={handleNavigateToHome}
            onCancel={onModalCancel}>
            <div css={profileContainer}>
                <img css={profileStyle} src={profile} />
                <p css={nicknameStyle}>{nickname}</p>
            </div>
        </ExplainModal>
    )
}
export default ProfileModal;