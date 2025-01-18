import { PostIconRight } from "@assets/svgs";
import { container, innerContainer, nextButtonStyle, nicknameStyle, profileNicknameContainer, profileStyle } from "./ApplicantCard.style";
import CheckBox from "@components/commons/Button/CheckBox/CheckBox";

interface ApplicantCardProps {
    selected: boolean,
    profileImage: string,
    nickname: string,
    onSelect: () => void,
    onClickMore: () => void,
}

const ApplicantCard: React.FC<ApplicantCardProps> = ({ selected, profileImage, nickname, onSelect, onClickMore }: ApplicantCardProps) => {
    return (
        <div css={container}>
            <div css={innerContainer}>
                <div css={profileNicknameContainer}>
                    <CheckBox selected={selected} onSelect={onSelect} />
                    <img css={profileStyle} src={profileImage} />
                    <p css={nicknameStyle}>{nickname}</p>
                </div>
                <PostIconRight css={nextButtonStyle} onClick={onClickMore} />
            </div>
        </div>
    )
}
export default ApplicantCard;