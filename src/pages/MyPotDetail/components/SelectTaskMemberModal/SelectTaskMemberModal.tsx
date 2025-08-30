import { ExplainModal, MemberCard } from "@components/index";
import {
  container,
  descriptionStyle,
  memberListContainer,
  modalStyle,
  titleTextStyle,
} from "./SelectTaskMemberModal.style";
import { useState } from "react";
import { useGetMyPotMembers } from "apis/hooks/myPots/useGetMyPotMemebers";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../AboutWorkModal/AboutWorkModal";
import { reverseDisplayStatus } from "@constants/categories";
import { PostTask, TaskPatch } from "apis/types/myPot";
import usePatchMyPotTask from "apis/hooks/myPots/usePatchMyPotTask";
import { usePostMyPotTask } from "apis/hooks/myPots/usePostMyPotTask";
import dayjs from "dayjs";

interface SelectTaskMemberModalProps {
  type: "post" | "patch";
  potId: number;
  taskId?: number;
  onClose: () => void;
}

const SelectTaskMemberModal: React.FC<SelectTaskMemberModalProps> = ({
  type,
  potId,
  taskId,
  onClose,
}: SelectTaskMemberModalProps) => {
  const { data: members } = useGetMyPotMembers({ potId });
  const { setValue, watch, handleSubmit } = useFormContext<FormValues>();
  const selectedParticipants = watch("participants");
  const [selectNone, setSelectNone] = useState(false);

  const { mutate: patchTask, isPending: isPatchPending } = usePatchMyPotTask();
  const { mutate: postTask, isPending: isPostPending } = usePostMyPotTask();

  const updateSelectedParticipants = (memberId: number) => {
    const current: number[] = selectedParticipants || [];
    const newValue = current.includes(memberId)
      ? current.filter((id) => id !== memberId)
      : [...current, memberId];
    setValue("participants", newValue, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setSelectNone(false);
  };

  const clearSelectedParticipants = () => {
    if (!selectNone) {
      setValue("participants", [], {
        shouldValidate: true,
      });
      setSelectNone(true);
    } else {
      setSelectNone(false);
    }
  };

  const handleSavePatch = (data: FormValues) => {
    if (potId && taskId) {
      const updatedTask: TaskPatch = {
        ...data,
        deadline: dayjs(data.deadline).format("YYYY-MM-DD"),
        taskboardStatus: reverseDisplayStatus[data.taskboardStatus],
      };
      patchTask(
        { potId, taskId, data: updatedTask },
        {
          onSuccess: () => onClose(),
        }
      );
    }
  };

  const handleSavePost = (data: FormValues) => {
    const newTask: PostTask = {
      ...data,
      taskboardStatus: reverseDisplayStatus[data.taskboardStatus],
    };
    postTask(
      { potId, data: newTask },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  console.log(`selected: ${selectedParticipants}`);
  return (
    <ExplainModal
      type="custom"
      buttonText={type === "post" ? "등록하기" : "수정 완료"}
      disabled={
        (!selectNone && selectedParticipants.length === 0) ||
        isPostPending ||
        isPatchPending
      }
      customContainerStyle={modalStyle}
      onButtonClick={handleSubmit(
        type === "post" ? handleSavePost : handleSavePatch
      )}
      onCancel={onClose}
    >
      <div css={container}>
        <p css={titleTextStyle}>
          {type === "post" ? "업무 등록하기" : "업무 수정하기"}
        </p>
        <p css={descriptionStyle}>
          내 업무에 함께하는 참여자를 골라 주세요. 없을 경우 ‘없음’ 버튼을
          클릭해 주세요.
        </p>
        <div css={memberListContainer}>
          <MemberCard
            type="none"
            onClick={clearSelectedParticipants}
            selected={selectNone && selectedParticipants.length === 0}
          />
          {members?.result?.map((member) => (
            <MemberCard
              key={member.potMemberId}
              userId={member.potMemberId}
              nickname={member.nickname}
              role={member.potRole}
              type="selection"
              selected={selectedParticipants?.includes(member.potMemberId)}
              onClick={(id) => id && updateSelectedParticipants(id)}
            />
          ))}
        </div>
      </div>
    </ExplainModal>
  );
};

export default SelectTaskMemberModal;
