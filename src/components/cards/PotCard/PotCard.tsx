import { SavePostUnfilled } from "@assets/svgs";
import { buttonContainer, cardStyle, contentContainer, contentStyle, nicknameStyle, profileImageStyle, saveContainer, saveTextStyle, timeStyle, titleContainer, titleStyle, titleTextContainer } from "./PotCard.style";

interface PotCardProps {
    profileImage: string;
    nickname: string;
    createdAt: string;
    title: string;
    content: string;
    saveCount: number;
}

const PotCard: React.FC<PotCardProps> = ({ profileImage, nickname, createdAt, title, content, saveCount }: PotCardProps) => {

    return (
        <>
            <div css={cardStyle}>
                <div css={titleContainer}>
                    <img css={profileImageStyle} src={profileImage} />
                    <div css={titleTextContainer}>
                        <p css={nicknameStyle}>{nickname}</p>
                        <p css={timeStyle}>{createdAt}</p>
                    </div>
                </div>
                <p css={titleStyle}>{title}</p>
                <div css={contentContainer}>
                    <p css={contentStyle}>{content}</p>
                </div>
                <div css={buttonContainer}>
                    <div css={saveContainer}>
                        <SavePostUnfilled />
                        <p css={saveTextStyle}>{saveCount}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotCard;