import { TaskCard } from "@components/index";
import { roleImages } from "@constants/roleImage";
import { Task } from "apis/types/myPot";
import { Role } from "types/role";
import { partMap } from "@constants/categories";

const reversePartMap = Object.fromEntries(
  Object.entries(partMap).map(([k, v]) => [v, k])
) as Record<Role, string>;

interface TaskCardListProps {
  tasks: Task[];
  onTaskCardClick: (taskId: number) => void;
}

const TaskCardList: React.FC<TaskCardListProps> = ({ tasks, onTaskCardClick }) => {
  return (
    <>
      {tasks.map((task, idx) => (
        <TaskCard
          taskId={task.taskboardId}
          key={idx}
          title={task.title}
          tag={task.category?.map((cat) => reversePartMap[cat as Role] ?? "기타")}
          content={task.description}
          dday={task.dday}
          date={task.deadLine}
          creatorRole={task.creatorRole}
          nickname={task.creatorNickname}
          onClick={() => onTaskCardClick(task.taskboardId)}
          participants={task.participants.map((p) => ({
            ...p,
            profileImage: roleImages[p.role as Role] || "", 
          }))} 
        />
      ))}
    </>
  );
};

export default TaskCardList;
