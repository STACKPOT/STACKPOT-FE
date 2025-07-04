import { MemberGroup, PotInformation } from "@components/index";
import {
  container,
  profileContainer,
  titleContainer,
  titleProfileContainer,
  titleStyle,
} from "./FinishedPotCard.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppealModal, PotSummaryModal } from "@pages/MyPage/components";
import { Role } from "types/role";
import routes from "@constants/routes";
import { AppealPotPatch } from "apis/types/pot";
import usePatchAppealPot from "apis/hooks/pots/usePatchAppealPot";

interface FinishedPotCardProps {
  id: number;
  title: string;
  myRole: string;
  startDate: string;
  endDate: string;
  stacks: string;
  languages: string;
  members: Role[];
  isProfilePage: boolean;
  isUserPage: boolean;
  buttonType?: "edit" | "appeal" | "none";
}

const FinishedPotCard: React.FC<FinishedPotCardProps> = ({
  id,
  title,
  myRole,
  startDate,
  endDate,
  stacks,
  languages,
  members,
  isProfilePage: isMyPage,
  isUserPage,
  buttonType = "none",
}: FinishedPotCardProps) => {
  const navigate = useNavigate();

  const [appealModal, setAppealModal] = useState<number | null>(null);
  const [summaryModal, setSummaryModal] = useState<number | null>(null);
  const { mutate } = usePatchAppealPot();

  const handleClickPot = (id: number) => {
    if (isMyPage || isUserPage) {
      setSummaryModal(id);
    } else {
      navigate(`${routes.pot.base}/${id}`);
      window.scrollTo(0, 0);
    }
  };

  const handleEditPot = (id: number) => {
    if (buttonType === "edit") {
      navigate(`${routes.editFinishedPot}/${id}`);
      window.scrollTo(0, 0);
    } else {
      setAppealModal(id);
    }
  };
  const handleCompleted = (potId: number, data: AppealPotPatch) => {
    mutate(
      {
        potId,
        body: data,
      },
      {
        onSuccess: () => {
          setAppealModal(null);
        },
      }
    );
  };

  return (
    <>
      <div css={container} onClick={() => handleClickPot(id)}>
        <div css={titleProfileContainer}>
          <div css={titleContainer}>
            <h1 css={titleStyle}>{title}</h1>
          </div>
          <div css={profileContainer}>
            <MemberGroup memberRoleList={members} />
          </div>
        </div>
        <PotInformation
          elementList={[
            { title: "나의 역할", content: myRole },
            { title: "시작 날짜", content: startDate },
            { title: "사용 언어", content: languages },
            { title: "종료 날짜", content: endDate },
            { title: "팀 구성", content: stacks },
          ]}
        />
      </div>
      {appealModal !== null && (
        <AppealModal
          potId={appealModal}
          onCancel={() => setAppealModal(null)}
          onCompleted={(data) => handleCompleted(appealModal, data)}
        />
      )}
      {summaryModal !== null && (
        <PotSummaryModal
          potId={summaryModal}
          onCancel={() => setSummaryModal(null)}
        />
      )}
    </>
  );
};
export default FinishedPotCard;
