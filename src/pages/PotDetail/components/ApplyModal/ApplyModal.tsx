import { ExplainModal, RoleCard } from "@components/index";
import { container, modalStyle, textStyle } from "./ApplyModal.style";
import { useState } from "react";
import { partMap } from "@constants/categories";
import useApplyPot from "apis/hooks/pots/useApplyPot";
import { Role } from "types/role";
import { PostPotApplicationResponse } from "apis/types/pot";

interface ApplyModalProps {
  potId: number;
  onApplySuccess: (result: PostPotApplicationResponse) => void;
  onModalCancel: () => void;
}
const ApplyModal: React.FC<ApplyModalProps> = ({
  potId,
  onApplySuccess,
  onModalCancel,
}: ApplyModalProps) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const { mutate } = useApplyPot();

  const handleApply = () => {
    if (selectedRole) {
      mutate(
        {
          potId: potId,
          body: { potRole: selectedRole },
        },
        {
          onSuccess: (data) => {
            if (data.result) {
              onModalCancel();
              onApplySuccess(data.result);
            }
          },
        }
      );
    }
  };

  return (
    <ExplainModal
      title={`어떤 파트로 지원할까요?\n`}
      buttonText="지원하기"
      customContainerStyle={modalStyle}
      onButtonClick={handleApply}
      onCancel={onModalCancel}
    >
      <>
        <p css={textStyle}>
          다른 파트를 지원 시에는 닉네임도 해당 역할에 맞게 변경돼요.{"\n"}
          프론트엔드로 지원했을 때는 '버섯'이었던 닉네임이 백엔드로 지원하면
          '양파'로 바뀌어요.
        </p>
        <div css={container}>
          {Object.keys(partMap).map((part) => (
            <RoleCard
              role={partMap[part]}
              type="selection"
              selected={selectedRole === partMap[part]}
              onClick={() => setSelectedRole(partMap[part] as Role)}
            />
          ))}
        </div>
      </>
    </ExplainModal>
  );
};
export default ApplyModal;
