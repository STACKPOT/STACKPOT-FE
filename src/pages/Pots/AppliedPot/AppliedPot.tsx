import { PotIcon } from "@assets/svgs"
import { container, potIconStyle, titleContainer, titleStyle } from "./AppliedPot.style"
import { useState } from "react"
import { PotInformationCard } from "../components";
import Modal from "@components/commons/Modal/Modal";
import useGetPotsApply from "apis/hooks/pots/useGetPotApply";
import useCancelApply from "apis/hooks/pots/useCancelApply";


const AppliedPotPage = () => {
  const [cancelApplyPotId, setCancelApplyPotId] = useState<number | null>(null);

  const { data: pots } = useGetPotsApply();
  const { mutate } = useCancelApply();

  const handleCancelApplyConfirm = (potId: number) => {
    mutate(potId, {
      onSuccess: () => {
        setCancelApplyPotId(null);
        window.location.reload();
      }
    })
  }

  return (
    <div css={container}>
      <div css={titleContainer}>
        <h1 css={titleStyle}>내가 지원한 팟</h1>
        <PotIcon css={potIconStyle} />
      </div>
      {pots && pots.map((pot) =>
        <PotInformationCard
          key={pot.potId}
          {...pot}
          onButtonClick={() => setCancelApplyPotId(pot.potId)} />)}
      {cancelApplyPotId !== null &&
        <Modal
          title="지원을 취소하시겠어요?"
          message="팟 게시자는 지원자를 팟에 추가할 수 없게 됩니다."
          onConfirm={() => handleCancelApplyConfirm(cancelApplyPotId)}
          onCancel={() => setCancelApplyPotId(null)}
        />
      }
    </div>
  )
}

export default AppliedPotPage