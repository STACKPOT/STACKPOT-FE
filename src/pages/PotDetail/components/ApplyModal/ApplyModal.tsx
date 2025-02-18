import { CategoryButton, ExplainModal } from "@components/index";
import { container } from "./ApplyModal.style";
import { useState } from "react";
import { partMap } from "@constants/categories";
import useApplyPot from "apis/hooks/pots/useApplyPot";
import { Role } from "types/role";
import { PostPotApplicationResponse } from "apis/types/pot";

interface ApplyModalProps {
    potId: number;
    onApplySuccess: (result: PostPotApplicationResponse) => void;
    onModalCancel: () => void;
}
const ApplyModal: React.FC<ApplyModalProps> = ({ potId, onApplySuccess, onModalCancel }: ApplyModalProps) => {
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);
    const { mutate } = useApplyPot();

    const handleApply = () => {
        if (selectedRole) {
            mutate({
                potId: potId,
                body: { potRole: selectedRole }
            }, {
                onSuccess: (data) => {
                    if (data.result) {
                        onModalCancel();
                        onApplySuccess(data.result);
                    }
                }
            })
        }
    }

    return (
        <ExplainModal
            title={`어떤 파트로 지원할까요?\n사용자의 메인 역할 외에 다른 역할로도 지원이 가능해요.`}
            buttonText="지원하기"
            onButtonClick={handleApply}
            onCancel={onModalCancel}>
            <div css={container}>
                {Object.keys(partMap).map((part) =>
                    <CategoryButton
                        style={partMap[part]}
                        onClick={() => setSelectedRole(partMap[part] as Role)}
                        selected={selectedRole === partMap[part]}>{part}</CategoryButton>
                )}
            </div>
        </ExplainModal>
    )
}
export default ApplyModal;