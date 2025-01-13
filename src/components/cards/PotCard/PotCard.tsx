import { SaveIcon } from "@assets/svgs";
import { buttonContainer, cardStyle, contentStyle, nicknameDdayContainer, nicknameStyle, profileImageStyle, saveContainer, saveTextStyle, titleContainer, titleStyle } from "./PotCard.style";
import DdayBadge from "@components/commons/Badge/DdayBadge/DdayBadge";
import { saveIconUnfilledStyle } from "../PostCard/PostCard.style";

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
                    <img css={profileImageStyle} src={profileImage} />
                    <div css={nicknameDdayContainer} >
                        <p css={nicknameStyle}>{nickname}</p>
                        <DdayBadge days={dday} />
                    </div>
                </div>
                <h1 css={titleStyle}>{title}</h1>
                <p css={contentStyle}>{content}</p>
                <div css={buttonContainer}>
                    <div css={saveContainer}>
                        <SaveIcon css={saveIconUnfilledStyle} />
                        <p css={saveTextStyle}>{saveCount}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotCard;