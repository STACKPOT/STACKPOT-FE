import { CloseIcon } from "@assets/svgs";
import { buttonStyle, closeButtonContainer, closeButtonStyle, containerStyle, contentContainerStyle, memberContainerStyle, memberListContainerStyle, nicknameStyle, profileStyle, titleMemberContainerStyle, titleStyle } from "./StartPotModal.style";
import Badge from "@components/commons/Badge/Badge";

interface StartPotModalProps {
    title: string;
    memberList: { profileImage: string, nickname: string, stack: string }[];
    buttonContent: string;
    onClick: () => void;
    onCancel: () => void;
}

const StartPotModal: React.FC<StartPotModalProps> = ({ title, memberList, buttonContent, onClick, onCancel }: StartPotModalProps) => {
    return (
        <div css={containerStyle}>
            <div css={closeButtonContainer}>
                <CloseIcon css={closeButtonStyle} onClick={onCancel} />
            </div>
            <div css={contentContainerStyle}>
                <div css={titleMemberContainerStyle}>
                    <h1 css={titleStyle}>{title}</h1>
                    <div css={memberListContainerStyle}>
                        {memberList.map((member) =>
                            <div css={memberContainerStyle}>
                                <img css={profileStyle} src={member.profileImage} />
                                <p css={nicknameStyle}>{member.nickname}</p>
                                <Badge content={member.stack} />
                            </div>)}
                    </div>
                </div>
                <button css={buttonStyle} onClick={onClick}>{buttonContent}</button>
            </div>
        </div>
    )
}
export default StartPotModal;