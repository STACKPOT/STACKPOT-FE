import {
  buttonContainer,
  container,
  contentContainer,
  titleStyle,
} from "./OnGoingPotCard.style";
import { MemberGroup } from "@components/index";
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
    window.scrollTo(0, 0);
  };
  const handleFinishPot = (id: number) => {
    navigate(`${routes.createFinishedPot}/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div css={container} onClick={() => handleClickPot(id)}>
      <div css={contentContainer}>
        <p css={titleStyle}>{title}</p>
        <MemberGroup memberRoleList={memberList} />
      </div>
      {isMyPot && <div css={buttonContainer}></div>}
    </div>
  );
};
export default OnGoingPotCard;
