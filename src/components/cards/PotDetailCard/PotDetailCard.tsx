import { Participation } from "types/participation";
import { PotStatus } from "types/potStatus";
import {
  buttonStyle,
  container,
  contentContainer,
  contentStyle,
  elementContainer,
  elementContentStyle,
  elementLabelStyle,
  informationContainer,
  layerBackground,
  layerStyle,
  memberGroupContainer,
  partBadgeContainer,
  titleContainer,
  titleStyle,
} from "./PotDetailCard.style";
import StateBadge from "@components/commons/Badge/StateBadge/StateBadge";
import Badge from "@components/commons/Badge/Badge";
import MemberGroup from "@components/commons/Badge/MemberGroup/MemberGroup";
import { Role } from "types/role";
import Button from "@components/commons/Button/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import Modal from "@components/commons/Modal/Modal";
import useCancelApply from "apis/hooks/pots/useCancelApply";

interface PotDetailCardProps {
  potId: number;
  dday: string;
  potName: string;
  potContent: string;
  potStatus: PotStatus;
  members: Record<Role, number>;
  potModeOfOperation: Participation;
  potStartDate: string;
  potDuration: string;
  applicants: Role[];
  type: "myPage" | "myPot" | "applied" | "recruiting";
}

const buttonTexts = {
  myPage: "여기서 저는요 👋",
  myPot: "다 끓였어요 🔥",
  applied: "지원 취소하기",
  recruiting: "",
};

const PotDetailCard: React.FC<PotDetailCardProps> = ({
  potId,
  dday,
  potName,
  potContent,
  potStatus,
  members,
  potModeOfOperation,
  potStartDate,
  potDuration,
  applicants,
  type,
}: PotDetailCardProps) => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [showCancelApplyModal, setShowCancelApplyModal] = useState(false);

  const { mutate: cancelApply } = useCancelApply();

  const handleMouseOver = (mouseOver: boolean) => {
    if (type !== "recruiting") {
      console.log(mouseOver);
      setShowButton(mouseOver);
    }
  };

  const handleCardClick = () => {
    navigate(`${routes.pot.base}/${potId}`);
    window.scrollTo(0, 0);
  };

  const handleButtonClick = () => {
    if (type === "myPage") {
    } else if (type === "myPot") {
    } else if (type === "applied") {
      setShowCancelApplyModal(true);
    }
  };

  const handleCancelApplyModalConfirm = () => {
    cancelApply(potId);
    setShowCancelApplyModal(false);
  };

  const elementLabels = [
    { icon: null, label: "진행 방식", content: potModeOfOperation },
    { icon: null, label: "시작 날짜", content: potStartDate },
    { icon: null, label: "예상 기간", content: potDuration },
  ];

  return (
    <>
      <div css={container} onClick={handleCardClick}>
        <div css={contentContainer}>
          <div css={titleContainer}>
            <Badge content={dday} />
            <p css={titleStyle}>{potName}</p>
            <StateBadge badgeType="pot" potState={potStatus} />
          </div>
          <p css={contentStyle}>{potContent}</p>
          <div css={partBadgeContainer}>
            {Object.keys(members).map((category) => (
              <Badge content={category} key={category} />
            ))}
          </div>
          <div css={memberGroupContainer}>
            <MemberGroup memberRoleList={applicants} />
          </div>
        </div>
        <div
          css={informationContainer}
          onMouseEnter={() => handleMouseOver(true)}
        >
          {elementLabels.map((element) => {
            const LabelIcon = element.icon;
            return (
              <div css={elementContainer} key={element.label}>
                <p css={elementLabelStyle}>{element.label}</p>
                <p css={elementContentStyle}>{element.content}</p>
              </div>
            );
          })}
        </div>
        {showButton && (
          <div onMouseLeave={() => handleMouseOver(false)}>
            <div css={layerStyle}>
              <div css={layerBackground(type === "applied" ? "red" : "blue")} />
              <Button
                variant="action"
                actionType={type === "applied" ? "neg" : "basic"}
                customStyle={buttonStyle}
                onClick={handleButtonClick}
              >
                {buttonTexts[type]}
              </Button>
            </div>
          </div>
        )}
      </div>
      {showCancelApplyModal && (
        <Modal
          title="지원을 취소하시겠어요?"
          message="팟 게시자는 지원자를 팟에 추가할 수 없게 됩니다."
          onConfirm={handleCancelApplyModalConfirm}
          onCancel={() => setShowCancelApplyModal(false)}
        />
      )}
    </>
  );
};

export default PotDetailCard;
