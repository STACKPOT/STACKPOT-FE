import { ExplainModal } from "@components/index";
import { contentStyle } from "./ContractModal.style";
import ContractDetailList from "../ContractionDetailList/ContractDetailList";

interface ContractModalProps {
  type: "service" | "privacy";
  onCancelModal: () => void;
}

const ContractModal: React.FC<ContractModalProps> = ({
  type,
  onCancelModal,
}: ContractModalProps) => {
  const contracts: {
    content: string;
    childContracts: string[];
    bullet: boolean;
    value?: number;
  }[] =
    type === "service"
      ? [
          {
            content: `본 약관은 회원 가입 시 동의한 것으로 간주되며, 서비스 이용 시\n회원에게 적용됩니다.\n\n`,
            childContracts: [],
            bullet: false,
          },
          {
            content: `회원 가입은 실명, 이메일 주소, 비밀번호를 포함한 필수 정보를\n제공하여 완료됩니다.`,
            childContracts: [],
            bullet: true,
            value: 1,
          },
          {
            content: `회원은 제공한 정보의 정확성을 유지하고, 회사는 회원 정보를\n보호하기 위해 노력합니다.`,
            bullet: true,
            childContracts: [],
          },
          {
            content: `회원은 서비스를 본래 용도에 맞게 사용해야 합니다.`,
            childContracts: [],
            bullet: true,
          },
          {
            content: `팟이 시작될 경우, 원활한 진행을 위해 팀장에게 카카오 아이디가\n보여집니다.`,
            childContracts: [],
            bullet: true,
          },
          {
            content: `본 약관은 회원 가입 시 동의한 것으로 간주되며,\n서비스 이용 시 회원에게 적용됩니다.`,
            childContracts: [],
            bullet: true,
          },
        ]
      : [
          {
            content: `STACKPOT(이하 "회사"라 칭함)은\n다음과 같은 개인 정보를 수집합니다.`,
            childContracts: [
              `실명, 전화번호, 카카오톡 아이디, 기타 회원 가입 시 필요한 정보`,
              `회사는 회원 탈퇴 또는 개인 정보 수집 및 이용 목적 달성 시까지\n개인 정보를 보유하며, 해당 기간 이후에는 즉시 파기됩니다.`,
            ],
            bullet: true,
          },
          {
            content: `개인 정보의 파기 절차 및 방법`,
            childContracts: [
              `개인 정보는 수집 및 이용 목적이 달성된 경우,\n또는 회원 탈퇴 요청 시에 안전하게 파기됩니다.`,
              `파기된 개인 정보는 기록, 전자적 파일 등의 형태로\n남지 않도록 파기됩니다.`,
            ],
            bullet: true,
          },
          {
            content: `본 약관은 회원 가입 시 동의한 것으로 간주되며,\n서비스 이용 시 회원에게 적용됩니다.`,
            childContracts: [],
            bullet: false,
          },
        ];

  return (
    <ExplainModal
      title={type === "service" ? "서비스 약관" : "개인정보 수집 및 이용 약관"}
      buttonText="확인했습니다"
      onButtonClick={onCancelModal}
      onCancel={onCancelModal}
    >
      <p css={contentStyle(type)}>
        <ContractDetailList contracts={contracts} />
      </p>
    </ExplainModal>
  );
};
export default ContractModal;
