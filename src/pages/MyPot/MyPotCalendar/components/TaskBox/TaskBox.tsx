import { DdayBadge, MemberGroup } from "@components/index";
import {
  contentStyle,
  dividerStyle,
  memberContainer,
  nickNameStyle,
  profileContainer,
  profileStyle,
  taskBoxStyle,
  taskTitleContainer,
  taskTitleStyle,
} from "./TaskBox.style";
import { GetTasksCalendarResponse } from "apis/types/myPot";
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role";

interface TaskBoxProps {
  task: GetTasksCalendarResponse;
}

const TaskBox: React.FC<TaskBoxProps> = ({ task }) => {

  return (
    <div css={taskBoxStyle}>
      <div css={taskTitleContainer}>
        <DdayBadge days={task.dday} />
        <p css={taskTitleStyle}>{task.title}</p>
      </div>
      <p css={contentStyle}>{task.description}</p>
      <div css={memberContainer}>
        <div css={profileContainer}>
          <img css={profileStyle} src={roleImages[task.creatorRole]} />
          <p css={nickNameStyle}>{task.creatorNickname}</p>
        </div>
        <MemberGroup
          memberRoleList={
            task.participants.map((member) =>
              member.role as Role)
          } />
      </div>
      <div css={dividerStyle} />
    </div>
  );
};

export default TaskBox;
