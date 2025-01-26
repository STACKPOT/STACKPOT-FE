import { CategoryButton, ExplainModal } from "@components/index";
import { container } from "./ApplyStackModal.style";
import { useState } from "react";
import { partMap } from "@constants/categories";

interface ApplyStackModalProps {
    onClickNext: (stack: string) => void;
    onModalCancel: () => void;
}
const ApplyStackModal: React.FC<ApplyStackModalProps> = ({ onClickNext, onModalCancel }: ApplyStackModalProps) => {
    const [selectedStack, setSelectedStack] = useState("");

    const handleNext = () => {
        if (selectedStack) {
            onModalCancel();
            onClickNext(selectedStack);
        }
    }

    return (
        <ExplainModal
            title={`어떤 파트로 지원할까요?\n사용자의 메인 역할 외에 다른 역할로도 지원이 가능해요.`}
            buttonText="다음으로 (1/2)"
            onButtonClick={handleNext}
            onCancel={onModalCancel}>
            <div css={container}>
                {Object.keys(partMap).map((part) =>
                    <CategoryButton style={partMap[part]} onClick={() => setSelectedStack(part)} selected={selectedStack === part}>{part}</CategoryButton>
                )}
            </div>
        </ExplainModal>
    )
}
export default ApplyStackModal;