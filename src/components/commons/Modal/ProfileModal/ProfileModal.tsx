import { CloseIcon } from "@assets/svgs";
import { buttonStyle, closeButtonContainer, closeButtonStyle, containerStyle, contentContainerStyle, nicknameStyle, profileContainerStyle, profileStyle, titleProfileContainerStyle, titleStyle } from "./ProfileModal.style";

interface ProfileModalProps {
    title: string;
    profileImage: string;
    nickname: string;
    buttonContent: string;
    onClick: () => void;
    onCancel: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ title, profileImage, nickname, buttonContent, onClick, onCancel }: ProfileModalProps) => {
    return (
        <div css={containerStyle}>
            <div css={closeButtonContainer}>
                <CloseIcon css={closeButtonStyle} onClick={onCancel} />
            </div>
            <div css={contentContainerStyle}>
                <div css={titleProfileContainerStyle}>
                    <p css={titleStyle}>{title}</p>
                    <div css={profileContainerStyle}>
                        <img css={profileStyle} src={profileImage} />
                        <p css={nicknameStyle}>{nickname}</p>
                    </div>
                </div>
                <button css={buttonStyle} onClick={onClick}>{buttonContent}</button>
            </div>
        </div>
    )
}
export default ProfileModal;