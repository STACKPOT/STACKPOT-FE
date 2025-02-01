import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyPotIcon } from "@assets/svgs";
import { boardStyle, potIconStyle, boardTextStyle, highlightStyle, containerStyle, gridContainerStyle, toDoGirdContainer } from "./MyPotStatus.style";
import myPotMockData from "mocks/myPotData";
import myPotTodoCardData from "mocks/myPotTodoCardData";
import taskCardkData from "mocks/taskCardData";
import routes from "@constants/routes";
import { MyPotTodoCard, AboutWorkModalWrapper, StatusBoard, Pagination, TodoStatusSection  } from "../components/index";

const MyPotStatusPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState<"진행 전" | "진행 중" | "완료" | null>(null);
  const [modalTitle, setModalTitle] = useState("새로운 업무 추가");
  
  const totalPages = Math.ceil(myPotTodoCardData.result.length / 3);
  const paginatedData = myPotTodoCardData.result.slice(
    (currentPage - 1) * 3,
    currentPage * 3
  );

  const navigate = useNavigate();

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

  const handleOpenModal = (status: "진행 전" | "진행 중" | "완료" | null, title: string) => {
    setActiveStatus(status);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleTaskCardClick = (taskId: string) => {
    navigate(`${routes.myPot.base}/${taskId}`);
  };

  return (
    <>
      <AboutWorkModalWrapper
        isModalOpen={isModalOpen}
        activeStatus={activeStatus}
        modalTitle={modalTitle}
        onClose={() => setIsModalOpen(false)}
        onSave={() => setIsModalOpen(false)}
      />
      
      <div css={boardStyle}>
        <MyPotIcon css={potIconStyle} />
        <div css={boardTextStyle}>
          {myPotMockData.title}- 안녕하세요, <span css={highlightStyle}>{myPotMockData.nickname}</span> 님! 오늘 할 일이{" "}
          <span css={highlightStyle}>{myPotMockData.taskCount}</span>개 있어요.
        </div>
      </div>

      <div css={containerStyle}>
        <div css={gridContainerStyle}>
          {paginatedData.map((data, index) => (
            <MyPotTodoCard key={index} nickname={data.userNickname} todos={data.todos} isFirst={index === 0}/>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>

      <StatusBoard onOpenModal={() => handleOpenModal(null, "새로운 업무 추가")} />

      <div css={toDoGirdContainer}>
        {["진행 전", "진행 중", "완료"].map((status) => (
          <TodoStatusSection
            key={status}
            status={status as "진행 전" | "진행 중" | "완료"}
            tasks={taskCardkData.filter((task) => task.status === status)}
            onOpenModal={() => handleOpenModal(status as "진행 전" | "진행 중" | "완료", "새로운 업무 추가")}
            onTaskCardClick={handleTaskCardClick}
          />
        ))}
      </div>

    </>
  );
};

export default MyPotStatusPage;
