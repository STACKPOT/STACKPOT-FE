import { TaskCard } from "@components/index";
import { MushroomImage, CarrotImage, OnionImage, BroccoliImage } from "@assets/images";
import { Task } from "apis/types/myPot";
import { Role } from "types/role";

const categoryToKorean: Record<Role, string> = {
  FRONTEND: "프론트엔드",
  BACKEND: "백엔드",
  PLANNING: "기획",
  DESIGN: "디자인",
};

const roleToImage: Record<Role, string> = {
  FRONTEND: MushroomImage,
  BACKEND: OnionImage,
  PLANNING: CarrotImage,
  DESIGN: BroccoliImage,
};

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
            profileImage: isRoleType(p.role) ? roleToImage[p.role] : "", 
          }))}
        />
      ))}
    </>
  );
};

export default TaskCardList;
