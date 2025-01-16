import Badge from "@components/commons/Badge/Badge";
import { cardStyle, categoriesContainer, contentStyle, nicknameDdayContainer, nicknameStyle, profileImageStyle, titleContainer, titleStyle } from "./PotCard.style";
import theme from "@styles/theme";

interface PotCardProps {
    profileImage: string;
    nickname: string;
    dday: number;
    title: string;
    content: string;
    categories: string[];
}

const PotCard: React.FC<PotCardProps> = ({ profileImage, nickname, dday, title, content, categories }: PotCardProps) => {

    return (
        <>
            <div css={cardStyle}>
                <div css={titleContainer}>
                    <img css={profileImageStyle} src={profileImage} />
                    <div css={nicknameDdayContainer} >
                        <p css={nicknameStyle}>{nickname}</p>
                        <Badge content={`D-${dday}`} backgroundColor={theme.color.base.white} borderColor={theme.color.feedback.negative} textColor={theme.color.feedback.negative} />
                    </div>
                </div>
                <h1 css={titleStyle}>{title}</h1>
                <p css={contentStyle}>{content}</p>
                <div css={categoriesContainer}>
                    {categories.map((category) => <Badge content={category} backgroundColor={theme.color.point.normal} borderColor="rgba(112, 115, 124, 0.20)" textColor={theme.color.base.white} />)}
                </div>
            </div>
        </>
    )
}

export default PotCard;