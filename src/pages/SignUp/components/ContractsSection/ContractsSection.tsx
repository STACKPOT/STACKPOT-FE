import { useState } from "react";
import {
  contractContainer,
  container,
  detailButtonStyle,
  contractStyle,
  modalContainerStyle,
} from "./ContractsSection.style";
import { CheckBox, Modal } from "@components/index";
import { useFormContext } from "react-hook-form";

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

  const serviceContent = `1. 본 약관은 회원 가입 시 동의한 것으로 간주되며, 서비스 이용 시 회원에게 적용됩니다.
  2. 회원 가입은 실명, 이메일 주소, 비밀번호를 포함한 필수 정보를 제공하여 완료됩니다.
  3. 회원은 제공한 정보의 정확성을 유지하고, 회사는 회원 정보를 보호하기 위해 노력합니다.
  4. 회원은 서비스를 본래 용도에 맞게 사용해야 합니다.
  5. 팟이 시작될 경우, 원활한 진행을 위해 팀장에게 카카오 아이디가 보여집니다.
  본 약관은 회원 가입 시 동의한 것으로 간주되며, 서비스 이용 시 회원에게 적용됩니다.`;
  const privacyContent = `1. STACKPOT(이하 "회사"라 칭함)은 다음과 같은 개인 정보를 수집합니다.
2. 실명, 전화번호, 카카오톡 아이디, 기타 회원 가입 시 필요한 정보- 회사는 회원 탈퇴 또는 개인 정보 수집 및 이용 목적 달성 시까지 개인 정보를 보유하며, 해당 기간 이후에는 즉시 파기됩니다.
3. 개인 정보의 파기 절차 및 방법- 개인 정보는 수집 및 이용 목적이 달성된 경우, 또는 회원 탈퇴 요청 시에 안전하게 파기됩니다.
4. 파기된 개인 정보는 기록, 전자적 파일 등의 형태로 남지 않도록 파기됩니다.
본 약관은 회원 가입 시 동의한 것으로 간주되며, 서비스 이용 시 회원에게 적용됩니다.`;

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
          message={
            contractModal.type === "service" ? serviceContent : privacyContent
          }
          confirmButton="확인했어요"
          customContainerStyle={modalContainerStyle}
          onConfirm={() => setContractModal(null)}
          onCancel={() => setContractModal(null)}
        />
      )}
    </>
  );
};

export default ContractsSection;
