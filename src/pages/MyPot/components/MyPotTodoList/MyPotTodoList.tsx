import { useParams } from "react-router-dom";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { MyPotTodoCard } from "../index";
import { gridContainerStyle } from "../../MyPotStatus/MyPotStatus.style";

interface MyPotTodoListProps {
  currentPage: number;
  onModalClose: () => void;
}

const MyPotTodoList: React.FC<MyPotTodoListProps> = ({ currentPage, onModalClose }) => {
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId) || 0;

  const { data } = useGetMyPotTodo({ potId: potIdNumber, page: currentPage, size: 3 });

  return (
    <div css={gridContainerStyle}>
      {data?.todos.map((todoData, index) => (
        <MyPotTodoCard
          key={index}
          nickname={todoData.userNickname}
          todos={todoData.todos}
          isFirst={index === 0}
          potId={potIdNumber}
          currentPage={currentPage}
          onModalClose={onModalClose}
        />
      ))}
    </div>
  );
};

export default MyPotTodoList;
