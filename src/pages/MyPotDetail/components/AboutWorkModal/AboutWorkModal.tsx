import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import {
  TextInput,
  DateInput,
  StatusBadgeSelector,
  ExplainationInputField,
  ContributorList,
  Loading,
} from "../index";
import {
  thirdContainer,
  titleTextStyle,
  bodyContainer,
  modalStyle,
} from "./AboutWorkModal.style";
import { TaskStatus } from "../../../../types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import usePatchMyPotTask from "apis/hooks/myPots/usePatchMyPotTask";
import { TaskPatch } from "apis/types/myPot";
import { APITaskStatus } from "../../../../types/taskStatus";
import { displayStatus, participation } from "@constants/categories";
import { useQueryClient } from "@tanstack/react-query";
import { usePostMyPotTask } from "apis/hooks/myPots/usePostMyPotTask";
import { useSnackbar } from "providers";
import { DatePickerButton, ExplainModal } from "@components/index";

type FormValues = {
  taskTitle: string;
  taskDate: string;
  taskDescription: string;
  //selectedParticipants: number[];
};

interface AboutWorkModalProps {
  type: "post" | "patch";
  onClose: () => void;
  activeStatus: TaskStatus;
  taskId: number | null;
}

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({
  type,
  onClose,
  activeStatus,
  taskId,
}) => {
  const { potId, taskId: paramTaskId } = useParams<{
    potId: string;
    taskId: string;
  }>();
  const navigate = useNavigate();
  const potIdNumber = Number(potId);
  const taskIdNumber =
    paramTaskId !== undefined && !isNaN(Number(paramTaskId))
      ? Number(paramTaskId)
      : null;
  const taskIdSource = taskId ?? taskIdNumber;
  const { showSnackbar } = useSnackbar();

  const { data: taskDetail, isLoading } =
    type === "patch" && taskIdSource !== null
      ? useGetMyPotTaskDetail({ potId: potIdNumber, taskId: taskIdSource })
      : { data: null, isLoading: false };

  const defaultValues = {
    taskTitle: taskDetail?.result?.title || "",
    taskDate: taskDetail?.result?.deadLine || undefined,
    taskDescription: taskDetail?.result?.description || "",
    // selectedParticipants: taskDetail?.result?.participants
    //   ? taskDetail.result.participants.map((p: any) => p.potMemberId)
    //   : [],
  };
  const methods = useForm<FormValues>({ defaultValues, mode: "onChange" });
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { isValid },
  } = methods;

  const taskTitleValue = useWatch({ control, name: "taskTitle" });
  // const taskDateValue = useWatch({ control, name: "taskDate" });
  const taskDescriptionValue = useWatch({ control, name: "taskDescription" });
  // const selectedParticipants = useWatch({
  //   control,
  //   name: "selectedParticipants",
  // });

  // const isTaskDateDirectInput = /^(\d{4})-(\d{2})-(\d{2})$/.test(taskDateValue);
  // const isFormComplete = Boolean(
  //   taskTitleValue && isTaskDateDirectInput && taskDescriptionValue
  // );

  const queryClient = useQueryClient();
  const { mutate: patchTask } = usePatchMyPotTask();
  const { mutate: postTask } = usePostMyPotTask();

  const reverseDisplayStatus = Object.fromEntries(
    Object.entries(displayStatus).map(([key, value]) => [value, key])
  ) as Record<
    (typeof displayStatus)[keyof typeof displayStatus],
    keyof typeof displayStatus
  >;
  const convertedStatus =
    displayStatus[taskDetail?.result?.status as APITaskStatus] || "진행 전";
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>(
    activeStatus || convertedStatus
  );

  // const updateSelectedParticipants = (memberId: number) => {
  //   const current: number[] = getValues("selectedParticipants") || [];
  //   const newValue = current.includes(memberId)
  //     ? current.filter((id) => id !== memberId)
  //     : [...current, memberId];
  //   setValue("selectedParticipants", newValue, {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //   });
  // };

  const handleSavePatch = (data: FormValues) => {
    if (type === "patch" && potIdNumber && taskIdSource) {
      const updatedTask: TaskPatch = {
        title: data.taskTitle,
        deadline: data.taskDate,
        taskboardStatus: selectedStatus
          ? reverseDisplayStatus[selectedStatus]
          : "OPEN",
        description: data.taskDescription,
        // participants: data.selectedParticipants,
        participants: null,
      };
      patchTask(
        { potId: potIdNumber, taskId: taskIdSource, data: updatedTask },
        {
          onSuccess: () => {
            if (taskIdNumber != null) {
              queryClient.invalidateQueries({
                queryKey: ["taskDetail", potIdNumber, taskIdNumber],
              });
            } else {
              queryClient.invalidateQueries({
                queryKey: ["myPotTasks", potIdNumber],
              });
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
      taskboardStatus: selectedStatus
        ? reverseDisplayStatus[selectedStatus]
        : "OPEN",
      description: data.taskDescription,
      //participants: data.selectedParticipants,
      participants: null,
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
    setValue("taskTitle", value, { shouldValidate: true });
  };

  if (isLoading) return <Loading />;
  // console.log(
  //   `title:${taskTitleValue} date:${taskDateValue} content:${taskDescriptionValue} isValid:${isValid}`
  // );
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          if (type === "patch") {
            handleSavePatch(data);
          } else {
            handleSavePost(data);
          }
        })}
      >
        <ExplainModal
          type="custom"
          buttonText="다음으로"
          customContainerStyle={modalStyle}
          disabled={!isValid}
          onButtonClick={handleSubmit(handleSavePost)}
          onCancel={() => {}}
        >
          <div css={thirdContainer}>
            <div css={titleTextStyle}>
              {type === "post" ? "업무 등록하기" : "업무 수정하기"}
            </div>
            <div
              onSubmit={handleSubmit((data) => {
                if (type === "patch") {
                  handleSavePatch(data);
                } else {
                  handleSavePost(data);
                }
              })}
              css={bodyContainer}
            >
              <TextInput
                value={taskTitleValue}
                {...register("taskTitle", {
                  required: true,
                  maxLength: {
                    value: 20,
                    message: "최대 20글자까지 입력 가능합니다",
                  },
                })}
                onChange={handleTaskTitleChange}
                maxLength={20}
              />
              <Controller
                name="taskDate"
                control={control}
                rules={{ required: "날짜를 선택해주세요" }}
                render={({ field }) => (
                  <DateInput
                    onChange={(date) =>
                      field.onChange(date.format("YYYY-MM-DD"))
                    }
                  />
                )}
              />
              <StatusBadgeSelector
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
              <ExplainationInputField
                value={taskDescriptionValue}
                {...register("taskDescription", {
                  required: true,
                  maxLength: {
                    value: 100,
                    message: "최대 100글자까지 입력 가능합니다",
                  },
                })}
                onChange={(e) =>
                  setValue("taskDescription", e.target.value, {
                    shouldValidate: true,
                  })
                }
                placeholder="간단한 설명을 100자 이내로 작성해주세요."
              />
            </div>
          </div>
        </ExplainModal>
      </form>
    </FormProvider>
  );
};

export default AboutWorkModal;
