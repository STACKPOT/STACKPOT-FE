import {
  statusBoardContainer,
  statusBoardStyle,
  toDoGirdContainer,
} from "@pages/MyPotDetail/pages/MyPotStatus/MyPotStatus.style";
import {
  boardIconStyle,
  boardTitleStyle,
  statusContainer,
} from "./FinishedPotStatusSection.style";
import { PotIcon } from "@assets/svgs";
import { Button } from "@components/index";
import { displayStatus } from "@constants/categories";
import { APITaskStatus } from "types/taskStatus";
import { TodoStatusSection } from "@pages/MyPotDetail/pages/MyPotStatus/components";
import { useGetMyPotTask } from "apis/hooks/myPots/useGetMyPotTask";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface FinishedPotStatusSectionProps {
  potId: number;
}
const FinishedPotStatusSection: React.FC<FinishedPotStatusSectionProps> = ({
  potId,
}: FinishedPotStatusSectionProps) => {
  const navigate = useNavigate();

  const { data: taskData } = useGetMyPotTask({ potId: potId });

  const handleTaskCardClick = (taskId: number) => {
    if (!potId) return;
    navigate(`${routes.myPot.base}/${routes.task}/${potId}/${taskId}`);
  };

  return (
    <div css={statusContainer}>
      <div css={statusBoardContainer}>
        <div css={statusBoardStyle}>
          <div css={boardTitleStyle}>업무 보드</div>
          <PotIcon css={boardIconStyle} />
        </div>
        <Button variant="action" onClick={() => {}} disabled={true}>
          업무 보드 등록
        </Button>
      </div>

      <div css={toDoGirdContainer}>
        {Object.values(displayStatus).map((status) => {
          const filteredTasks = Object.values(
            taskData?.result || { OPEN: [], IN_PROGRESS: [], CLOSED: [] }
          )
            .flat()
            .filter(
              (task) => displayStatus[task.status as APITaskStatus] === status
            );

          return (
            <TodoStatusSection
              key={status}
              status={status}
              tasks={filteredTasks}
              onOpenModal={() => {}}
              onTaskCardClick={handleTaskCardClick}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FinishedPotStatusSection;
