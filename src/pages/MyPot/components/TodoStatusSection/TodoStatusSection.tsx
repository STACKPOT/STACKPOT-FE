import { StateBadge } from "@components/index";
import { PlusButtonIcon } from "@assets/svgs";
import { toDoStatusContainer, toDoStatusHeader, plusButtonStyle } from "../../MyPotStatus/MyPotStatus.style";
import TaskCardList from "../TaskCardList/TaskCardList";
import { Task } from "apis/types/myPot";
import { AnotherTaskStatus } from "types/taskStatus";

interface TodoStatusSectionProps {
  status: AnotherTaskStatus;
  tasks: Task[];
  onOpenModal: () => void;
  onTaskCardClick: (taskId: number) => void;
}

const TodoStatusSection: React.FC<TodoStatusSectionProps> = ({
  status,
  tasks,
  onOpenModal,
  onTaskCardClick,
}) => {
  return (
  <div css={toDoStatusContainer}>
    <div css={toDoStatusHeader}>
      <StateBadge content={status} />
      <PlusButtonIcon css={plusButtonStyle} onClick={onOpenModal} />
    </div>
    <TaskCardList tasks={tasks} onTaskCardClick={onTaskCardClick} />
  </div>);
};

export default TodoStatusSection;
