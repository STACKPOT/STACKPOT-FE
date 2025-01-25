import { useState } from "react";
import { MyPotIcon, PotIcon, ArrowLeftIcon, ArrowRightIcon, PlusButtonIcon } from "@assets/svgs";
import {
  boardStyle,
  potIconStyle,
  boardTextStyle,
  highlightStyle,
  containerStyle,
  gridContainerStyle,
  paginationContainer,
  paginationTextStyle,
  statusBoardContainer,
  statusBoardStyle,
  statusTextStyle,
  buttonStyle,
  toDoStatusContainer,
  toDoGirdContanier,
  toDoStatusHeader,
} from "./MyPotStatus.style";
import myPotMockData from "mocks/myPotData";
import { StateBadge, MyPotTodoCard, TaskCard } from "@components/index";
import myPotTodoCardData from "mocks/myPotTodoCardData";
import taskCardkData from "mocks/taskCardData";
import { iconStyle } from "../MyPotMain.style";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

const MyPotStatusPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); 

  const totalPages = Math.ceil(myPotTodoCardData.length / 3);

  const paginatedData = myPotTodoCardData.slice(
    (currentPage - 1) * 3,
    currentPage * 3
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  type TodoStatus = "진행 전" | "진행 중" | "완료";

  const todoStatusData: Record<TodoStatus, typeof taskCardkData> = {
    "진행 전": taskCardkData.filter((data) => data.status === "진행 전"),
    "진행 중": taskCardkData.filter((data) => data.status === "진행 중"),
    완료: taskCardkData.filter((data) => data.status === "완료"),
  };

  const navigate = useNavigate();

  const handleTaskCardClick = (taskId: string) => {
    navigate(`${routes.myPot.base}/${taskId}`);
  };

  return (
    <>
      <div css={boardStyle}>
        <MyPotIcon css={potIconStyle} />
        <div css={boardTextStyle}>
          {myPotMockData.title}-
          안녕하세요, <span css={highlightStyle}>{myPotMockData.nickname}</span> 님! 오늘 할 일이{" "}
          <span css={highlightStyle}>{myPotMockData.taskCount}</span>개 있어요.
        </div>
      </div>

      <div css={containerStyle}>
        <div css={gridContainerStyle}>
          {paginatedData.map((data, index) => (
            <MyPotTodoCard
              key={index}
              profileImage={data.profileImage}
              nickname={data.nickname}
              status={data.status}
              statusColor={data.statusColor}
              todos={data.todos}
            />
          ))}
        </div>

        <div css={paginationContainer}>
          <div onClick={() => currentPage > 1 && handlePrev()} role="button" aria-disabled={currentPage === 1}>
            <ArrowLeftIcon />
          </div>
          <span css={paginationTextStyle}>
            {currentPage} / {totalPages}
          </span>
          <div onClick={() => currentPage < 3 && handleNext()} role="button" aria-disabled={currentPage === 1}>
            <ArrowRightIcon />
          </div>
        </div>
      </div>

      <div css={statusBoardContainer}>
        <div css={statusBoardStyle}>
            <div css={statusTextStyle}>업무 보드</div>
            <PotIcon css={iconStyle} />
        </div>
        <button css={buttonStyle}>새로운 업무 추가</button>
      </div>

      <div css={toDoGirdContanier}>
        {(Object.keys(todoStatusData) as TodoStatus[]).map((status, index) => (
          <div css={toDoStatusContainer} key={index}>
            <div css={toDoStatusHeader}>
              <StateBadge content={status}/>
              <PlusButtonIcon />
            </div>
      
            {todoStatusData[status].map((task, idx) => (
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
                onClick={() => handleTaskCardClick(task.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default MyPotStatusPage;
