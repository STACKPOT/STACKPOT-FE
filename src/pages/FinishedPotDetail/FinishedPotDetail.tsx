import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeftRoundIcon,
  ArrowSelector,
  ChattingIcon,
  WandStarIcon,
} from "@assets/svgs";
import {
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
import { Badge } from "@components/index";
import { variant } from "@components/commons/Badge/Badge";
import { useState } from "react";
import { AboutWorkModal } from "@pages/MyPotDetail/components";
import FinishedPotStatusSection from "./components/FinishedPotStatusSection";
import MyPotCalendar from "@pages/MyPotDetail/pages/MyPotCalendar/MyPotCalendar";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";

const badgeColors: variant[] = ["red", "green", "blue", "purple", "pink"];

const FinishedPotDetail = () => {
  const navigate = useNavigate();
  const { potId, taskId } = useParams<{ potId: string; taskId: string }>();
  const potIdNumber = Number(potId);
  const taskIdNumber = Number(taskId);

  const { data: potDetailData } = useGetMyPotTodo({
    potId: potIdNumber,
    page: 1,
    size: 1,
  });
  const { data: potSummaryData } = useGetPotSummary(potIdNumber);

  const [contentType, setContentType] = useState<"status" | "calendar">(
    "status"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    navigate(`${routes.myPot.base}`);
  };

  const handleChattingClick = () => {
    navigate(`${routes.chat}`);
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
            <h2 css={textStyle}>{potDetailData?.title ?? null}</h2>
            <ChattingIcon onClick={handleChattingClick} />
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
                  <Badge content={language} color={badgeColors[index / 5]} />
                ))}
            </div>
          </div>
        </div>
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
      </main>
    </>
  );
};
export default FinishedPotDetail;
