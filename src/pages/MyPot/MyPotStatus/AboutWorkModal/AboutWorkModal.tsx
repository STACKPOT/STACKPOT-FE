import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "@assets/svgs";
import { TextInput, DateInput, StatusBadgeSelector, ExplainationInputField, ContributorList, ActionButton } from "../../components/index";
import { mainContainer, subContainer, cancelContainer, cancelIconStyle, thirdContainer, titleContainer, titleTextStyle } from "./AboutWorkModal.style";
import { AnotherTaskStatus, TaskStatus } from "../../../../types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import usePatchTask from "apis/hooks/myPots/usePatchMyTask";
import { Participant, TaskPatch } from "apis/types/myPot";
import { deleteTask } from "apis/myPotAPI";
import routes from "@constants/routes";

interface AboutWorkModalProps {
  onClose: () => void;
  activeStatus: TaskStatus;
  title: string;
}

const apiToDisplayStatus: Record<"OPEN" | "IN_PROGRESS" | "CLOSED", "진행 전" | "진행 중" | "완료"> = {
  OPEN: "진행 전",
  IN_PROGRESS: "진행 중",
  CLOSED: "완료",
};

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({ onClose, activeStatus, title }) => {
  const { potId, taskId } = useParams<{ potId: string; taskId: string }>();
  const { data: taskDetail, isLoading } = useGetMyPotTaskDetail(Number(potId), Number(taskId));
  const { mutate: patchTask, isPending } = usePatchTask(); 

  const [selectedStatus, setSelectedStatus] = useState<TaskStatus>(activeStatus);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDate, setTaskDate] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [participants, setParticipants] = useState<Participant[]>([]); 

  const navigate = useNavigate();
  
  const handleDeleteTask = (potId: number, taskId: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteTask(potId, taskId);
      navigate(routes.myPot.potPage.replace(":potId", String(potId)));
    }
  };

  useEffect(() => {
    if (title === "업무 수정하기" && taskDetail) {
      setTaskTitle(taskDetail.title);
      setTaskDate(taskDetail.deadLine);
      setSelectedStatus(apiToDisplayStatus[taskDetail.status]);
      setTaskDescription(taskDetail.description);
      setParticipants(taskDetail.participants);
    }
  }, [taskDetail, title]);

  const handleSave = () => {
    if (title === "업무 수정하기") {
      const displayToApiStatus: Record<AnotherTaskStatus, "OPEN" | "IN_PROGRESS" | "CLOSED"> = {
        "진행 전": "OPEN",
        "진행 중": "IN_PROGRESS",
        "완료": "CLOSED",
      };

      const formattedDeadline = taskDate.replace(/\./g, "").split(" ").join("-");

      const updatedTask: TaskPatch = {
        title: taskTitle,
        deadline: formattedDeadline,
        taskboardStatus: selectedStatus ? displayToApiStatus[selectedStatus] : "OPEN",
        description: taskDescription,
        participants: [1],
      };

      patchTask({ potId: Number(potId), taskId: Number(taskId), data: updatedTask });
    }
    onClose();
  };

  if (isLoading || isPending) return <p>로딩 중...</p>;

  return (
    <div css={mainContainer}>
      <div css={subContainer}>
        <div css={cancelContainer}>
          <CloseIcon css={cancelIconStyle} onClick={onClose} />
        </div>

        <div css={thirdContainer}>
          <div css={titleContainer}>
            <div css={titleTextStyle}>{title}</div>
          </div>

          <TextInput value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
          <DateInput value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
          <StatusBadgeSelector selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
          <ExplainationInputField value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="간단한 설명을 100자 이내로 작성해주세요" />
          <ContributorList />

          <ActionButton title={title} onSave={handleSave} onDelete={() =>handleDeleteTask(Number(potId), Number(taskId))} />
        </div>
      </div>
    </div>
  );
};

export default AboutWorkModal;
