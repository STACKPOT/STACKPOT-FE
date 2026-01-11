import { useState } from "react";
import {
  contractContainer,
  container,
  detailButtonStyle,
  contractStyle,
  modalContainerStyle,
  modalContentStyle,
} from "./ContractsSection.style";
import { CheckBox, Modal } from "@components/index";
import { useFormContext } from "react-hook-form";
import ContractContent from "./ContractContent";

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
        <Modal
          title={
            contractModal.type === "service"
              ? "서비스 약관"
              : "개인정보 수집 및 이용 약관"
          }
          message={<ContractContent contractType={contractModal.type} />}
          confirmButton="확인했어요"
          customContainerStyle={modalContainerStyle}
          customContentStyle={modalContentStyle}
          onConfirm={() => setContractModal(null)}
          onCancel={() => setContractModal(null)}
        />
      )}
    </>
  );
};

export default ContractsSection;
