import { SaveIcon } from "@assets/svgs";
import { buttonContainer, cardStyle, contentContainer, contentStyle, ddayStyle, nicknameStyle, profileContainer, profileImageStyle, saveContainer, saveTextStyle, titleContainer, titleStyle } from "./PotCard.style";

interface PotCardProps {
    profileImage: string;
    nickname: string;
    dday: number;
    title: string;
    content: string;
    saveCount: number;
}

const PotCard: React.FC<PotCardProps> = ({ profileImage, nickname, dday, title, content, saveCount }: PotCardProps) => {

    return (
        <>
            <div css={cardStyle}>
                <div css={titleContainer}>
                    <div css={profileContainer} >
                        <img css={profileImageStyle} src={profileImage} />
                        <p css={nicknameStyle}>{nickname}</p>
                    </div>
                    <p css={ddayStyle}>D-{dday}</p>
                </div>
                <p css={titleStyle}>{title}</p>
                <div css={contentContainer}>
                    <p css={contentStyle}>{content}</p>
                </div>
                <div css={buttonContainer}>
                    <div css={saveContainer}>
                        <SaveIcon />
                        <p css={saveTextStyle}>{saveCount}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotCard;