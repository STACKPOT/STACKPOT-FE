import { MeatballIcon } from "@assets/svgs"
import { badgeContainer, bottomContainer, cardStyle, contentContainer, contentTextStyle, dateContainer, dateTextStyle, innerContaienr, lineStyle, moreButtonContainer, nicknameStyle, profileContainer, profileImageStyle, titleContainer, titleTextStyle } from "./TaskCard.style"
import MemberGroup from "@components/commons/Badge/MemberGroup/MemberGroup"
import DdayBadge from "@components/commons/Badge/DdayBadge/DdayBadge"
import Badge from "@components/commons/Badge/Badge";
interface TaskCardProps {
    title: string,
    dday: number,
    tag: string,
    content: string,
    date: string,
    profileImage: string,
    nickname: string,
    groupProfileImages: string[]
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dday, tag, content, date, profileImage, nickname, groupProfileImages }: TaskCardProps) => {
    return (
        <div css={cardStyle}>
            <div css={innerContaienr}>
                <div css={moreButtonContainer}>
                    <div css={badgeContainer}>
                        <DdayBadge days={dday} />
                        <Badge content={tag} />
                    </div>
                    <MeatballIcon />
                </div>
                <div css={contentContainer}>
                    <p css={titleTextStyle}>{title}</p>
                    <p css={contentTextStyle}>{content}</p>
                </div>
                <p css={dateTextStyle}>{date}</p>
                <div css={lineStyle} />
                <div css={bottomContainer}>
                    <div css={profileContainer}>
                        <img css={profileImageStyle} src={profileImage} />
                        <p css={nicknameStyle}>{nickname}</p>
                    </div>
                    <MemberGroup profileImageList={groupProfileImages} />
                </div>
            </div>
        </div>
    )
}

export default TaskCard;