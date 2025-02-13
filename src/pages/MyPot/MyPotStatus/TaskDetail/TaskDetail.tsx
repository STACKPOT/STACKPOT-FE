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
} from "./TaskDetail.style";
import { DdayBadge, StateBadge, MyFeedDropdown } from "@components/index";
import { CalendarIcon, PotIcon } from "@assets/svgs"; 
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { headerStyle } from "@pages/MyPot/MyPotMain.style";
import { statusTextStyle } from "../MyPotStatus.style";
import routes from "@constants/routes";
import { getTaskDetail } from "apis/myPotAPI";
import { TaskDetailResponse, APITaskStatus } from "apis/types/myPot";
import { MushroomImage, CarrotImage, OnionImage, BroccoliImage } from "@assets/images";

const roleToImage: Record<string, string> = {
  DESIGN: BroccoliImage,
  PLAN: CarrotImage,
  FRONTEND: MushroomImage,
  BACKEND: OnionImage,
};

const apiToDisplayStatus: Record<APITaskStatus, "진행 전" | "진행 중" | "완료"> = {
  OPEN: "진행 전",
  IN_PROGRESS: "진행 중",
  CLOSED: "완료",
};

const TaskDetailPage: React.FC = () => {
  const { potId, taskId } = useParams<{ potId: string; taskId: string }>();
  const navigate = useNavigate();
  const [task, setTask] = useState<TaskDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTaskDetail = async () => {
      if (!potId || !taskId) return;
      try {
        const response = await getTaskDetail(Number(potId), Number(taskId));
        setTask(response.result ?? null);
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchTaskDetail();
  }, [potId, taskId]);

  const handlePrev = () => {
    navigate(`${routes.myPot}/${potId}`);
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;
  if (!task) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <>
      <div css={titleContainer}>
        <div css={leftContainer}>
          <button onClick={handlePrev} css={prevButtonStyle}>
            <ArrowLeftIcon css={iconStyle} />
          </button>
          <div css={titleStyle}>{task.title}</div>
        </div>
        <div css={rightContainer}>
          <StateBadge content={apiToDisplayStatus[task.status]} />
          
          <div
            css={dropdownWrapperStyle} 
            onClick={(event) => {
              event.stopPropagation(); 
            }}
          >
            <MyFeedDropdown
              topMessage="수정하기"
              bottomMessage="삭제하기"
              onTop={() => alert("수정하기 클릭됨")}
              onBottom={() => alert("삭제하기 클릭됨")}
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
