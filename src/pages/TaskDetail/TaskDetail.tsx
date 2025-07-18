import { useEffect, useState } from "react";
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
  profileImageStyle,
  arrowIconStyle,
  profileInnerContainer,
  createdDateStyle
} from "./TaskDetail.style";
import { container } from "../MyPotDetail/MyPotDetail.style"
import { DdayBadge, StateBadge, MyFeedDropdown, Badge } from "@components/index";
import { CalendarIcon, PotIcon } from "@assets/svgs";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { headerStyle } from "@pages/MyPotDetail/MyPotDetail.style";
import { statusTextStyle } from "../MyPotDetail/pages/MyPotStatus/MyPotStatus.style";
import routes from "@constants/routes";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import { useDeleteMyPotTask } from "apis/hooks/myPots/useDeleteMyPotTask";
import { AboutWorkModalWrapper, Loading } from "../MyPotDetail/components/index";
import { APITaskStatus, TaskStatus } from "types/taskStatus";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { displayStatus, partKoreanNameMap, WorkModal } from "@constants/categories";
import { usePatchMyPotStatus } from "apis/hooks/myPots/usePatchMyPotStatus";
import { AnotherTaskStatus } from "../../types/taskStatus";
import { ChangeStatusModalWrapper } from "./components";
import ConfirmModalWrapper from "@pages/MyPotDetail/components/ConfirmModalWrapper/ConfirmModalWrapper";

const TaskDetailPage: React.FC = () => {

  const { potId, taskId } = useParams<{ potId: string; taskId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const potIdNumber = Number(potId);
  const taskIdNumber = Number(taskId);

  const { data: task, isLoading, error } = useGetMyPotTaskDetail({
    potId: potIdNumber,
    taskId: taskIdNumber,
  });
  console.log(task);
  const { mutate: deleteTask, isPending: isDeletePending } = useDeleteMyPotTask();
  const { mutate: patchStatus, isPending: isStatusPending } = usePatchMyPotStatus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangingModalOpen, setIsChangingModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>(WorkModal[0]);
  const [activeStatus, setActiveStatus] = useState<TaskStatus | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handlePrev = () => {
    navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
  };

  const confirmDeleteTask = () => {
    deleteTask(
      { potId: potIdNumber, taskId: taskIdNumber },
      {
        onSuccess: () => {
          setIsConfirmOpen(false);
          navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
        },
      }
    );
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

  const handleOpenChangingModal = () => {
    setIsChangingModalOpen(true);
  };

  const confirmChangeModal = (newStatus: AnotherTaskStatus) => {
    const reverseDisplayStatus = Object.fromEntries(
      Object.entries(displayStatus).map(([key, value]) => [value, key])
    ) as Record<AnotherTaskStatus, APITaskStatus>;

    const patchValue = reverseDisplayStatus[newStatus] as string;

    patchStatus({
      potId: potIdNumber,
      taskId: taskIdNumber,
      data: { status: patchValue },
    });
    setIsChangingModalOpen(false);
  };

  const handleProfileClick = (userId: number) => {
    navigate(`${routes.userProfile}/${userId}`);
  }

  if (isLoading || isDeletePending || isStatusPending) return <Loading />;
  if (error) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;
  if (!task?.result) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <main css={container}>
      <ConfirmModalWrapper
        isModalOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmDeleteTask}
      />

      <ChangeStatusModalWrapper
        isModalOpen={isChangingModalOpen}
        onClose={() => setIsChangingModalOpen(false)}
        onConfirm={confirmChangeModal}
        initialStatus={displayStatus[task.result.status]}
      />

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
            <ArrowLeftIcon css={arrowIconStyle} />
          </button>
          <DdayBadge days={task.result.dday} />
          <div css={titleStyle}>{task.result.title}</div>
        </div>
        <div css={rightContainer}>
          <StateBadge badgeType="task" taskState={displayStatus[task.result.status]} onClick={handleOpenChangingModal} />
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
        <img
          css={profileImgStyle}
          src={roleImages[task.result.creatorRole as Role] ?? ""}
          alt={task.result.creatorNickname}
        />
        <div css={profileInnerContainer}>
          <span css={nicknameStyle}>{task.result.creatorNickname}</span>
          <span css={createdDateStyle}>{'2025년 2월 8일 15:20'}</span>
          {/* API 에서 건네주는 createdDate가 없어서 임의 작성 */}
        </div>
      </div>
      <div css={dividerStyle} />
      <div css={dateContainer}>
        <CalendarIcon />
        <span css={dateStyle}>{task.result.deadLine}</span>
      </div>
      <div css={bottomContainer}>
        <div css={contentContainerStyle}>
          <span css={contentStyle}>{task.result.description}</span>
        </div>
        <div css={dividerStyle} />
        <header css={headerStyle}>
          <div css={statusTextStyle}>업무 참여자</div>
          <PotIcon css={iconStyle} />
        </header>
      </div>
      <div css={contributorContainer}>
        {task.result.participants.map((participant, index) => (
          <div css={contributorCard} key={index} onClick={() => { handleProfileClick(participant.userId) }}>
            <div css={contributorInner}>
              <img src={roleImages[participant.role as Role]} css={profileImageStyle} alt="프로필" />
              <span css={contributorNicknameStyle}>{participant.nickName}</span>
              <Badge key={index} content={partKoreanNameMap[participant.role]} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TaskDetailPage;