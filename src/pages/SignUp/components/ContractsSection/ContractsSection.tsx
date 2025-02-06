import { useState } from "react";
import {
  contractContainer,
  container,
  detailButtonStyle,
  contractStyle,
} from "./ContractsSection.style";
import { CheckBox } from "@components/index";
import { useFormContext } from "react-hook-form";
import ContractModal from "../ContractModal/ContractModal";

interface ContractsSectionProps {
  onAgree?: (agreed: boolean) => void;
}

const ContractsSection: React.FC<ContractsSectionProps> = ({ onAgree }) => {
  const { setValue } = useFormContext();
  const [contracts, setContracts] = useState<
    { agreed: boolean; preview: string; type: "service" | "privacy" }[]
  >([
    { agreed: false, preview: "서비스 약관에 동의합니다", type: "service" },
    {
      agreed: false,
      preview: "개인정보 수집 및 이용에 동의합니다.",
      type: "privacy",
    },
  ]);
  const [contractModal, setContractModal] = useState<
    (typeof contracts)[0] | null
  >(null);

  const handleAgree = (index: number) => {
    const newContracts = contracts.map((contract, i) =>
      i === index ? { ...contract, agreed: !contract.agreed } : contract
    );
    setContracts(newContracts);
    const allAgreed = newContracts.every((contract) => contract.agreed);
    setValue("contractsAgreed", allAgreed, { shouldValidate: true });
    if (onAgree) onAgree(allAgreed);
  };

  return (
    <>
      <div css={container}>
        {contracts.map((contract, i) => (
          <div key={contract.type} css={contractContainer}>
            <CheckBox
              selected={contract.agreed}
              onSelect={() => handleAgree(i)}
            />
            <p css={contractStyle}>{contract.preview}</p>
            <button
              type="button"
              css={detailButtonStyle}
              onClick={() => setContractModal(contract)}
            >
              내용보기
            </button>
          </div>
        ))}
      </div>
      {contractModal && (
        <ContractModal
          {...contractModal}
          onCancelModal={() => setContractModal(null)}
        />
      )}
    </>
  );
};

export default ContractsSection;
