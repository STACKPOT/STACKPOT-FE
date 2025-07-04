import { LeftIcon } from "@assets/svgs";
import {
  backButtonIconStyle,
  backButtonStyle,
  container,
  titleContainer,
  titleStyle,
} from "./PotHeader.style";
import { Button, Modal } from "@components/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApplyModal from "../ApplyModal/ApplyModal";
import useCancelApply from "apis/hooks/pots/useCancelApply";
import { PotStatus } from "types/potStatus";
import routes from "@constants/routes";
import { PostPotApplicationResponse } from "apis/types/pot";
import ApplyProfileModal from "../ApplyProfileModal/ApplyProfileModal";

interface PotHeaderProps {
  title: string;
  isMyPot: boolean;
  isApplied: boolean;
  potId: number;
  potStatus: PotStatus;
}
const PotHeader: React.FC<PotHeaderProps> = ({
  title,
  isMyPot,
  isApplied,
  potId,
  potStatus,
}: PotHeaderProps) => {
  const navigate = useNavigate();
  const { mutate: cancelApply } = useCancelApply();

  const [showCancelApplyModal, setShowCancelApplyModal] =
    useState<boolean>(false);
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  const [showApplyProfileModal, setShowApplyProfileModal] =
    useState<PostPotApplicationResponse | null>(null);

  const handleEdit = () => {
    navigate(`${routes.editPot}/${potId}`);
  };
  const handleFinishedPotEdit = () => {
    navigate(`${routes.editFinishedPot}/${potId}`);
  };
  const handleCancelApplyModalConfirm = () => {
    cancelApply(potId);
    setShowCancelApplyModal(false);
  };
  const handleApplyCompleted = (applyData: PostPotApplicationResponse) => {
    setShowApplyProfileModal(applyData);
  };

  return (
    <>
      <div css={container}>
        <div css={titleContainer}>
          <button css={backButtonStyle} onClick={() => navigate(-1)}>
            <LeftIcon css={backButtonIconStyle} type="button" />
          </button>
          <h1 css={titleStyle}>{title}</h1>
        </div>
        {potStatus !== "ONGOING" &&
          !(potStatus === "COMPLETED" && !isMyPot) && (
            <Button
              variant="action"
              onClick={
                (potStatus === "COMPLETED" &&
                  isMyPot &&
                  handleFinishedPotEdit) ||
                (isMyPot && handleEdit) ||
                (isApplied && (() => setShowCancelApplyModal(true))) ||
                (() => setShowApplyModal(true))
              }
            >
              {(potStatus === "COMPLETED" && isMyPot && "팟 소개 수정") ||
                (isMyPot && "수정") ||
                (isApplied && "지원 취소하기") ||
                "이 팟에 지원하기"}
            </Button>
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
      {showApplyModal && (
        <ApplyModal
          potId={potId}
          onApplySuccess={(applyData) => handleApplyCompleted(applyData)}
          onModalCancel={() => setShowApplyModal(false)}
        />
      )}
      {showApplyProfileModal && (
        <ApplyProfileModal
          potRole={showApplyProfileModal.potRole}
          useNickname={showApplyProfileModal.userNickname}
          onCancel={() => setShowApplyProfileModal(null)}
        />
      )}
    </>
  );
};
export default PotHeader;
