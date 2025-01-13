import { CalendarIcon, MoreButton } from "@assets/svgs"
import { cardStyle, contentTextStyle, dateContainer, dateTextStyle, lineStyle, moreButtonContainer, nicknameStyle, profileContainer, profileImageStyle, titleContainer, titleTextStyle } from "./TaskCard.style"
import DdayBadge from "@components/commons/Badge/DdayBadge/DdayBadge"
import MemberGroup from "@components/commons/Badge/MemberGroup/MemberGroup"

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
            <div css={moreButtonContainer}>
                <MoreButton />
            </div>
            <div css={titleContainer}>
                <p css={titleTextStyle}>{title}</p>
                <DdayBadge days={dday} />
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
    )
}

export default TaskCard;