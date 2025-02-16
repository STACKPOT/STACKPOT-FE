import { TaskCard } from "@components/index";
import { roleImages } from "@constants/roleImage";
import { Task } from "apis/types/myPot";
import { Role } from "types/role";
import { categoryToKorean } from "@constants/categories";


const isRoleType = (value: string): value is Role => {
  return ["FRONTEND", "BACKEND", "PLANNING", "DESIGN"].includes(value);
};

interface TaskCardListProps {
  tasks: Task[];
  onTaskCardClick: (taskId: number) => void;
}

const TaskCardList: React.FC<TaskCardListProps> = ({ tasks, onTaskCardClick }) => {
  return (
    <>
      {tasks.map((task, idx) => (
        <TaskCard
          key={idx}
          title={task.title}
          tag={task.category?.map((cat) => isRoleType(cat) ? categoryToKorean[cat] : "기타")}
          content={task.description}
          dday={task.dday}
          date={task.deadLine}
          creatorRole={task.creatorRole}
          nickname={task.creatorNickname}
          onClick={() => onTaskCardClick(task.taskboardId)}
          participants={task.participants.map((p) => ({
            ...p,
            profileImage: isRoleType(p.role) ? roleImages[p.role] : "", 
          }))}
        />
      ))}
    </>
  );
};

export default TaskCardList;
