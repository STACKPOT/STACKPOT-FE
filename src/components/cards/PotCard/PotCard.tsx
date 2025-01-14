import Badge from "@components/commons/Badge/Badge";
import { cardStyle, contentStyle, nicknameDdayContainer, nicknameStyle, profileImageStyle, titleContainer, titleStyle } from "./PotCard.style";
import theme from "@styles/theme";

interface PotCardProps {
    profileImage: string;
    nickname: string;
    dday: number;
    title: string;
    content: string;
    saveCount: number;
}

const PotCard: React.FC<PotCardProps> = ({ profileImage, nickname, dday, title, content }: PotCardProps) => {

    return (
        <>
            <div css={cardStyle}>
                <div css={titleContainer}>
                    <img css={profileImageStyle} src={profileImage} />
                    <div css={nicknameDdayContainer} >
                        <p css={nicknameStyle}>{nickname}</p>
                        <Badge content={`D-${dday}`} color={theme.color.point.normal}/>
                    </div>
                </div>
                <h1 css={titleStyle}>{title}</h1>
                <p css={contentStyle}>{content}</p>
            </div>
        </>
    )
}

export default PotCard;