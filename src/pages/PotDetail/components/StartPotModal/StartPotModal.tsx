import { Badge, ExplainModal } from "@components/index";
import { memberContainer, memberListContainer, nicknameStyle, profileStyle, stackNicknameContainer } from "./StartPotModal.style";
import { GetPotApplicationResponse } from "apis/types/pot";
import { roleImages } from "@constants/roleImage";
import useStartPot from "apis/hooks/pots/useStartPot";

interface StartPotModalProps {
    potId: number;
    selectedApplicants: GetPotApplicationResponse[];
    onStartPotSuccess: () => void;
    onCancelModal: () => void;
}
const StartPotModal: React.FC<StartPotModalProps> = ({ potId, selectedApplicants, onStartPotSuccess, onCancelModal }: StartPotModalProps) => {
    const { mutate, isPending } = useStartPot();
    const handleStartPot = () => {
        mutate(
            {
                potId: potId,
                body: {
                    applicantIds: selectedApplicants.map((applicant) => applicant.userId)
                },
            },
            {
                onSuccess: () => {
                    onCancelModal();
                    onStartPotSuccess();
                }
            }
        )
    }

    return (
        <ExplainModal
            title="이 멤버들로 팟을 시작할까요?"
            buttonText="팟 시작하기"
            disabled={isPending}
            onButtonClick={handleStartPot}
            onCancel={onCancelModal}>
            <div css={memberListContainer}>
                <>
                    {selectedApplicants.map((applicant) =>
                        <div css={memberContainer}>
                            <img css={profileStyle} src={roleImages[applicant.potRole]} alt="profile" />
                            <div css={stackNicknameContainer}>
                                <Badge content={applicant.potRole} />
                                <p css={nicknameStyle}>{applicant.userNickname}</p>
                            </div>
                        </div>
                    )}
                </>
            </div>
        </ExplainModal>
    )
}
export default StartPotModal;