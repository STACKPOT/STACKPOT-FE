import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  leftContainer,
  profileContainer,
  rightContainer,
  titleContainer,
  titleStyle,
  profileImgStyle,
  nicknameStyle,
  dateContainer,
  dateStyle,
  dividerStyle,
  contentStyle,
  contentContainerStyle,
  bottomContainer,
  contributorContainer,
  contributorCard,
  contributorInner,
  contributorNicknameStyle,
  iconStyle,
  prevButtonStyle,
  dropdownWrapperStyle,
} from "./TaskDetail.style";
import { DdayBadge, StateBadge, MyFeedDropdown } from "@components/index";
import { CalendarIcon, PotIcon } from "@assets/svgs";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { headerStyle } from "@pages/MyPot/MyPotMain.style";
import { statusTextStyle } from "../MyPotStatus.style";
import routes from "@constants/routes";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import { useDeleteMyPotTask } from "apis/hooks/myPots/useDeleteMyPotTask";
import { AboutWorkModalWrapper, Loading } from "../../components/index";
import { TaskStatus } from "types/taskStatus";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { displayStatus, WorkModal } from "@constants/categories";
import ConfirmModalWrapper from "@pages/MyPot/components/ConfirmModalWrapper/ConfirmModalWrapper";

const TaskDetailPage: React.FC = () => {
  const { potId, taskId } = useParams<{ potId: string; taskId: string }>();
  const navigate = useNavigate();

  const { data: task, isLoading, error } = useGetMyPotTaskDetail({ potId: Number(potId), taskId: Number(taskId) });
  const { mutate: deleteTask, isPending } = useDeleteMyPotTask();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>(WorkModal[0]);
  const [activeStatus, setActiveStatus] = useState<TaskStatus | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handlePrev = () => {
    navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
  };

  const confirmDeleteTask = () => {
      deleteTask({ potId: Number(potId), taskId: Number(taskId) });
      setIsConfirmOpen(false);
      navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
  };
  
  const handleDeleteTask = () => {
    setIsConfirmOpen(true);
  };

  const handleOpenModal = () => {
    setModalTitle(WorkModal[1]);
    const convertedStatus = task?.result?.status ? displayStatus[task.result.status] : null;
    setActiveStatus(convertedStatus);
    setIsModalOpen(true);
  };

  if (isLoading || isPending) return <Loading />;
  if (error) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;
  if (!task?.result) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <>
      <ConfirmModalWrapper isModalOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} onConfirm={confirmDeleteTask} />
      
      <AboutWorkModalWrapper
        isModalOpen={isModalOpen}
        activeStatus={activeStatus}
        modalTitle={modalTitle}
        taskId={Number(taskId)}
        onClose={() => setIsModalOpen(false)}
      />

      <div css={titleContainer}>
        <div css={leftContainer}>
          <button onClick={handlePrev} css={prevButtonStyle}>
            <ArrowLeftIcon css={iconStyle} />
          </button>
          <div css={titleStyle}>{task.result.title}</div>
        </div>
        <div css={rightContainer}>
          <StateBadge content={displayStatus[task.result.status]} />
          <div css={dropdownWrapperStyle} onClick={(event) => event.stopPropagation()}>
            <MyFeedDropdown
              topMessage="수정하기"
              bottomMessage="삭제하기"
              onTop={handleOpenModal}
              onBottom={handleDeleteTask}
            />
          </div>
        </div>
      </div>
      <div css={profileContainer}>
        <img css={profileImgStyle} src={roleImages[task.result.creatorRole as Role] ?? ""} alt={task.result.creatorNickname} />
        <span css={nicknameStyle}>{task.result.creatorNickname}</span>
        <DdayBadge days={task.result.dday} />
      </div>
      <div css={dateContainer}>
        <CalendarIcon />
        <span css={dateStyle}>{task.result.deadLine}</span>
      </div>
      <div css={dividerStyle} />
      <div css={bottomContainer}>
        <div css={contentContainerStyle}>
          <span css={contentStyle}>{task.result.description}</span>
        </div>
        <header css={headerStyle}>
          <div css={statusTextStyle}>업무 참여자</div>
          <PotIcon css={iconStyle} />
        </header>
      </div>
      <div css={contributorContainer}>
        {task.result.participants.map((participant, index) => (
          <div css={contributorCard} key={index}>
            <div css={contributorInner}>
              <span css={contributorNicknameStyle}>{participant.nickName}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskDetailPage;
