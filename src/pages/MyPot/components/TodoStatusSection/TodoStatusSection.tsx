import { StateBadge } from "@components/index";
import { PlusButtonIcon } from "@assets/svgs";
import { toDoStatusContainer, toDoStatusHeader, plusButtonStyle } from "../../MyPotStatus/MyPotStatus.style";
import TaskCardList from "../TaskCardList/TaskCardList";

interface TodoStatusSectionProps {
  status: "진행 전" | "진행 중" | "완료";
  tasks: any[];
  onOpenModal: () => void;
  onTaskCardClick: (taskId: string) => void;
}

const TodoStatusSection: React.FC<TodoStatusSectionProps> = ({
  status,
  tasks,
  onOpenModal,
  onTaskCardClick,
}) => (
  <div css={toDoStatusContainer}>
    <div css={toDoStatusHeader}>
      <StateBadge content={status} />
      <PlusButtonIcon css={plusButtonStyle} onClick={onOpenModal} />
    </div>
    <TaskCardList tasks={tasks} onTaskCardClick={onTaskCardClick} />
  </div>
);

export default TodoStatusSection;
