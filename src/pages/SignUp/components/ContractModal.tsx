import { ExplainModal } from "@components/index";
import { modalBackgroundContainer, contentStyle } from "./ContractModal.styel";

interface ContractModalProps {
    title: string,
    content:string,
    onCancelModal: () => void,
}

const ContractModal: React.FC<ContractModalProps> = ({ title, content, onCancelModal }: ContractModalProps) => {
    return (
        <div css={modalBackgroundContainer}>
            <ExplainModal
                title={title}
                buttonText="확인했습니다"
                onButtonClick={onCancelModal}
                onCancel={onCancelModal}>
                <p css={contentStyle}>{content}  </p>
            </ExplainModal>
        </div>
    )
}
export default ContractModal;