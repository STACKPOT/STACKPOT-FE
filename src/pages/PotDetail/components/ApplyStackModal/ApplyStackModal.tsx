import { CategoryButton, ExplainModal } from "@components/index";
import { container } from "./ApplyStackModal.style";

interface ApplyStackModalProps {
    selectedStack: string | null;
    onSelectStack: (stack: string) => void;
    onClickNext: () => void;
    onModalCancel: () => void;
}
const ApplyStackModal: React.FC<ApplyStackModalProps> = ({ selectedStack, onSelectStack, onClickNext, onModalCancel }: ApplyStackModalProps) => {
    return (
        <ExplainModal
            title={`어떤 파트로 지원할까요?\n사용자의 메인 역할 외에 다른 역할로도 지원이 가능해요.`}
            buttonText="다음으로 (1/2)"
            onButtonClick={onClickNext}
            onCancel={onModalCancel}>
            <div css={container}>
                <CategoryButton style="FE" onClick={() => onSelectStack("프론트엔드")} selected={selectedStack === "프론트엔드"}>프론트엔드</CategoryButton>
                <CategoryButton style="BE" onClick={() => onSelectStack("백엔드")} selected={selectedStack === "백엔드"}>백엔드</CategoryButton>
                <CategoryButton style="DE" onClick={() => onSelectStack("디자인")} selected={selectedStack === "디자인"}>디자인</CategoryButton>
                <CategoryButton style="PM" onClick={() => onSelectStack("기획")} selected={selectedStack === "기획"}>기획</CategoryButton>
            </div>
        </ExplainModal>
    )
}
export default ApplyStackModal;