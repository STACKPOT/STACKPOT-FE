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
import { AboutWorkModalWrapper } from "../../components/index";
import { MushroomImage, CarrotImage, OnionImage, BroccoliImage } from "@assets/images";
import { APITaskStatus, TaskAPIPrams } from "apis/types/myPot";
import { AnotherTaskStatus, TaskStatus } from "types/taskStatus";

const roleToImage: Record<string, string> = {
  DESIGN: BroccoliImage,
  PLAN: CarrotImage,
  FRONTEND: MushroomImage,
  BACKEND: OnionImage,
};

const apiToDisplayStatus: Record<APITaskStatus, AnotherTaskStatus> = {
  OPEN: "진행 전",
  IN_PROGRESS: "진행 중",
  CLOSED: "완료",
};

const TaskDetailPage: React.FC = () => {
  const { potId, taskId } = useParams<{ potId: string; taskId: string }>();
  const navigate = useNavigate();

  const { data: task, isLoading, error } = useGetMyPotTaskDetail({potId: Number(potId), taskId: Number(taskId)});
  const { mutate: deleteTask, isPending } = useDeleteMyPotTask();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("새로운 업무 추가");
  const [activeStatus, setActiveStatus] = useState<TaskStatus>(null);

  const handlePrev = () => {
    navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
  };

  const handleDeleteTask = ({ potId, taskId }: TaskAPIPrams) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteTask({ potId, taskId });
      navigate(`${routes.myPot.base}/${routes.task}/${potId}`);
    }
  };

  const handleOpenModal = () => {
    setModalTitle("업무 수정하기");
    const convertedStatus = task?.status ? apiToDisplayStatus[task.status] : null;
    setActiveStatus(convertedStatus);
    setIsModalOpen(true);
  };

  if (isLoading || isPending) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;
  if (!task) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <>
      <AboutWorkModalWrapper
        isModalOpen={isModalOpen}
        activeStatus={activeStatus} 
        modalTitle={modalTitle}
        onClose={() => setIsModalOpen(false)}
      />

      <div css={titleContainer}>
        <div css={leftContainer}>
          <button onClick={handlePrev} css={prevButtonStyle}>
            <ArrowLeftIcon css={iconStyle} />
          </button>
          <div css={titleStyle}>{task.title}</div>
        </div>
        <div css={rightContainer}>
          <StateBadge content={apiToDisplayStatus[task.status]} />
          <div css={dropdownWrapperStyle} onClick={(event) => event.stopPropagation()}>
            <MyFeedDropdown
              topMessage="수정하기"
              bottomMessage="삭제하기"
              onTop={handleOpenModal}
              onBottom={() => handleDeleteTask({potId: Number(potId), taskId: Number(taskId)})}
            />
          </div>
        </div>
      </div>
      <div css={profileContainer}>
        <img css={profileImgStyle} src={roleToImage[task.creatorRole]} alt={task.creatorNickname} />
        <span css={nicknameStyle}>{task.creatorNickname}</span>
        <DdayBadge days={task.dday} />
      </div>
      <div css={dateContainer}>
        <CalendarIcon />
        <span css={dateStyle}>{task.deadLine}</span>
      </div>
      <div css={dividerStyle} />
      <div css={bottomContainer}>
        <div css={contentContainerStyle}>
          <span css={contentStyle}>{task.description}</span>
        </div>
        <header css={headerStyle}>
          <div css={statusTextStyle}>업무 참여자</div>
          <PotIcon css={iconStyle} />
        </header>
      </div>
      <div css={contributorContainer}>
        {task.participants.map((participant, index) => (
          <div css={contributorCard} key={index}>
            <div css={contributorInner}>
              <img src={roleToImage[participant.role]} alt={participant.nickName} css={profileImgStyle} />
              <span css={contributorNicknameStyle}>{participant.nickName}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskDetailPage;
