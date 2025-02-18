import { MemberGroup, PotButton } from "@components/index";
import {
  container,
  elementContainer,
  elementContentStyle,
  elementTitleStyle,
  gridContainer,
  profileContainer,
  teamElementContainer,
  titleContainer,
  titleProfileContainer,
  titleStyle,
} from "./FinishedPotCard.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppealModal, PotSummaryModal } from "@pages/MyPage/components";
import { Role } from "types/role";
import routes from "@constants/routes";

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

  const elementList: { title: string; content: string }[] = [
    { title: "나의 역할", content: myRole },
    { title: "시작 날짜", content: startDate },
    { title: "사용 언어", content: languages },
    { title: "종료 날짜", content: endDate },
    { title: "팀 구성", content: stacks },
  ];

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

  return (
    <>
      <div css={container} onClick={() => handleClickPot(id)}>
        <div css={titleProfileContainer}>
          <div css={titleContainer}>
            <h1 css={titleStyle}>{title}</h1>
            {buttonType !== "none" && (
              <PotButton onClick={() => handleEditPot(id)}>
                {buttonType === "edit" ? "팟 소개 수정" : "여기서 저는요"}
              </PotButton>
            )}
          </div>
          <div css={profileContainer}>
            <MemberGroup memberRoleList={members} />
          </div>
        </div>
        <div css={gridContainer}>
          {elementList.map((element) => (
            <div
              css={
                element.title !== "팀 구성"
                  ? elementContainer
                  : teamElementContainer
              }
              key={element.title}
            >
              <p css={elementTitleStyle}>{element.title}</p>
              <p css={elementContentStyle}>{element.content}</p>
            </div>
          ))}
        </div>
      </div>
      {appealModal !== null && (
        <AppealModal
          potId={appealModal}
          onCancel={() => setAppealModal(null)}
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
