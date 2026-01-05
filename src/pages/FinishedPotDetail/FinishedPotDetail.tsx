import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeftRoundIcon,
  ArrowSelector,
  ChattingIcon,
  WandStarIcon,
} from "@assets/svgs";
import {
  appealBadgeListContainer,
  appealContainer,
  appealContainerMemberStyle,
  appealContainerNotMemberStyle,
  appealContentStyle,
  appealTextAreaStyle,
  appealTitleButtonContainer,
  appealTitleContainer,
  languageLabelContainer,
  languageListContainer,
  summaryContainer,
  summaryContentStyle,
  summaryLabelStyle,
} from "./FinishedPotDetail.style";
import {
  textStyle,
  container,
  titleStyle,
  headerStyle,
  iconStyle,
  tabsContainer,
  navLinkStyle,
} from "../MyPotDetail/MyPotDetail.style";
import routes from "@constants/routes";
import { prevButtonStyle } from "@pages/TaskDetail/TaskDetail.style";
import useGetPotSummary from "apis/hooks/users/useGetPotSummary";
import { Badge, Button, Modal } from "@components/index";
import { variant } from "@components/commons/Badge/Badge";
import { useRef, useState } from "react";
import { AboutWorkModal } from "@pages/MyPotDetail/components";
import FinishedPotStatusSection from "./components/FinishedPotStatusSection";
import MyPotCalendar from "@pages/MyPotDetail/pages/MyPotCalendar/MyPotCalendar";
import usePatchAppealPot from "apis/hooks/pots/usePatchAppealPot";
import useGetProfilePotAppealContent from "apis/hooks/users/useGetProfilePotAppealContent";

const badgeColors: variant[] = ["red", "green", "blue", "purple", "pink"];

const FinishedPotDetail = () => {
  const navigate = useNavigate();
  const { potId, taskId, userId } = useParams<{
    potId: string;
    taskId: string;
    userId: string;
  }>();
  const potIdNumber = Number(potId);
  const taskIdNumber = Number(taskId);
  const userIdNumber = Number(userId);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const { data: potSummaryData } = useGetPotSummary(potIdNumber);
  const { data: appealData } = useGetProfilePotAppealContent(
    potIdNumber,
    userId === "my" ? undefined : userIdNumber
  );
  const { mutate: submitAppeal } = usePatchAppealPot();

  const [contentType, setContentType] = useState<"status" | "calendar">(
    "status"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [appealContent, setAppealContent] = useState(
    appealData?.appealContent ?? ""
  );
  const [isDeleteAppealModalOpen, setIsDeleteAppealModalOpen] = useState(false);

  const tabs = [
    {
      type: "status",
      label: "업무 현황",
      onclick: () => setContentType("status"),
    },
    {
      type: "calendar",
      label: "캘린더",
      onclick: () => setContentType("calendar"),
    },
  ];

  const handlePrev = () => {
    navigate(-1);
  };

  const handleChattingClick = () => {
    navigate(`${routes.chat}`);
  };

  const handleEditing = () => {
    if (!isEditing) {
      setAppealContent(appealData?.appealContent ?? "");
      setIsEditing(true);
    } else {
      submitAppeal(
        {
          potId: potIdNumber,
          body: {
            appealContent: appealContent === "" ? null : appealContent,
          },
        },
        {
          onSuccess: (response) => {
            setIsEditing(false);
            setAppealContent(response.result ?? "");
          },
        }
      );
    }
  };

  const handleDeleteAppeal = () => {
    submitAppeal(
      { potId: potIdNumber, body: { appealContent: null } },
      {
        onSuccess: () => setIsDeleteAppealModalOpen(false),
      }
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAppealContent(e.target.value);
    if (textRef.current) {
      textRef.current.style.height = "0px";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
  };

  return (
    <>
      {isModalOpen && (
        <AboutWorkModal
          type="post"
          onClose={() => setIsModalOpen(false)}
          potId={potIdNumber}
          taskId={taskIdNumber}
        />
      )}
      <main css={container}>
        <div css={titleStyle}>
          <div css={headerStyle}>
            <button onClick={handlePrev} css={prevButtonStyle}>
              <ArrowLeftRoundIcon css={iconStyle} />
            </button>
            {potSummaryData?.isMember && (
              <ChattingIcon onClick={handleChattingClick} />
            )}
            <h2 css={textStyle}>{potSummaryData?.potName}</h2>
          </div>
        </div>
        <div
          css={[
            appealContainer,
            potSummaryData?.isMember
              ? appealContainerMemberStyle
              : appealContainerNotMemberStyle,
          ]}
        >
          <div css={appealTitleContainer}>
            여기서 저는요 👋
            {userId === "my" && (
              <div css={appealTitleButtonContainer}>
                <Button
                  variant="action"
                  actionType="neg"
                  onClick={() => setIsDeleteAppealModalOpen(true)}
                >
                  삭제
                </Button>
                <Button variant="action" onClick={handleEditing}>
                  편집하기
                </Button>
              </div>
            )}
          </div>
          {isEditing ? (
            <textarea
              css={appealTextAreaStyle}
              placeholder="내가 한 역할을 어필해 보세요!"
              ref={textRef}
              onChange={handleInputChange}
              value={appealContent}
            />
          ) : (
            <p css={[summaryContentStyle, appealContentStyle]}>
              {appealData?.appealContent ?? "설명을 작성하지 않았어요."}
            </p>
          )}
          <div css={appealBadgeListContainer}>
            {appealData &&
              [appealData.userPotRole as string]
                .concat(appealData.myBadges.map((badge) => badge.badgeName))
                .map((badge, index) => (
                  <Badge
                    key={`${badge}-${index}`}
                    content={badge}
                    color={badgeColors[index % 5]}
                  />
                ))}
          </div>
        </div>
        <div css={summaryContainer}>
          <div css={summaryLabelStyle}>
            <WandStarIcon />
            AI 요약
          </div>
          <p css={summaryContentStyle}>{potSummaryData?.summary}</p>
          <div css={languageLabelContainer}>
            <div css={summaryLabelStyle}>
              <ArrowSelector />
              사용언어
            </div>
            <div css={languageListContainer}>
              {potSummaryData &&
                potSummaryData.potLan.map((language, index) => (
                  <Badge
                    key={`${language}-${index}`}
                    content={language}
                    color={badgeColors[index % 5]}
                  />
                ))}
            </div>
          </div>
        </div>
        {potSummaryData?.isMember && (
          <>
            <div css={tabsContainer}>
              {tabs.map((tab) => {
                const isActive = contentType === tab.type;
                return (
                  <div
                    key={tab.label}
                    onClick={tab.onclick}
                    css={[navLinkStyle(isActive)]}
                  >
                    {tab.label}
                  </div>
                );
              })}
            </div>
            {contentType === "status" ? (
              <FinishedPotStatusSection potId={potIdNumber} />
            ) : (
              <MyPotCalendar />
            )}
          </>
        )}
      </main>
      {isDeleteAppealModalOpen && (
        <Modal
          title="업무 내용을 삭제하시겠습니까?"
          message="삭제하시면 복구할 수 없습니다. 정말로 삭제할까요?"
          confirmType="neg"
          confirmButton="삭제하기"
          onCancel={() => setIsDeleteAppealModalOpen(false)}
          onConfirm={() => handleDeleteAppeal()}
        />
      )}
    </>
  );
};
export default FinishedPotDetail;
