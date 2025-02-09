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

interface PotInformationCardProps {
  id: number;
  type: "applied" | "made";
  title: string;
  profileImage: string;
  nickname: string;
  dday: string;
  startDate: string;
  period: string;
  method: string;
  stacks: string;
  languages: string;
  onButtonClick: (id: number) => void;
}
const PotInformationCard: React.FC<PotInformationCardProps> = ({
  id,
  type,
  title,
  profileImage,
  nickname,
  dday,
  startDate,
  period,
  method,
  stacks,
  languages,
  onButtonClick,
}: PotInformationCardProps) => {
  const navigate = useNavigate();
  const handleClickPot = (id: number) => {
    navigate(`/pot/${id}`);
  };

  return (
    <div css={container} onClick={() => handleClickPot(id)}>
      <div css={titleContainer}>
        <h1 css={titleStyle}>{title}</h1>
        <PotButton onClick={() => onButtonClick(id)}>
          {(type === "applied" && "지원 취소하기") || "팟 소개 수정"}
        </PotButton>
      </div>
      <div css={profileContainer}>
        <img css={profileStyle} src={profileImage} alt="profile" />
        <p css={nicknameStyle}>{nickname}</p>
        <div css={ddayBadgeWrapper}>
          <DdayBadge days={dday} />
        </div>
      </div>
      <PotInformation
        startDate={startDate}
        period={period}
        method={method}
        stacks={stacks}
        languages={languages}
      />
    </div>
  );
};
export default PotInformationCard;
