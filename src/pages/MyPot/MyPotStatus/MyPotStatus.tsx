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
  toDoGirdContainer,
  toDoStatusHeader,
  plusButtonStyle,
  blurOverlayStyle,
  modalOverlayStyle,
} from "./MyPotStatus.style";
import myPotMockData from "mocks/myPotData";
import AboutWorkModal from "./AboutWorkModal/AboutWorkModal";
import { StateBadge, MyPotTodoCard, TaskCard } from "@components/index";
import myPotTodoCardData from "mocks/myPotTodoCardData";
import taskCardkData from "mocks/taskCardData";
import { iconStyle } from "../MyPotMain.style";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

const MyPotStatusPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = Math.ceil(myPotTodoCardData.result.length / 3);

  const paginatedData = myPotTodoCardData.result.slice(
    (currentPage - 1) * 3,
    currentPage * 3
  ).map((data) => ({
    ...data,
    todos: data.todos.map(todo => ({
      ...todo,
      status: todo.status as "NOT_STARTED" | "COMPLETED" 
    }))
  }));

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

  const [activeStatus, setActiveStatus] = useState<"진행 전" | "진행 중" | "완료" | null>(null);
  const [taskCardData, setTaskCardData] = useState([...taskCardkData]); 
  const [modalTitle, setModalTitle] = useState<string>("새로운 업무 추가");

  const handleOpenModal = (status: "진행 전" | "진행 중" | "완료" | null, title: string) => {
    setActiveStatus(status);
    setModalTitle(title); 
    setIsModalOpen(true);
  };
  
  const handleSaveStatus = (newStatus: "진행 전" | "진행 중" | "완료" | null) => {
    if (newStatus) {
      const updatedData = taskCardData.map((task) =>
        task.status === activeStatus ? { ...task, status: newStatus } : task
      );
      setTaskCardData(updatedData);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <div css={blurOverlayStyle} />}
      {isModalOpen && (
        <div css={modalOverlayStyle}>
          <AboutWorkModal
            onClose={() => setIsModalOpen(false)}
            activeStatus={activeStatus}
            onSave={handleSaveStatus}
            title={modalTitle}
          />
        </div>
      )}
      
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
              nickname={data.userNickname} 
              todos={data.todos}
            />
          ))}
        </div>

        <div css={paginationContainer}>
          <button onClick={() => currentPage > 1 && handlePrev()} css={plusButtonStyle} disabled={currentPage === 1} >
            <ArrowLeftIcon />
          </button>
          <span css={paginationTextStyle}>
            {currentPage} / {totalPages}
          </span>
          <button onClick={() => currentPage < totalPages && handleNext()} css={plusButtonStyle}disabled={currentPage === totalPages} >
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <div css={statusBoardContainer}>
        <div css={statusBoardStyle}>
          <div css={statusTextStyle}>업무 보드</div>
          <PotIcon css={iconStyle} />
        </div>
        <button css={buttonStyle} onClick={() => handleOpenModal(null, "새로운 업무 추가")}>새로운 업무 추가</button>
      </div>

      <div css={toDoGirdContainer}>
        {(Object.keys(todoStatusData) as TodoStatus[]).map((status, index) => (
          <div css={toDoStatusContainer} key={index}>
            <div css={toDoStatusHeader}>
              <StateBadge content={status}/>
              <PlusButtonIcon
                css={plusButtonStyle}
                onClick={() => handleOpenModal(status, "새로운 업무 추가")} 
              />
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
