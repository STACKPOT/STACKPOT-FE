import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CloseIcon } from "@assets/svgs";
import { TextInput, DateInput, StatusBadgeSelector, ExplainationInputField, ContributorList, ActionButton } from "../../components/index";
import { mainContainer, subContainer, cancelContainer, cancelIconStyle, thirdContainer, titleContainer, titleTextStyle } from "./AboutWorkModal.style";
import { TaskStatus } from "../../../../types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import usePatchMyPotTask from "apis/hooks/myPots/usePatchMyPotTask";
import { TaskPatch } from "apis/types/myPot";
import { deleteMyPotTask } from "apis/myPotAPI";
import routes from "@constants/routes";
import ConfirmModalWrapper from "@pages/MyPot/components/ConfirmModalWrapper/ConfirmModalWrapper";
import { APITaskStatus } from "../../../../types/taskStatus";
import { apiToDisplayStatus, displayToApiStatus } from "@constants/categories";

interface AboutWorkModalProps {
  onClose: () => void;
  activeStatus: TaskStatus;
  title: string;
}

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({ onClose, activeStatus, title }) => {
  const { potId, taskId } = useParams<{ potId: string; taskId: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>(activeStatus);

  const potIdNumber = Number(potId);
  const taskIdNumber = taskId !== undefined && !isNaN(Number(taskId)) ? Number(taskId) : null;

  const { data: taskDetail, isLoading } = title === "업무 수정하기" && taskIdNumber !== null
    ? useGetMyPotTaskDetail({ potId: potIdNumber, taskId: taskIdNumber })
    : { data: null, isLoading: false };

  const { mutate: patchTask } = usePatchMyPotTask();

  useEffect(() => {
    if (title === "업무 수정하기" && taskDetail?.result) {
      setValue("taskTitle", taskDetail.result.title);
      setValue("taskDate", taskDetail.result.deadLine);
      setSelectedStatus(apiToDisplayStatus[taskDetail.result.status as APITaskStatus] || "진행 전");
      setValue("taskDescription", taskDetail.result.description);
    }
  }, [taskDetail, title, setValue]);

  const handleDeleteTask = () => {
    setIsConfirmOpen(true);
  };

  const confirmDeleteTask = () => {
    if (potIdNumber && taskIdNumber) {
      deleteMyPotTask({ potId: potIdNumber, taskId: taskIdNumber });
      setIsConfirmOpen(false);
      navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
    }
  };

  const handleSave = (data: any) => {
    if (title === "업무 수정하기" && potIdNumber && taskIdNumber) {
      const formattedDeadline = data.taskDate.replace(/\./g, "").split(" ").join("-");
      const updatedTask: TaskPatch = {
        title: data.taskTitle,
        deadline: formattedDeadline,
        taskboardStatus: selectedStatus ? displayToApiStatus[selectedStatus] : "OPEN",
        description: data.taskDescription,
        participants: [10], // 임시
      };

      patchTask({ potId: potIdNumber, taskId: taskIdNumber, data: updatedTask });
    } else {
      console.warn("PATCH 요청이 실행되지 않음: '업무 수정하기'가 아니거나 taskId 없음");
    }
    onClose();
  };

  if (isLoading) return <p>로딩 중...</p>;

  return (
    <>
      <ConfirmModalWrapper isModalOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} onConfirm={confirmDeleteTask} />
      <div css={mainContainer}>
        <div css={subContainer}>
          <div css={cancelContainer}>
            <CloseIcon css={cancelIconStyle} onClick={onClose} />
          </div>
          <div css={thirdContainer}>
            <div css={titleContainer}>
              <div css={titleTextStyle}>{title}</div>
            </div>
            <form onSubmit={handleSubmit(handleSave)} css={thirdContainer}>
              <TextInput value={watch("taskTitle", "")} {...register("taskTitle", { required: true })} onChange={(e) => setValue("taskTitle", e.target.value)} />
              <DateInput value={watch("taskDate", "")} {...register("taskDate", { required: true })} onChange={(e) => setValue("taskDate", e.target.value)} />
              <StatusBadgeSelector selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
              <ExplainationInputField value={watch("taskDescription", "")} {...register("taskDescription")} onChange={(e) => setValue("taskDescription", e.target.value)} placeholder="간단한 설명을 100자 이내로 작성해주세요" />
              <ContributorList />
              <ActionButton title={title} onSave={handleSubmit(handleSave)} onDelete={handleDeleteTask} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWorkModal;
