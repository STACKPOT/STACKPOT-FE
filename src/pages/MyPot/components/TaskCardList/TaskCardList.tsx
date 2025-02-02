import { TaskCard } from "@components/index";

interface TaskCardListProps {
  tasks: any[];
  onTaskCardClick: (taskId: string) => void;
}

const TaskCardList: React.FC<TaskCardListProps> = ({ tasks, onTaskCardClick }) => (
  <>
    {tasks.map((task, idx) => (
      <TaskCard
        key={idx}
        title={task.title}
        tag={task.tag}
        content={task.content}
        dday={task.dday}
        date={task.date}
        profileImage={task.profileImage}
        nickname={task.nickname}
        groupProfileImages={task.groupProfileImages}
        onClick={() => onTaskCardClick(task.id)}
      />
    ))}
  </>
);

export default TaskCardList;
