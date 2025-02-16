import {
  buttonContainer,
  container,
  contentContainer,
  titleStyle,
} from "./OnGoingPotCard.style";
import { MemberGroup, PotButton } from "@components/index";
import routes from "@constants/routes";
import { useNavigate } from "react-router-dom";
import { Role } from "types/role";

interface OnGoingPotCardProps {
  id: number;
  title: string;
  memberList: Role[];
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
    navigate(`${routes.myPot.task}/${id}`);
  };
  const handleFinishPot = (id: number) => {
    navigate(`${routes.createFinishedPot}/${id}`);
  };

  return (
    <div css={container} onClick={() => handleClickPot(id)}>
      <div css={contentContainer}>
        <p css={titleStyle}>{title}</p>
        <MemberGroup memberRoleList={memberList} />
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
