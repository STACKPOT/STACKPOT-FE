import { container } from "./AppliedPot.style";
import { useState } from "react";
import Modal from "@components/commons/Modal/Modal";
import useGetPotsApply from "apis/hooks/pots/useGetPotApply";
import useCancelApply from "apis/hooks/pots/useCancelApply";
import { CtaCard, MyPotCard, NoData } from "@components/index";
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
      },
    });
  };

  const handleNavigateToAllPot = () => {
    navigate(routes.pot.base);
    window.scrollTo(0, 0);
  };

  return (
    <div css={container}>
      <CtaCard type="pot" />
      {pots && pots.length > 0 ? (
        pots.map((pot) => <MyPotCard key={pot.potId} {...pot} type="applied" />)
      ) : (
        <NoData
          message={`😥\n지원한 팟이 없어요\n팟에 지원해 보세요!`}
          buttonText="모든 팟 페이지로"
          onClickButton={handleNavigateToAllPot}
        />
      )}
      {cancelApplyPotId !== null && (
        <Modal
          title="지원을 취소하시겠어요?"
          message="팟 게시자는 지원자를 팟에 추가할 수 없게 됩니다."
          onConfirm={() => handleCancelApplyConfirm(cancelApplyPotId)}
          onCancel={() => setCancelApplyPotId(null)}
        />
      )}
    </div>
  );
};

export default AppliedPotPage;
