import { CalendarIcon, MeatballIcon } from "@assets/svgs"
import { cardStyle, contentTextStyle, dateContainer, dateTextStyle, innerContaienr, lineStyle, moreButtonContainer, nicknameStyle, profileContainer, profileImageStyle, titleContainer, titleTextStyle } from "./TaskCard.style"
import MemberGroup from "@components/commons/Badge/MemberGroup/MemberGroup"
import Badge from "@components/commons/Badge/Badge"
import theme from "@styles/theme"

interface TaskCardProps {
    title: string,
    dday: number,
    content: string,
    date: string,
    profileImage: string,
    nickname: string,
    groupProfileImages: string[]
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dday, content, date, profileImage, nickname, groupProfileImages }: TaskCardProps) => {
    return (
        <div css={cardStyle}>
            <div css={innerContaienr}>
                <div css={moreButtonContainer}>
                    <MeatballIcon />
                </div>
                <div css={titleContainer}>
                    <h1 css={titleTextStyle}>{title}</h1>
                    <Badge content={`D-${dday}`} color={theme.color.point.normal} />
                </div>
                <p css={contentTextStyle}>{content}</p>
                <div css={dateContainer}>
                    <CalendarIcon />
                    <p css={dateTextStyle}>{date}</p>
                </div>
                <div css={lineStyle} />
                <div css={profileContainer}>
                    <img css={profileImageStyle} src={profileImage} />
                    <p css={nicknameStyle}>{nickname}</p>
                </div>
                <MemberGroup profileImageList={groupProfileImages} />
            </div>
        </div>
    )
}

export default TaskCard;