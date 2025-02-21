import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { CloseIcon } from "@assets/svgs";
import {
  TextInput,
  DateInput,
  StatusBadgeSelector,
  ExplainationInputField,
  ContributorList,
  ActionButton,
  Loading,
} from "../../components/index";
import {
  mainContainer,
  subContainer,
  cancelContainer,
  cancelIconStyle,
  thirdContainer,
  titleContainer,
  titleTextStyle,
} from "./AboutWorkModal.style";
import { TaskStatus } from "../../../../types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import usePatchMyPotTask from "apis/hooks/myPots/usePatchMyPotTask";
import { TaskPatch } from "apis/types/myPot";
import routes from "@constants/routes";
import ConfirmModalWrapper from "@pages/MyPot/components/ConfirmModalWrapper/ConfirmModalWrapper";
import { APITaskStatus } from "../../../../types/taskStatus";
import { displayStatus, WorkModal } from "@constants/categories";
import { useQueryClient } from "@tanstack/react-query";
import { usePostMyPotTask } from "apis/hooks/myPots/usePostMyPotTask";
import useDeleteMyPotTask from "apis/hooks/myPots/useDeleteMyPotTask";
import { useSnackbar } from "providers";

interface FormValues {
  taskTitle: string;
  taskDate: string;
  taskDescription: string;
  selectedParticipants: number[];
}

interface AboutWorkModalProps {
  onClose: () => void;
  activeStatus: TaskStatus;
  title: string;
  taskId: number | null;
}

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({
  onClose,
  activeStatus,
  taskId,
  title,
}) => {
  const { potId, taskId: paramTaskId } = useParams<{ potId: string; taskId: string }>();
  const navigate = useNavigate();
  const potIdNumber = Number(potId);
  const taskIdNumber = paramTaskId !== undefined && !isNaN(Number(paramTaskId)) ? Number(paramTaskId) : null;
  const taskIdSource = taskId ?? taskIdNumber;
    const { showSnackbar } = useSnackbar();
  
  const { data: taskDetail, isLoading } =
    title === WorkModal[1] && taskIdSource !== null
      ? useGetMyPotTaskDetail({ potId: potIdNumber, taskId: taskIdSource })
      : { data: null, isLoading: false };

  const defaultValues: FormValues = {
    taskTitle: taskDetail?.result?.title || "",
    taskDate: taskDetail?.result?.deadLine || "",
    taskDescription: taskDetail?.result?.description || "",
    selectedParticipants: taskDetail?.result?.participants
      ? taskDetail.result.participants.map((p: any) => p.potMemberId)
      : [],
  };

  const { register, handleSubmit, setValue, control, getValues } =
    useForm<FormValues>({ defaultValues });
  const taskTitleValue = useWatch({ control, name: "taskTitle" });
  const taskDateValue = useWatch({ control, name: "taskDate" });
  const taskDescriptionValue = useWatch({ control, name: "taskDescription" });
  const selectedParticipants = useWatch({ control, name: "selectedParticipants" });

  const isTaskDateDirectInput = /^(\d{4})-(\d{2})-(\d{2})$/.test(taskDateValue);
  const isFormComplete = Boolean(taskTitleValue && isTaskDateDirectInput && taskDescriptionValue);

  const queryClient = useQueryClient();
  const { mutate: patchTask } = usePatchMyPotTask();
  const { mutate: postTask } = usePostMyPotTask();
  const { mutate: deleteTaskMutate } = useDeleteMyPotTask();

  const reverseDisplayStatus = Object.fromEntries(
    Object.entries(displayStatus).map(([key, value]) => [value, key])
  ) as Record<(typeof displayStatus)[keyof typeof displayStatus], keyof typeof displayStatus>;
  const convertedStatus =
    displayStatus[taskDetail?.result?.status as APITaskStatus] || "진행 전";
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>(
    activeStatus || convertedStatus
  );

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDeleteTask = () => {
    setIsConfirmOpen(true);
  };

  const confirmDeleteTask = () => {
    if (potIdNumber && taskIdSource) {
      deleteTaskMutate(
        { potId: potIdNumber, taskId: taskIdSource },
        {
          onSuccess: () => {
            setIsConfirmOpen(false);
            onClose();
            navigate(`${routes.myPot.base}/${routes.task}/${potIdNumber}`);
          },
        }
      );
    }
  };

  const updateSelectedParticipants = (memberId: number) => {
    const current: number[] = getValues("selectedParticipants") || [];
    const newValue = current.includes(memberId)
      ? current.filter((id) => id !== memberId)
      : [...current, memberId];
    setValue("selectedParticipants", newValue, { shouldDirty: true, shouldValidate: true });
  };

  const handleSavePatch = (data: FormValues) => {
    if (title === WorkModal[1] && potIdNumber && taskIdSource) {
      const updatedTask: TaskPatch = {
        title: data.taskTitle,
        deadline: data.taskDate,
        taskboardStatus: selectedStatus ? reverseDisplayStatus[selectedStatus] : "OPEN",
        description: data.taskDescription,
        participants: data.selectedParticipants,
      };
      patchTask(
        { potId: potIdNumber, taskId: taskIdSource, data: updatedTask },
        {
          onSuccess: () => {
            if (taskIdNumber != null) {
              queryClient.invalidateQueries({ queryKey: ["taskDetail", potIdNumber, taskIdNumber] });
            } else {
              queryClient.invalidateQueries({ queryKey: ["myPotTasks", potIdNumber] });
            }
            onClose();
          },
        }
      );
    }
  };

  const handleSavePost = (data: FormValues) => {
    const newTask = {
      title: data.taskTitle,
      deadline: data.taskDate,
      taskboardStatus: selectedStatus ? reverseDisplayStatus[selectedStatus] : "OPEN",
      description: data.taskDescription,
      participants: data.selectedParticipants,
    };
    postTask({ potId: potIdNumber, data: newTask });
    onClose();
  };

  const handleTaskTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 20) {
      showSnackbar({
        message: "제목은 최대 20자까지 가능합니다.",
        severity: "error",
      });
      return;
    }
    setValue("taskTitle", value);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <ConfirmModalWrapper
        isModalOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmDeleteTask}
      />
      <div css={mainContainer}>
        <div css={subContainer}>
          <div css={cancelContainer}>
            <CloseIcon css={cancelIconStyle} onClick={onClose} />
          </div>
          <div css={thirdContainer}>
            <div css={titleContainer}>
              <div css={titleTextStyle}>{title}</div>
            </div>
            <form
              onSubmit={handleSubmit((data) => {
                if (title === WorkModal[1]) {
                  handleSavePatch(data);
                } else {
                  handleSavePost(data);
                }
              })}
              css={thirdContainer}
            >
              <input type="hidden" {...register("selectedParticipants")} />
              <TextInput
  value={taskTitleValue}
  {...register("taskTitle", {
    required: true,
    maxLength: { value: 20, message: "최대 20글자까지 입력 가능합니다" },
  })}
  onChange={handleTaskTitleChange}
  maxLength={20}
/>
              <DateInput
                onChange={(date) =>
                  setValue("taskDate", date ? date.format("YYYY-MM-DD") : "")
                }
              />
              <StatusBadgeSelector
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
              <ExplainationInputField
                value={taskDescriptionValue}
                {...register("taskDescription")}
                onChange={(e) => setValue("taskDescription", e.target.value)}
                placeholder="간단한 설명을 100자 이내로 작성해주세요"
              />
              <ContributorList
                participants={selectedParticipants}
                setSelectedParticipants={updateSelectedParticipants}
              />
              <ActionButton
                title={title}
                onSavePatch={handleSubmit(handleSavePatch)}
                onSavePost={handleSubmit(handleSavePost)}
                onDelete={handleDeleteTask}
                disabled={isFormComplete}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWorkModal;