import { ExplainModal, MemberCard } from "@components/index";
import {
  memberListContainer,
  modalStyle,
  titleStyle,
} from "./StartPotModal.style";
import { GetPotApplicationResponse } from "apis/types/pot";
import useStartPot from "apis/hooks/pots/useStartPot";

interface StartPotModalProps {
  potId: number;
  selectedApplicants: GetPotApplicationResponse[];
  onStartPotSuccess: () => void;
  onCancelModal: () => void;
}
const StartPotModal: React.FC<StartPotModalProps> = ({
  potId,
  selectedApplicants,
  onStartPotSuccess,
  onCancelModal,
}: StartPotModalProps) => {
  const { mutate, isPending } = useStartPot();
  const handleStartPot = () => {
    mutate(
      {
        potId: potId,
        body: {
          applicantIds: selectedApplicants.map(
            (applicant) => applicant.applicationId
          ),
        },
      },
      {
        onSuccess: () => {
          onCancelModal();
          onStartPotSuccess();
        },
      }
    );
  };

  return (
    <ExplainModal
      buttonText="준비 완료"
      type="custom"
      disabled={isPending}
      customContainerStyle={modalStyle}
      onButtonClick={handleStartPot}
      onCancel={onCancelModal}
    >
      <>
        <p css={titleStyle}>이 멤버와 함께 팟을 시작할게요!</p>
        <div css={memberListContainer}>
          {selectedApplicants.map((applicant) => (
            <MemberCard
              userId={applicant.userId}
              nickname={applicant.userNickname}
              role={applicant.potRole.name}
              type="selection"
              onClick={() => {}}
            />
          ))}
        </div>
      </>
    </ExplainModal>
  );
};
export default StartPotModal;
