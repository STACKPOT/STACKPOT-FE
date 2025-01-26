import { useNavigate, useParams } from "react-router-dom";
import {
  leftContainer,
  profileContainer,
  rightContainer,
  titleContainer,
  titleStyle,
  profileImgStyle,
  nicknameStyle,
  dateContainer,
  dateStyle,
  dividerStyle,
  contentStyle,
  contentContainerStyle,
  bottomContainer,
  contributorContainer,
  contributorCard,
  contributorInner,
  contributorNicknameStyle,
  iconStyle,
  prevButtonStyle,
} from "./TaskDetail.style";
import taskCardkData from "mocks/taskCardData";
import { DdayBadge, StateBadge } from "@components/index";
import { CalendarIcon, MeatballIcon, PotIcon } from "@assets/svgs";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { headerStyle } from "@pages/MyPot/MyPotMain.style";
import { statusTextStyle } from "../MyPotStatus.style";
import routes from "@constants/routes";

const TaskDetailPage: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const task = taskCardkData.find((item) => item.id === taskId);

  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(`${routes.myPot.base}`);
  };


  return (
    <>
      <div css={titleContainer}>
        <div css={leftContainer}>
          <button onClick={()=>handlePrev()} css={prevButtonStyle}><ArrowLeftIcon css={iconStyle} /></button>
          {task?.title && <div css={titleStyle}>{task.title}</div>}
        </div>
        <div css={rightContainer}>
          {task?.status && <StateBadge content={task.status} />}
          <MeatballIcon />
        </div>
      </div>
      <div css={profileContainer}>
        {task?.profileImage && (
          <img css={profileImgStyle} src={task.profileImage} alt={task.nickname} />
        )}
        {task?.nickname && <span css={nicknameStyle}>{task.nickname}</span>}
        {task?.dday !== undefined && <DdayBadge days={task.dday} />}
      </div>
      <div css={dateContainer}>
        <CalendarIcon />
        {task?.date && <span css={dateStyle}>{task.date}</span>}
      </div>
      <div css={dividerStyle} />
      <div css={bottomContainer}>
        <div css={contentContainerStyle}>
          {task?.content && <span css={contentStyle}>{task.content}</span>}
        </div>
        <header css={headerStyle}>
          <div css={statusTextStyle}>업무 참여자</div>
          <PotIcon css={iconStyle} />
        </header>
      </div>
      <div css={contributorContainer}>
        {task?.contributors.map((contributor, index) => (
          <div css={contributorCard} key={index}>
            <div css={contributorInner}>
              <img src={contributor.profileImage} alt={contributor.nickname} css={profileImgStyle} />
              <span css={contributorNicknameStyle}>{contributor.nickname}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskDetailPage;
