import { useState } from "react";
import { contractContainer, container, detailButtonStyle, contractStyle } from "./ContractsSection.style";
import ContractModal from "./ContractModal";

interface ContractsSectionProps {
    onAgree: (agreed: boolean) => void;
}
const ContractsSection: React.FC<ContractsSectionProps> = ({ onAgree }: ContractsSectionProps) => {
    const [contracts, setContracts] = useState([
        { agreed: true, preview: "서비스 약관에 동의합니다", title: "서비스 약관", content: `본 약관은 회원가입 시 동의한 것으로 간주되며, 서비스 이용 시 회원에게 적용됩니다\n\n1. 회원 가입은 실명, 이메일 주소, 비밀번호를 포함한 필수 정보를 제공하여 완료됩니다.\n2. 회원은 제공한 정보의 정확성을 유지하고, 회사는 회원의 정보를 보호하기 위해 노력합니다.\n3. 회원은 서비스를 본래 용도에 맞게 사용해야 합니다.\n4. 팟이 시작될 경우, 원활한 진행을 위해 팀장에게 카카오 아이디가 보여집니다.\n5. 본 약관은 회원가입 시 동의한 것으로 간주되며, 서비스 이용 시 회원에게 적용됩니다.` },
        { agreed: true, preview: "개인정보 수집 및 이용에 동의합니다.", title: "개인정보 수집 및 이용 약관", content: "1. STACKPOT(이하 \"회사\"라 칭함)은\n다음과 같은 개인 정보를 수집합니다." }
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