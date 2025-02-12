import { TaskCard } from "@components/index";
import { MushroomImage, CarrotImage, OnionImage, BroccoliImage } from "@assets/images";
import { Task } from "apis/types/myPot";

const categoryToKorean: Record<string, string> = {
  FRONTEND: "프론트엔드",
  PLAN: "기획",
  DESIGN: "디자인",
  BACKEND: "백엔드",
};

const roleToImage: Record<string, string> = {
  DESIGN: BroccoliImage,
  PLAN: CarrotImage,
  FRONTEND: MushroomImage,
  BACKEND: OnionImage,
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
          tag={task.category?.map((cat) => categoryToKorean[cat] || "기타").join(", ")}
          content={task.description}
          dday={task.dday}
          date={task.deadLine}
          creatorRole={task.creatorRole}
          nickname={task.creatorNickname}
          onClick={() => onTaskCardClick(task.taskboardId)}
          participants={task.participants.map((p) => ({
            ...p,
            profileImage: roleToImage[p.role] || "", 
          }))}
        />
      ))}
    </>
  );
};

export default TaskCardList;
