import {
  badgeContainer,
  bottomContainer,
  cardStyle,
  contentContainer,
  contentTextStyle,
  dateTextStyle,
  forDropdownStyle,
  innerContainer,
  lineStyle,
  taskCardInnerTopContainer,
  nicknameStyle,
  profileContainer,
  profileImageStyle,
  titleTextStyle,
} from "./TaskCard.style";
import { MemberGroup, DdayBadge, Badge, MyFeedDropdown } from "@components/index";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import ConfirmModalWrapper from "@pages/MyPot/components/ConfirmModalWrapper/ConfirmModalWrapper";
import { useParams } from "react-router-dom";
import useDeleteMyPotTask from "apis/hooks/myPots/useDeleteMyPotTask";
import { useState } from "react";
import { TaskStatus } from "types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import { displayStatus } from "@constants/categories";
import { AboutWorkModalWrapper, Loading } from "@pages/MyPot/components";

interface Participant {
  role: string;
  profileImage?: string;
}

interface TaskCardProps {
  taskId: number;
  title: string;
  dday: string;
  tag: string[];
  content: string;
  date: string;
  creatorRole: string;
  nickname: string;
  participants: Participant[];
  onClick?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  taskId,
  title,
  dday,
  tag,
  content,
  date,
  creatorRole,
  nickname,
  participants,
  onClick,
}: TaskCardProps) => {

  const { potId } = useParams<{ potId: string; }>();
  const potIdNumber = Number(potId);

  const { mutate: deleteTask, isPending } = useDeleteMyPotTask();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("새로운 업무 추가");
  const [activeStatus, setActiveStatus] = useState<TaskStatus | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: task, isLoading, error } = useGetMyPotTaskDetail({ potId: potIdNumber, taskId: Number(taskId) });

  const profileImage = roleImages[creatorRole as Role] || "";

  const roleList = participants.map((p) => p.role) as Role[];


  const confirmDeleteTask = () => {
    deleteTask({ potId: potIdNumber, taskId: taskId });
    setIsConfirmOpen(false);
  };

  const handleDeleteTask = () => {
    setIsConfirmOpen(true);
  };

  const handleOpenModal = () => {
    setModalTitle("업무 수정하기");
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
        taskId={task?.result?.taskboardId}
        onClose={() => setIsModalOpen(false)}
      />
      
      <div css={cardStyle} onClick={onClick}>
        <div css={innerContainer}>
          <div css={taskCardInnerTopContainer}>
            <div css={badgeContainer}>
              <DdayBadge days={dday} />
              {tag.length >= 4 ? (
                <Badge content="전체" />
              ) : (
                tag.map((t, index) => <Badge key={index} content={t} />)
              )}
            </div>
            <div css={forDropdownStyle} onClick={(event) => { event.stopPropagation(); }}>
              <MyFeedDropdown
                topMessage="수정하기"
                bottomMessage="삭제하기"
                onTop={handleOpenModal}
                onBottom={handleDeleteTask}
              />
            </div>
          </div>
            
          <div css={contentContainer}>
            <p css={titleTextStyle}>{title}</p>
            <p css={contentTextStyle}>{content}</p>
          </div>
          <p css={dateTextStyle}>{date}</p>
          <div css={lineStyle} />
          <div css={bottomContainer}>
            <div css={profileContainer}>
              <img css={profileImageStyle} src={profileImage} alt="ProfileImage"/>
              <p css={nicknameStyle}>{nickname}</p>
            </div>
            <MemberGroup memberRoleList={roleList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;