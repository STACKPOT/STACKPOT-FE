import { PostIconRight } from "@assets/svgs";
import { container, innerContainer, nextButtonStyle, nicknameStyle, profileNicknameContainer, profileStyle } from "./Applicant.style";
import CheckBox from "@components/commons/Button/CheckBox/CheckBox";

interface ApplicantProps {
    selected: boolean,
    profileImage: string,
    nickname: string,
    onSelect: () => void,
    onClickMore: () => void,
}

const Applicant: React.FC<ApplicantProps> = ({ selected, profileImage, nickname, onSelect, onClickMore }: ApplicantProps) => {
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
export default Applicant;