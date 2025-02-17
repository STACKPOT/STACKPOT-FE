import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CloseIcon } from "@assets/svgs";
import { TextInput, DateInput, StatusBadgeSelector, ExplainationInputField, ContributorList, ActionButton, Loading } from "../../components/index";
import { mainContainer, subContainer, cancelContainer, cancelIconStyle, thirdContainer, titleContainer, titleTextStyle } from "./AboutWorkModal.style";
import { TaskStatus } from "../../../../types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import usePatchMyPotTask from "apis/hooks/myPots/usePatchMyPotTask";
import { TaskPatch } from "apis/types/myPot";
import { deleteMyPotTask } from "apis/myPotAPI";
import routes from "@constants/routes";
import ConfirmModalWrapper from "@pages/MyPot/components/ConfirmModalWrapper/ConfirmModalWrapper";
import { APITaskStatus } from "../../../../types/taskStatus";
import { displayStatus, WorkModal } from "@constants/categories";
import { useQueryClient } from "@tanstack/react-query";

interface AboutWorkModalProps {
  onClose: () => void;
  activeStatus: TaskStatus;
  title: string;
  taskId: number | null;
}

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({ onClose, activeStatus, taskId, title }) => {
  const { potId, taskId: paramTaskId } = useParams<{ potId: string; taskId: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const queryClient = useQueryClient();

  const reverseDisplayStatus = Object.fromEntries(
    Object.entries(displayStatus).map(([key, value]) => [value, key])
  ) as Record<(typeof displayStatus)[keyof typeof displayStatus], keyof typeof displayStatus>;

  const potIdNumber = Number(potId);
  const taskIdNumber = paramTaskId !== undefined && !isNaN(Number(paramTaskId)) ? Number(paramTaskId) : null;

  const taskIdSource = taskId ?? taskIdNumber;

  const { data: taskDetail, isLoading } = title === WorkModal[1] && taskIdSource !== null
  ? useGetMyPotTaskDetail({ potId: potIdNumber, taskId: taskIdSource })
  : { data: null, isLoading: false };

  const { mutate: patchTask } = usePatchMyPotTask();

  const convertedStatus = displayStatus[taskDetail?.result?.status as APITaskStatus] || "진행 전";
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>(activeStatus || convertedStatus);

  const taskTitle = watch("taskTitle", taskDetail?.result?.title || "");
  const taskDescription = watch("taskDescription", taskDetail?.result?.description || "");

  const handleDeleteTask = () => {
    setIsConfirmOpen(true);
  };

  const confirmDeleteTask = () => {
    if (potIdNumber && taskIdSource) {
      deleteMyPotTask({ potId: potIdNumber, taskId: taskIdSource });
      setIsConfirmOpen(false);
      navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
    }
  };

  const handleSave = (data: any) => {
    if (title === WorkModal[1] && potIdNumber && taskIdSource) {
      const updatedTask: TaskPatch = {
        title: data.taskTitle,
        deadline: data.taskDate,
        taskboardStatus: selectedStatus ? reverseDisplayStatus[selectedStatus] : "OPEN",
        description: data.taskDescription,
        participants: [10], // 임시
      };
  
      patchTask(
        { potId: potIdNumber, taskId: taskIdSource, data: updatedTask },
        {
          onSuccess: () => {
            if ( taskIdNumber != null ) {
              queryClient.invalidateQueries({ queryKey: ["taskDetail", potIdNumber, taskIdNumber] });
            }
            else {
              queryClient.invalidateQueries({ queryKey: ["myPotTasks", potId] });
            }
          }
        }
      );
    } else {
      console.warn("PATCH 요청이 실행되지 않음: '업무 수정하기'가 아니거나 taskId 없음");
    }
    onClose();
  };  

  if (isLoading) return <Loading />;

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
              <TextInput value={taskTitle} {...register("taskTitle", { required: true })} onChange={(e) => setValue("taskTitle", e.target.value)} />
              <DateInput onChange={(date) => setValue("taskDate", date ? date.format("YYYY-MM-DD") : "")}/>
              <StatusBadgeSelector selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
              <ExplainationInputField value={taskDescription} {...register("taskDescription")} onChange={(e) => setValue("taskDescription", e.target.value)} placeholder="간단한 설명을 100자 이내로 작성해주세요" />
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
