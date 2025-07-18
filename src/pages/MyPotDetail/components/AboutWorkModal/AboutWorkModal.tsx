import { useState } from "react";
import { useParams } from "react-router-dom";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  TextInput,
  DateInput,
  StatusBadgeSelector,
  ExplainationInputField,
  Loading,
  SelectTaskMemberModal,
} from "../index";
import {
  thirdContainer,
  titleTextStyle,
  bodyContainer,
  modalStyle,
} from "./AboutWorkModal.style";
import { AnotherTaskStatus } from "../../../../types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import { displayStatus } from "@constants/categories";
import { useSnackbar } from "providers";
import { ExplainModal } from "@components/index";
import dayjs from "dayjs";

export type FormValues = {
  title: string;
  deadline: string;
  taskboardStatus: AnotherTaskStatus;
  description: string;
  participants: number[];
};

interface AboutWorkModalProps {
  type: "post" | "patch";
  onClose: () => void;
  taskId: number | null;
}

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({
  type,
  onClose,
  taskId,
}) => {
  const { potId } = useParams<{
    potId: string;
    taskId: string;
  }>();
  const potIdNumber = Number(potId);
  const taskIdNumber = taskId;
  const { showSnackbar } = useSnackbar();
  const [step, setStep] = useState<"content" | "member">("content");

  const { data: taskDetail, isLoading } =
    type === "patch" && taskIdNumber !== null
      ? useGetMyPotTaskDetail({ potId: potIdNumber, taskId: taskIdNumber })
      : { data: null, isLoading: false };

  const defaultValues = {
    title: taskDetail?.result?.title || "",
    deadline: taskDetail?.result?.deadLine || undefined,
    taskboardStatus: displayStatus[taskDetail?.result?.status ?? "OPEN"],
    description: taskDetail?.result?.description || "",
    participants: taskDetail?.result?.participants
      ? taskDetail.result.participants.map((p: any) => p.potMemberId)
      : [],
  };
  const methods = useForm<FormValues>({ defaultValues, mode: "onChange" });
  const {
    register,
    setValue,
    control,
    watch,
    formState: { isValid },
  } = methods;

  const [taskTitleValue, taskStatusValue, taskDescriptionValue, deadLineValue] =
    watch(["title", "taskboardStatus", "description", "deadline"]);

  const handleTaskTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 20) {
      showSnackbar({
        message: "제목은 최대 20자까지 가능합니다.",
        severity: "error",
      });
      return;
    }
    setValue("title", value, { shouldValidate: true });
  };

  if (isLoading) return <Loading />;

  return (
    <FormProvider {...methods}>
      <form>
        {step === "content" ? (
          <ExplainModal
            type="custom"
            buttonText="다음으로"
            customContainerStyle={modalStyle}
            disabled={!isValid}
            onButtonClick={() => setStep("member")}
            onCancel={onClose}
          >
            <div css={thirdContainer}>
              <div css={titleTextStyle}>
                {type === "post" ? "업무 등록하기" : "업무 수정하기"}
              </div>
              <div css={bodyContainer}>
                <TextInput
                  value={taskTitleValue}
                  {...register("title", {
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
                  name="deadline"
                  control={control}
                  rules={{ required: "날짜를 선택해주세요" }}
                  render={({ field }) => (
                    <DateInput
                      onChange={(date) =>
                        field.onChange(date.format("YYYY-MM-DD"))
                      }
                      date={dayjs(deadLineValue)}
                    />
                  )}
                />
                <StatusBadgeSelector
                  selectedStatus={taskStatusValue}
                  setSelectedStatus={(status) =>
                    setValue("taskboardStatus", status)
                  }
                />
                <ExplainationInputField
                  value={taskDescriptionValue}
                  {...register("description", {
                    required: true,
                    maxLength: {
                      value: 100,
                      message: "최대 100글자까지 입력 가능합니다",
                    },
                  })}
                  onChange={(e) =>
                    setValue("description", e.target.value, {
                      shouldValidate: true,
                    })
                  }
                  placeholder="간단한 설명을 100자 이내로 작성해주세요."
                />
              </div>
            </div>
          </ExplainModal>
        ) : (
          <SelectTaskMemberModal
            type={type}
            potId={potIdNumber}
            taskId={taskIdNumber}
            onClose={onClose}
          />
        )}
      </form>
    </FormProvider>
  );
};

export default AboutWorkModal;
