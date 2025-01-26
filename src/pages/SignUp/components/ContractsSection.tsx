import { useState } from "react";
import { contractContainer, container, detailButtonStyle, contractStyle } from "./ContractsSection.style";
import ContractModal from "./ContractModal";

interface ContractsSectionProps {
    onAgree: (agreed: boolean) => void;
}
const ContractsSection: React.FC<ContractsSectionProps> = ({ onAgree }: ContractsSectionProps) => {
    const [contracts, setContracts] = useState<{ agreed: boolean, preview: string, type: "service" | "privacy" }[]>([
        { agreed: true, preview: "서비스 약관에 동의합니다", type: "service" },
        { agreed: true, preview: "개인정보 수집 및 이용에 동의합니다.", type: "privacy" }
    ]);
    const [contractModal, setContractModal] = useState<typeof contracts[0] | null>(null);

    const handleAgree = (index: number) => {
        const newAgree = contracts.map(
            (contract, i) =>
                i === index
                    ? { ...contract, agreed: !contract.agreed }
                    : contract
        );
        setContracts(newAgree)
        onAgree(newAgree.every((contract) => contract.agreed))
    }

    return (
        <>
            <div css={container}>
                {contracts.map((contract, i) =>
                    <div css={contractContainer} >
                        <button onClick={() => handleAgree(i)}></button>
                        <p css={contractStyle}>{contract.preview}</p>
                        <button css={detailButtonStyle} onClick={() => setContractModal(contract)}>내용보기</button>
                    </div>
                )}
            </div>
            {contractModal &&
                <ContractModal
                    {...contractModal}
                    onCancelModal={() => setContractModal(null)} />
            }
        </>
    )
}
export default ContractsSection;