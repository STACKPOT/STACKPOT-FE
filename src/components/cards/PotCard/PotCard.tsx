import Badge from "@components/commons/Badge/Badge";
import {
  cardStyle,
  categoriesContainer,
  contentContainer,
  contentStyle,
  nicknameDdayContainer,
  nicknameStyle,
  profileImageStyle,
  titleContainer,
  titleStyle,
} from "./PotCard.style";
import DdayBadge from "@components/commons/Badge/DdayBadge/DdayBadge";
import { useNavigate } from "react-router-dom";
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role";
import routes from "@constants/routes";

interface PotCardProps {
  userId: number;
  potId: number;
  role: Role;
  nickname: string;
  dday: string;
  title: string;
  content: string;
  categories: string[];
}

const PotCard: React.FC<PotCardProps> = ({
  userId,
  potId,
  role,
  nickname,
  dday,
  title,
  content,
  categories,
}: PotCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`${routes.pot.base}/${potId}`);
  };

  const handleUserClick = () => {
    navigate(`${routes.userProfile}/${userId}`);
  };

  const profileImage = roleImages[role];

  return (
    <div css={cardStyle} onClick={handleCardClick}>
      <div css={titleContainer}>
        <img
          css={profileImageStyle}
          onClick={(e) => {
            e.stopPropagation();
            handleUserClick();
          }}
          src={profileImage}
          alt="profile"
        />
        <div css={nicknameDdayContainer}>
          <p
            onClick={(e) => {
              e.stopPropagation();
              handleUserClick();
            }}
            css={nicknameStyle}
          >
            {nickname}
          </p>
          <DdayBadge days={dday} />
        </div>
      </div>
      <h1 css={titleStyle}>{title}</h1>
      <div css={contentContainer}>
        <p css={contentStyle}>{content}</p>
      </div>
      <div css={categoriesContainer}>
        {categories.length === 4 ? (
          <Badge content="전체" />
        ) : (
          categories.map((category, index) => (
            <Badge key={index} content={category} />
          ))
        )}
      </div>
    </div>
  );
};

export default PotCard;
