import { Badge, ExplainModal } from "@components/index";
import { memberContainer, memberListContainer, nicknameStyle, profileStyle, stackNicknameContainer } from "./StartPotModal.style";

interface StartPotModalProps {
    selectedApplicants: { id: number; profileImage: string; nickname: string, stack: string }[];
    onStartPotSuccess: () => void;
    onCancelModal: () => void;
}
const StartPotModal: React.FC<StartPotModalProps> = ({ selectedApplicants, onStartPotSuccess, onCancelModal }: StartPotModalProps) => {
    const handleStartPot = () => {
        // todo: 팟 시작하기 api
        onCancelModal();
        onStartPotSuccess();
    }

    return (
        <ExplainModal
            title="이 멤버들로 팟을 시작할까요?"
            buttonText="팟 시작하기"
            onButtonClick={handleStartPot}
            onCancel={onCancelModal}>
            <div css={memberListContainer}>
                <>
                    {selectedApplicants.map((applicant) =>
                        <div css={memberContainer}>
                            <img css={profileStyle} src={applicant.profileImage} />
                            <div css={stackNicknameContainer}>
                                <Badge content={applicant.stack} />
                                <p css={nicknameStyle}>{applicant.nickname}</p>
                            </div>
                        </div>
                    )}
                </>
            </div>
        </ExplainModal>
    )
}
export default StartPotModal;