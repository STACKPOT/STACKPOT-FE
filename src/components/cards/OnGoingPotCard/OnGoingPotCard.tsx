import {
  buttonContainer,
  container,
  contentContainer,
  titleStyle,
} from "./OnGoingPotCard.style";
import { MemberGroup, PotButton } from "@components/index";
import { useNavigate } from "react-router-dom";

interface OnGoingPotCardProps {
  id: number;
  title: string;
  memberList: string[];
  isMyPot: boolean;
}
const OnGoingPotCard: React.FC<OnGoingPotCardProps> = ({
  id,
  title,
  memberList,
  isMyPot,
}: OnGoingPotCardProps) => {
  const navigate = useNavigate();
  const handleClickPot = (id: number) => {
    navigate(`/pot/${id}`);
  };
  const handleFinishPot = (id: number) => {
    // todo: 팟 끓이기 페이지로 이동
  };

  return (
    <div css={container} onClick={() => handleClickPot(id)}>
      <div css={contentContainer}>
        <p css={titleStyle}>{title}</p>
        <MemberGroup profileImageList={memberList} />
      </div>
      {isMyPot && (
        <div css={buttonContainer}>
          <PotButton onClick={() => handleFinishPot(id)}>다 끓였어요</PotButton>
        </div>
      )}
    </div>
  );
};
export default OnGoingPotCard;
