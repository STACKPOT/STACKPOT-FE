import { DdayBadge, PotButton, PotInformation } from "@components/index";
import {
  container,
  ddayBadgeWrapper,
  nicknameStyle,
  profileContainer,
  profileStyle,
  titleContainer,
  titleStyle,
} from "./PotInformationCard.style";
import { useNavigate } from "react-router-dom";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { PotStatus } from "types/potStatus";
import routes from "@constants/routes";

interface PotInformationCardProps {
  potId: number;
  type: "applied" | "made";
  userId: number;
  userRole: Role;
  userNickname: string;
  potStatus: PotStatus;
  potName: string;
  potStartDate: string;
  potDuration: string;
  potLan: string;
  potModeOfOperation: string;
  potContent: string;
  recruitmentDetails: string;
  dday: string;
  onButtonClick: (id: number) => void;
}
const PotInformationCard: React.FC<PotInformationCardProps> = ({
  potId,
  type,
  potName,
  userRole,
  userNickname,
  dday,
  potStartDate,
  potDuration,
  potModeOfOperation,
  recruitmentDetails,
  potLan,
  onButtonClick
}: PotInformationCardProps) => {
  const navigate = useNavigate();
  const handleClickPot = (id: number) => {
    navigate(`${routes.pot.base}/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <div css={container} onClick={() => handleClickPot(potId)}>
      <div css={titleContainer}>
        <h1 css={titleStyle}>{potName}</h1>
        <PotButton onClick={() => onButtonClick(potId)}>
          {(type === "applied" && "지원 취소하기") || "팟 소개 수정"}
        </PotButton>
      </div>
      <div css={profileContainer}>
        <img css={profileStyle} src={roleImages[userRole]} alt="profile" />
        <p css={nicknameStyle}>{userNickname}</p>
        <div css={ddayBadgeWrapper}>
          <DdayBadge days={dday} />
        </div>
      </div>
      <PotInformation
        startDate={potStartDate}
        period={potDuration}
        method={potModeOfOperation}
        stacks={recruitmentDetails}
        languages={potLan}
      />
    </div>
  );
};
export default PotInformationCard;
