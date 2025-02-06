import React, { useState, useEffect, useCallback } from "react";
import useGetTodo from "apis/hooks/todos/useGetTodo"; 
import { MyPotIcon } from "@assets/svgs";
import { boardStyle, potIconStyle, boardTextStyle, highlightStyle, containerStyle, gridContainerStyle, toDoGirdContainer } from "./MyPotStatus.style";
import { MyPotTodoCard, AboutWorkModalWrapper, StatusBoard, Pagination, TodoStatusSection } from "../components/index";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import taskCardkData from "mocks/taskCardData";

const MyPotStatusPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // AboutWorkModal 상태 관리
  const [activeStatus, setActiveStatus] = useState<"진행 전" | "진행 중" | "완료" | null>(null);
  const [modalTitle, setModalTitle] = useState("새로운 업무 추가");
  const [potData, setPotData] = useState<any>({
    title: "",
    nickname: "",
    taskCount: 0,
    todos: [],
    totalElements: 0,
  });

  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useGetTodo({
    potId: 4,
    page: currentPage,
    size: 3,
  });

  useEffect(() => {
    if (data?.result) {
      setPotData({
        title: data.result.potName ?? "",
        nickname: data.result.todos[0]?.userNickname ?? "",
        taskCount: data.result.todos[0]?.todoCount ?? 0,
        todos: data.result.todos ?? [],
        totalElements: data.result.totalElements ?? 0,  
      });
    }
  }, [data]); 

  const totalPages = potData.totalElements > 0 ? Math.ceil(potData.totalElements / 3) : 0;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleOpenModal = (status: "진행 전" | "진행 중" | "완료" | null, title: string) => {
    setActiveStatus(status);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleTaskCardClick = (taskId: string) => {
    navigate(`${routes.myPot.base}/${taskId}`);
  };

  const handleTodoModalClose = useCallback(() => {
    refetch().then(({ data }) => {
      if (data?.result) {
        setPotData({
          title: data.result.potName ?? "",
          nickname: data.result.todos[0]?.userNickname ?? "",
          taskCount: data.result.todos[0]?.todoCount ?? 0,
          todos: data.result.todos ?? [],
          totalElements: data.result.totalElements ?? 0,
        });
      }
    }).catch(error => {
      console.error("Error fetching data:", error);
    });
  }, [refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as any).message}</div>;

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
          {potData?.title}- 안녕하세요, <span css={highlightStyle}>{potData?.nickname}</span> 님! 오늘 할 일이{" "}
          <span css={highlightStyle}>{potData?.taskCount}</span>개 있어요.
        </div>
      </div>

      <div css={containerStyle}>
        <div css={gridContainerStyle}>
          {data?.result?.todos.map((data, index) => (
            <MyPotTodoCard
              key={index}
              nickname={data.userNickname}
              todos={data.todos}
              isFirst={index === 0}
              potId={4}
              currentPage={currentPage}
              onModalClose={handleTodoModalClose}
            />
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
