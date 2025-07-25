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
import {
  MemberGroup,
  DdayBadge,
  Badge,
  MyFeedDropdown,
  Modal,
} from "@components/index";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { useParams } from "react-router-dom";
import useDeleteMyPotTask from "apis/hooks/myPots/useDeleteMyPotTask";
import { useState } from "react";
import { TaskStatus } from "types/taskStatus";
import useGetMyPotTaskDetail from "apis/hooks/myPots/useGetMyPotTaskDetail";
import { displayStatus } from "@constants/categories";
import { AboutWorkModal } from "@pages/MyPotDetail/components";

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
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId);

  const { mutate: deleteTask } = useDeleteMyPotTask();
  const [modalTitle, setModalTitle] = useState("새로운 업무 추가");
  const [activeStatus, setActiveStatus] = useState<TaskStatus | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const { data: task, error } = useGetMyPotTaskDetail({
    potId: potIdNumber,
    taskId: Number(taskId),
  });

  const profileImage = roleImages[creatorRole as Role] || "";

  const roleList = participants.map((p) => p.role) as Role[];

  const handleDeleteTask = () => {
    deleteTask(
      { potId: potIdNumber, taskId: taskId },
      { onSuccess: () => setDeleteModal(false) }
    );
  };

  const handleDeleteTaskModal = () => {
    setDeleteModal(true);
  };

  const handleOpenModal = () => {
    setModalTitle("업무 수정하기");
    const convertedStatus = task?.result?.status
      ? displayStatus[task.result.status]
      : null;
    setActiveStatus(convertedStatus);
    setIsModalOpen(true);
  };

  if (error) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;
  if (!task?.result) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <>
      {isModalOpen && (
        <AboutWorkModal
          type="patch"
          onClose={() => setIsModalOpen(false)}
          taskId={task?.result?.taskboardId}
        />
      )}
      {deleteModal && (
        <Modal
          title="업무 내용을 삭제하시겠습니까?"
          message="삭제하시면 복구할 수 없습니다. 정말로 삭제할까요?"
          confirmType="neg"
          cancelButton="취소"
          confirmButton="삭제하기"
          onCancel={() => setDeleteModal(false)}
          onConfirm={handleDeleteTask}
        />
      )}

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
            <div
              css={forDropdownStyle}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <MyFeedDropdown
                topMessage="수정하기"
                bottomMessage="삭제하기"
                onTop={handleOpenModal}
                onBottom={handleDeleteTaskModal}
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
              <img
                css={profileImageStyle}
                src={profileImage}
                alt="ProfileImage"
              />
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
