import Badge from "@components/commons/Badge/Badge";
import {
  buttonContainer,
  buttonStyle,
  cardHeader,
  cardStyle,
  categoriesContainer,
  contentContainer,
  contentStyle,
  nicknameStyle,
  profileContainer,
  profileImageStyle,
  titleContainer,
  titleStyle,
} from "./PotCard.style";
import { useNavigate } from "react-router-dom";
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role";
import routes from "@constants/routes";
import { SaveIcon } from "@assets/svgs";

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
  const isLoggedIn = Boolean(localStorage.getItem("accessToken"));

  const handleCardClick = () => {
    if (isLoggedIn) {
      navigate(`${routes.pot.base}/${potId}`);
    }
  };

  const handleUserClick = () => {
    if (isLoggedIn) {
      navigate(`${routes.userProfile}/${userId}`);
    }
  };

  const handleSave = () => {
    //TODO: API 연결
  };

  const profileImage = roleImages[role];

  return (
    <div css={cardStyle} onClick={handleCardClick}>
      <div css={cardHeader}>
        <div css={profileContainer}>
          <img
            css={profileImageStyle}
            onClick={(e) => {
              e.stopPropagation();
              handleUserClick();
            }}
            src={profileImage}
            alt="profile"
          />
          <p
            onClick={(e) => {
              e.stopPropagation();
              handleUserClick();
            }}
            css={nicknameStyle}
          >
            {nickname}
          </p>
        </div>
        <div css={buttonContainer}>
          <button
            css={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              handleSave();
            }}
          >
            <SaveIcon />
          </button>
          <p>99+</p>
        </div>
      </div>
      <div css={contentContainer}>
        <div css={titleContainer}>
          <Badge content={dday} />
          <h3 css={titleStyle}>{title}</h3>
        </div>
        <div css={contentContainer}>
          <p css={contentStyle}>{content}</p>
        </div>
        <div css={categoriesContainer}>
          {categories.map((category, index) => (
            <Badge key={index} content={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotCard;
