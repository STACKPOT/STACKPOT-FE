import { CategoryButton, ExplainModal } from "@components/index";
import { container } from "./ApplyStackModal.style";
import { useState } from "react";

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
                <CategoryButton style="FE" onClick={() => setSelectedStack("프론트엔드")} selected={selectedStack === "프론트엔드"}>프론트엔드</CategoryButton>
                <CategoryButton style="BE" onClick={() => setSelectedStack("백엔드")} selected={selectedStack === "백엔드"}>백엔드</CategoryButton>
                <CategoryButton style="DE" onClick={() => setSelectedStack("디자인")} selected={selectedStack === "디자인"}>디자인</CategoryButton>
                <CategoryButton style="PM" onClick={() => setSelectedStack("기획")} selected={selectedStack === "기획"}>기획</CategoryButton>
            </div>
        </ExplainModal>
    )
}
export default ApplyStackModal;