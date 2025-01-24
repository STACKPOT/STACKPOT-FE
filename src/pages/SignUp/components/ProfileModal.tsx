import { ExplainModal } from "@components/index"
import { modalBackgroundContainer, nicknameStyle, profileContainer, profileStyle } from "./ProfileModal.style"

interface ProfileModalProps {
    profile: string,
    nickname: string,
    onConfirm: () => void,
    onModalCancel: () => void,
}
const ProfileModal: React.FC<ProfileModalProps> = ({ profile, nickname, onConfirm, onModalCancel }: ProfileModalProps) => {
    return (
        <div css={modalBackgroundContainer}>
            <ExplainModal
                title="가입이 완료되었어요! 완성된 나의 프로필이에요."
                buttonText="메인 홈으로 이동하기"
                onButtonClick={onConfirm}
                onCancel={onModalCancel}>
                <div css={profileContainer}>
                    <img css={profileStyle} src={profile} />
                    <p css={nicknameStyle}>{nickname}</p>
                </div>
            </ExplainModal>
        </div>
    )
}
export default ProfileModal;