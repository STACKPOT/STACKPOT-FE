import React, { useState, useMemo } from "react";
import { containerStyle, toDoGirdContainer } from "../MyPotStatus/MyPotStatus.style";
import { AboutWorkModalWrapper, StatusBoard, TodoStatusSection, Pagination, MyPotStatusHeader, MyPotTodoList } from "../components/index";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import taskCardkData from "mocks/taskCardData";
import { TaskStatus } from "types/taskStatus";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { useParams } from "react-router-dom";

const MyPotStatusPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState<TaskStatus>(null);
  const [modalTitle, setModalTitle] = useState("새로운 업무 추가");

  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId) || 0;
  const navigate = useNavigate();

  const { data } = useGetMyPotTodo({
    potId: potIdNumber,
    page: currentPage,
    size: 3,
  });

  const totalPages = useMemo(() => {
    return data?.totalElements ? Math.ceil(data.totalElements / 3) : 0;
  }, [data]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleOpenModal = (status: TaskStatus, title: string) => {
    setActiveStatus(status);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleTaskCardClick = () => {
    navigate(`${routes.myPot.detail}`);
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

      <MyPotStatusHeader />

      <div css={containerStyle}>
        <MyPotTodoList currentPage={currentPage} onModalClose={() => {}} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
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
