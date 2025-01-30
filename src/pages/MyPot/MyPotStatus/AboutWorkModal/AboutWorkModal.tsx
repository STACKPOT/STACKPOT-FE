import { useState } from "react";
import { CloseIcon, PotIcon } from "@assets/svgs";
import {
  cancelContainer,
  mainContainer,
  subContainer,
  cancelIconStyle,
  titleContainer,
  titleTextStyle,
  firstSectionContainer,
  labelTextStyle,
  inputFieldStyle,
  secondSectionContainer,
  badgeContainer,
  badgeStyle,
  selectedBadgeStyle,
  explainationInputFieldStyle,
  textareaContainer,
  thirdContainer,
  contributorContainer,
  contributorButtonOuterContainer,
  contributorButtonStyle,
  contributorButtonInnerContainer,
  nicknameStyle,
  saveButtonStyle,
  buttonTextStyle,
  buttonContainer,
  deleteButtonStyle,
  anotherSaveButtonStyle,
} from "./AboutWorkModal.style";
import theme from "@styles/theme";
import { DatePicker } from "@pages/CreatePot/components";

interface AboutWorkModalProps {
  onClose: () => void;
  onSave: (status: "진행 전" | "진행 중" | "완료" | null) => void;
  activeStatus: "진행 전" | "진행 중" | "완료" | null;
  title: string;
}

const AboutWorkModal: React.FC<AboutWorkModalProps> = ({ onClose, onSave, activeStatus, title }) => {
  const [selectedStatus, setSelectedStatus] = useState<"진행 전" | "진행 중" | "완료" | null>(activeStatus);
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "진행 전":
        return selectedStatus === status
          ? selectedBadgeStyle(theme.color.feedback.negative_transparent)
          : badgeStyle;
      case "진행 중":
        return selectedStatus === status
          ? selectedBadgeStyle(theme.color.feedback.positive_transparent)
          : badgeStyle;
      case "완료":
        return selectedStatus === status
          ? selectedBadgeStyle(theme.color.feedback.positive_blue_transparent)
          : badgeStyle;
      default:
        return badgeStyle;
    }
  };


  const handleSave = () => {
    onSave(selectedStatus); 
    onClose(); 
  };

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

          <div css={firstSectionContainer}>
            <div css={labelTextStyle}>업무 제목</div>
            <input type="text" placeholder="업무 제목을 입력하세요" css={inputFieldStyle} />
          </div>

          <div css={secondSectionContainer}>
            <div css={labelTextStyle}>마감일</div>
            <DatePicker />
          </div>

          <div css={firstSectionContainer}>
            <div css={labelTextStyle}>업무 상태</div>
            <div css={badgeContainer}>
              <button css={getBadgeStyle("진행 전")} onClick={() => setSelectedStatus("진행 전")}>진행 전</button>
              <button css={getBadgeStyle("진행 중")} onClick={() => setSelectedStatus("진행 중")}>진행 중</button>
              <button css={getBadgeStyle("완료")} onClick={() => setSelectedStatus("완료")}>완료</button>
            </div>
          </div>

          <div css={explainationInputFieldStyle}>
            <textarea placeholder="간단한 설명을 100자 이내로 작성해주세요" css={textareaContainer}/>
          </div>

          <div css={contributorContainer}>
            <div css={labelTextStyle}>참여자</div>
          </div>

          <div css={contributorButtonOuterContainer}>
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} css={contributorButtonStyle(false)}>
                <div css={contributorButtonInnerContainer}>
                  <PotIcon />
                  <div css={nicknameStyle}>너무 착한 브로콜리</div>
                </div>
              </div>
            ))}
          </div>

          {title === "새로운 업무 추가" && (
            <div css={saveButtonStyle} onClick={handleSave}>
              <button css={buttonTextStyle}>저장하기</button>
            </div>
          )}

          {title === "업무 수정하기" && (
            <div css={buttonContainer}>
              <div css={deleteButtonStyle}>
                <button css={buttonTextStyle}>삭제하기</button>
              </div>
              <div css={anotherSaveButtonStyle}>
                <button css={buttonTextStyle}>저장하기</button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default AboutWorkModal;
