import { ExplainModal, MemberCard } from "@components/index";
import { memberListContainer } from "./StartPotModal.style";
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
      title="이 멤버와 함께 팟을 시작할게요!"
      buttonText="준비 완료"
      disabled={isPending}
      onButtonClick={handleStartPot}
      onCancel={onCancelModal}
    >
      <div css={memberListContainer}>
        {selectedApplicants.map((applicant) => (
          <MemberCard
            userId={applicant.userId}
            nickname={applicant.userNickname}
            role={applicant.potRole}
            type="selection"
            onClick={() => {}}
          />
        ))}
      </div>
    </ExplainModal>
  );
};
export default StartPotModal;
