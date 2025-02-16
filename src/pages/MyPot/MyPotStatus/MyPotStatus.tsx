import React, { useState, useMemo } from "react";
import { containerStyle, toDoGirdContainer } from "../MyPotStatus/MyPotStatus.style";
import { AboutWorkModalWrapper, StatusBoard, TodoStatusSection, Pagination, MyPotStatusHeader, MyPotTodoList } from "../components/index";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { APITaskStatus, TaskStatus } from "types/taskStatus";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { useParams } from "react-router-dom";
import { useGetMyPotTask } from "apis/hooks/myPots/useGetMyPotTask";
import { apiToDisplayStatus, TASK_STATUSES } from "@constants/categories";

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

  const { data: taskData } = useGetMyPotTask(potIdNumber); 

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
        onClose={() => setIsModalOpen(false)}
      />
      <MyPotStatusHeader />

      <div css={containerStyle}>
        <MyPotTodoList currentPage={currentPage} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
      </div>

      <StatusBoard onOpenModal={() => handleOpenModal(null, "새로운 업무 추가")} />

      <div css={toDoGirdContainer}>
        {TASK_STATUSES.map((status) => {
          const safeTaskData = taskData?.result || { OPEN: [], IN_PROGRESS: [], CLOSED: [] };

          const filteredTasks = Object.entries(safeTaskData)
            .filter(([apiStatus]) => apiToDisplayStatus[apiStatus as APITaskStatus] === status)
            .flatMap(([_, tasks]) => tasks);        

          return (
            <TodoStatusSection
              key={status}
              status={status}
              tasks={filteredTasks}
              onOpenModal={() => handleOpenModal(status, "새로운 업무 추가")}
              onTaskCardClick={handleTaskCardClick}
            />
          );
        })}
      </div>

    </>
  );
};

export default MyPotStatusPage;
