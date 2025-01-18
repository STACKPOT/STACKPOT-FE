import { CheckIcon, PostIconRight } from "@assets/svgs";
import { applicantContainer, applicantInnerContainerStyle, checkBoxStyle, nextButtonStyle, nicknameStyle, profileNicknameContainer, profileStyle } from "./ApplicantCard.style";

interface ApplicantCardProps {
    selected: boolean;
    profileImage: string,
    nickname: string,
    onSelect: () => void,
    onClickMore: () => void,
}

const ApplicantCard: React.FC<ApplicantCardProps> = ({ selected, profileImage, nickname, onSelect, onClickMore }: ApplicantCardProps) => {
    return (
        <div css={applicantContainer}>
            <div css={applicantInnerContainerStyle}>
                <div css={profileNicknameContainer}>
                    <button css={checkBoxStyle} onClick={onSelect}>
                        {selected && <CheckIcon />}
                    </button>
                    <img css={profileStyle} src={profileImage} />
                    <p css={nicknameStyle}>{nickname}</p>
                </div>
                <PostIconRight css={nextButtonStyle} onClick={onClickMore} />
            </div>
        </div>
    )
}
export default ApplicantCard;