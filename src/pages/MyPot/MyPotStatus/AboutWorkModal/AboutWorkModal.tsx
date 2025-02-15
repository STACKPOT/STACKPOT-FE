import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CloseIcon } from "@assets/svgs";
import { TextInput, DateInput, StatusBadgeSelector, ExplainationInputField, ContributorList, ActionButton } from "../../components/index";
import { mainContainer, subContainer, cancelContainer, cancelIconStyle, thirdContainer, titleContainer, titleTextStyle } from "./AboutWorkModal.style";
import { AnotherTaskStatus, TaskStatus } from "../../../../types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import usePatchMyPotTask from "apis/hooks/myPots/usePatchMyPotTask";
import { APITaskStatus, TaskPatch } from "apis/types/myPot";
import { deleteMyPotTask } from "apis/myPotAPI";
import routes from "@constants/routes";
import ConfirmModalWrapper from "@pages/MyPot/components/ConfirmModalWrapper/ConfirmModalWrapper";

interface AboutWorkModalProps {
  onClose: () => void;
  activeStatus: TaskStatus;
  title: string;
}

const apiToDisplayStatus: Record<APITaskStatus, AnotherTaskStatus> = {
  OPEN: "진행 전",
  IN_PROGRESS: "진행 중",
  CLOSED: "완료",
};

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({ onClose, activeStatus, title }) => {
  const { potId, taskId } = useParams<{ potId: string; taskId: string }>();
  const { data: taskDetail, isLoading } = useGetMyPotTaskDetail({ potId: Number(potId), taskId: Number(taskId) });
  const { mutate: patchTask, isPending, snackbar } = usePatchMyPotTask();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>(activeStatus);

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
    deleteMyPotTask({ potId: Number(potId), taskId: Number(taskId) });
    setIsConfirmOpen(false);
    navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
  };

  const handleSave = (data: any) => {
    if (title === "업무 수정하기") {
      const displayToApiStatus: Record<AnotherTaskStatus, APITaskStatus> = {
        "진행 전": "OPEN",
        "진행 중": "IN_PROGRESS",
        "완료": "CLOSED",
      };
      const formattedDeadline = data.taskDate.replace(/\./g, "").split(" ").join("-");
      const updatedTask: TaskPatch = {
        title: data.taskTitle,
        deadline: formattedDeadline,
        taskboardStatus: selectedStatus ? displayToApiStatus[selectedStatus] : "OPEN",
        description: data.taskDescription,
        participants: [1],
      };
      patchTask({ potId: Number(potId), taskId: Number(taskId), data: updatedTask });
    }
    onClose();
  };

  if (isLoading || isPending) return <p>로딩 중...</p>;

  return (
    <>
      <ConfirmModalWrapper isModalOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} onConfirm={confirmDeleteTask} />
      {snackbar}
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
