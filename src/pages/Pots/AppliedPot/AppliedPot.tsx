import { PotIcon } from "@assets/svgs"
import { container, potIconStyle, titleContainer, titleStyle } from "./AppliedPot.style"
import { useState } from "react"
import { PotInformationCard } from "../components";
import appliedPotsData from "mocks/appliedPotsData";
import Modal from "@components/commons/Modal/Modal";


const AppliedPotPage = () => {
  const [pots, setPots] = useState(appliedPotsData);
  const [cancelApplyPotId, setCancelApplyPotId] = useState<number | null>(null);

  const handleCancelApplyConfirm = (potId: number) => {
    // todo: 팟 지원 취소하기 api 호출
    setCancelApplyPotId(null);
    setPots((prev) => prev.filter((pot) => pot.id !== potId));
  }

  return (
    <div css={container}>
      <div css={titleContainer}>
        <h1 css={titleStyle}>내가 지원한 팟</h1>
        <PotIcon css={potIconStyle} />
      </div>
      {pots.map((pot) =>
        <PotInformationCard
          key={pot.id}
          {...pot}
          onButtonClick={() => setCancelApplyPotId(pot.id)} />)}
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