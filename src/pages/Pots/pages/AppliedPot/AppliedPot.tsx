import { container, noDataContainer, noDataTextStyle } from "./AppliedPot.style"
import { useState } from "react"
import { PotInformationCard } from "./components";
import Modal from "@components/commons/Modal/Modal";
import useGetPotsApply from "apis/hooks/pots/useGetPotApply";
import useCancelApply from "apis/hooks/pots/useCancelApply";
import { Button, CtaCard } from "@components/index";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";


const AppliedPotPage = () => {
  const navigate = useNavigate();
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

  const handleNavigateToAllPot = () => {
    navigate(routes.pot.base);
    window.scrollTo(0, 0);
  }

  return (
    <div css={container}>
      <CtaCard type="pot" />
      {pots && pots.length > 0 ?
        pots.map((pot) =>
          <PotInformationCard
            key={pot.potId}
            {...pot}
            onButtonClick={() => setCancelApplyPotId(pot.potId)} />
        )
        :
        <div css={noDataContainer}>
          <p css={noDataTextStyle}>😥{"\n"}지원한 팟이 없어요{"\n"}팟에 지원해 보세요!</p>
          <Button variant="entry" onClick={handleNavigateToAllPot}>모든 팟 페이지로</Button>
        </div>
      }
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