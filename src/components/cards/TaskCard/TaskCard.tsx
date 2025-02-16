import {
  badgeContainer,
  bottomContainer,
  cardStyle,
  contentContainer,
  contentTextStyle,
  dateTextStyle,
  forDropdownStyle,
  innerContainer,
  lineStyle,
  taskCardInnerTopContainer,
  nicknameStyle,
  profileContainer,
  profileImageStyle,
  titleTextStyle,
} from "./TaskCard.style";
import { MemberGroup, DdayBadge, Badge, MyFeedDropdown } from "@components/index";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";

interface Participant {
  role: string;
  profileImage?: string;
}

interface TaskCardProps {
  title: string;
  dday: string;
  tag: string[];
  content: string;
  date: string;
  creatorRole: string;
  nickname: string;
  participants: Participant[];
  onClick?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dday,
  tag,
  content,
  date,
  creatorRole,
  nickname,
  participants,
  onClick,
}: TaskCardProps) => {
  const profileImage = roleImages[creatorRole as Role] || "";

  const roleList = participants.map((p) => p.role) as Role[];

  return (
    <div css={cardStyle} onClick={onClick}>
      <div css={innerContainer}>
        <div css={taskCardInnerTopContainer}>
          <div css={badgeContainer}>
            <DdayBadge days={dday} />
            {tag.map((t, index) => (
              <Badge key={index} content={t} />
            ))}
          </div>

          <div css={forDropdownStyle} onClick={(event) => { event.stopPropagation(); }}>
            <MyFeedDropdown
              topMessage="수정하기"
              bottomMessage="삭제하기"
              onTop={() => alert("수정하기 클릭됨")}
              onBottom={() => alert("삭제하기 클릭됨")}
            />
          </div>
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
          <MemberGroup memberRoleList={roleList} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
