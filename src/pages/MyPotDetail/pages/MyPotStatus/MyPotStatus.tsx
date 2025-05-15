import React, { useState, useMemo } from "react";
import { containerStyle, toDoGirdContainer } from "./MyPotStatus.style";
import { AboutWorkModalWrapper } from "../../components/index";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { APITaskStatus, TaskStatus } from "types/taskStatus";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { useParams } from "react-router-dom";
import { useGetMyPotTask } from "apis/hooks/myPots/useGetMyPotTask";
import { displayStatus, WorkModal } from "@constants/categories";
import { MyPotStatusHeader, MyPotTodoList, Pagination, StatusBoard, TodoStatusSection } from "./components";

const MyPotStatusPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState<TaskStatus>(null);
  const [modalTitle, setModalTitle] = useState<string>(WorkModal[0]);

  const { potId } = useParams<{ potId: string }>();
  const navigate = useNavigate();
  
  const potIdNumber = Number(potId);

  const { data } = useGetMyPotTodo({
    potId: potIdNumber,
    page: currentPage,
    size: 3,
  });

  const { data: taskData } = useGetMyPotTask({ potId: potIdNumber }); 

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

  const handleTaskCardClick = (taskId: number) => { 
    if (!potId) return;
    navigate(`${routes.myPot.base}/${routes.task}/${potId}/${taskId}`);
  };

  return (
    <>
      <AboutWorkModalWrapper
        isModalOpen={isModalOpen}
        activeStatus={activeStatus}
        modalTitle={modalTitle}
        taskId={null}
        onClose={() => setIsModalOpen(false)}
      />
      <MyPotStatusHeader />

      <div css={containerStyle}>
        <MyPotTodoList currentPage={currentPage} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
      </div>

      <StatusBoard onOpenModal={() => handleOpenModal(null, WorkModal[0])} />

      <div css={toDoGirdContainer}>
      {Object.values(displayStatus).map((status) => {
        const filteredTasks = Object.values(taskData?.result || { OPEN: [], IN_PROGRESS: [], CLOSED: [] })
          .flat()
          .filter((task) => displayStatus[task.status as APITaskStatus] === status);

        return (
          <TodoStatusSection
            key={status}
            status={status}
            tasks={filteredTasks}
            onOpenModal={() => handleOpenModal(status, WorkModal[0])}
            onTaskCardClick={handleTaskCardClick}
          />
        );
      })}
      </div>
    </>
  );
};

export default MyPotStatusPage;
