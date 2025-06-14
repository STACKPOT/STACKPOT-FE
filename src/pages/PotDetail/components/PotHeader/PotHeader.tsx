import { LeftIcon } from "@assets/svgs";
import {
  buttonWrapperStyle,
  backButtonStyle,
  container,
  titleContainer,
  titleStyle,
  profileContainer,
  profileStyle,
  nicknameStyle,
} from "./PotHeader.style";
import { Button, DdayBadge, Modal } from "@components/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApplyModal from "../ApplyModal/ApplyModal";
import useCancelApply from "apis/hooks/pots/useCancelApply";
import { PotStatus } from "types/potStatus";
import routes from "@constants/routes";
import { PostPotApplicationResponse } from "apis/types/pot";
import ApplyProfileModal from "../ApplyProfileModal/ApplyProfileModal";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";

interface PotHeaderProps {
  title: string;
  isMyPot: boolean;
  isApplied: boolean;
  potId: number;
  potStatus: PotStatus;
  nickname: string;
  profileImage: string;
  dday: string;
}
const PotHeader: React.FC<PotHeaderProps> = ({
  title,
  isMyPot,
  isApplied,
  potId,
  potStatus,
  nickname,
  profileImage,
  dday,
}: PotHeaderProps) => {
  const navigate = useNavigate();
  const { mutate: cancelApply } = useCancelApply();

  const { data } = useGetPotDetail(potId);
  const handleUserClick = () => {
    const userId = data?.potDetail.userId;
    navigate(`${routes.userProfile}/${userId}`);
  };

  const [showCancelApplyModal, setShowCancelApplyModal] =
    useState<boolean>(false);
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
  const [showApplyProfileModal, setShowApplyProfileModal] =
    useState<PostPotApplicationResponse | null>(null);

  const handleEdit = () => {
    navigate(`${routes.editPot}/${potId}`);
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
          <LeftIcon css={backButtonStyle} type="button" onClick={() => navigate(-1)} />
          <h1 css={titleStyle}>{title}</h1>
          <div css={buttonWrapperStyle}>
            {isMyPot ?
              <Button
                variant="action"
                actionType="edit"
                onClick={handleEdit}>
                수정
              </Button>
              :
              potStatus === "RECRUITING" &&
              (isApplied ?
                <Button
                  variant="action"
                  actionType="action"
                  onClick={() => setShowCancelApplyModal(true)}>
                  지원 취소하기
                </Button>
                :
                <Button
                  variant="action"
                  actionType="action"
                  onClick={() => setShowApplyModal(true)}>
                  지원하기
                </Button>
              )
            }
          </div>

        </div>
        <div css={profileContainer}>
          <img
            css={profileStyle}
            src={profileImage}
            alt="profile"
            onClick={handleUserClick}
          />
          <a css={nicknameStyle} onClick={handleUserClick}>
            {nickname}
          </a>
          <DdayBadge days={dday} />
        </div>
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
