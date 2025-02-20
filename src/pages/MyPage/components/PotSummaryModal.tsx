import { AppealIcon, BookIcon, CloseIcon, CreateIcon } from "@assets/svgs";
import {
  backgroundStyle,
  bodyContainer,
  bodyTitleContainer,
  bodyTitleStyle,
  closeIconStyle,
  dateContainer,
  dateStyle,
  dividerStyle,
  contentStyle,
  modalStyle,
  titleContainer,
  titleStyle,
} from "./PotSummaryModal.style";
import { useEffect } from "react";
import useGetFinishedModal from "apis/hooks/users/useGetFinishedModal";

interface PotSummaryModalProps {
  potId: number;
  onCancel: () => void;
}

const PotSummaryModal: React.FC<PotSummaryModalProps> = ({
  potId,
  onCancel,
}: PotSummaryModalProps) => {
  const { data } = useGetFinishedModal(potId);

  useEffect(() => {
    // 모달 외부 스크롤 방지
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  const {
    potName,
    userPotRole,
    potStartDate,
    potEndDate,
    potSummary,
    appealContent,
  } = data;

  return (
    <div css={backgroundStyle}>
      <div css={modalStyle}>
        <CloseIcon css={closeIconStyle} onClick={onCancel} />
        <div css={bodyContainer}>
          <div css={titleContainer}>
            <AppealIcon />
            <h1 css={titleStyle}>{`${potName} ${userPotRole} 역할`}</h1>
          </div>
          <div css={dateContainer}>
            <p css={dateStyle}>{potStartDate}</p>
            <p css={dateStyle}>~</p>
            <p css={dateStyle}>{potEndDate}</p>
          </div>
          <div css={dividerStyle} />
          <div css={bodyTitleContainer}>
            <BookIcon />
            <p css={bodyTitleStyle}>소개</p>
          </div>
          <p css={contentStyle}>{potSummary}</p>
          <div css={dividerStyle} />
          <div css={bodyTitleContainer}>
            <CreateIcon />
            <p css={bodyTitleStyle}>여기서 저는요</p>
          </div>
          <p css={contentStyle}>{appealContent}</p>
        </div>
      </div>
    </div>
  );
};
export default PotSummaryModal;
