import { Badge, ExplainModal } from "@components/index";
import { modalBackgroundStyle, memberContainer, memberListContainer, nicknameStyle, profileStyle, stackNicknameContainer } from "./StartPotModal.style";

interface StartPotModalProps {
    selectedApplicants: { id: number; profileImage: string; nickname: string, stack: string }[];
    onStart: () => void;
    onCancelModal: () => void;
}
const StartPotModal: React.FC<StartPotModalProps> = ({ selectedApplicants, onStart, onCancelModal }: StartPotModalProps) => {
    return (
        <div css={modalBackgroundStyle}>
            <ExplainModal
                title="이 멤버들로 팟을 시작할까요?"
                buttonText="마이페이지로 이동하기"
                onButtonClick={onStart}
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
        </div>
    )
}
export default StartPotModal;