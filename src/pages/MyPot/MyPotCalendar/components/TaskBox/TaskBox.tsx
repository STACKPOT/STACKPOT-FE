import { DdayBadge, MemberGroup } from "@components/index";
// import { ProfileIcon } from "@assets/svgs";
import {
  contentStyle,
  dividerStyle,
  memberContainer,
  nickNameStyle,
  profileContainer,
  taskBoxStyle,
  taskTitleContainer,
  taskTitleStyle,
} from "./TaskBox.style";
import { Task } from "mocks/taskData";

interface TaskBoxProps {
  task: Task;
}

const TaskBox: React.FC<TaskBoxProps> = ({ task }) => {
  return (
    <div css={taskBoxStyle}>
      <div css={taskTitleContainer}>
        <DdayBadge days={task.daysLeft} />
        <p css={taskTitleStyle}>{task.title}</p>
      </div>
      <p css={contentStyle}>{task.content}</p>
      <div css={memberContainer}>
        <div css={profileContainer}>
          {/* <ProfileIcon /> */}
          <p css={nickNameStyle}>{task.nickName}</p>
        </div>
        <MemberGroup memberRoleList={task.profileImageList} />
      </div>
      <div css={dividerStyle} />
    </div>
  );
};

export default TaskBox;
