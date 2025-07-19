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
  potSaveCountStyle,
  profileContainer,
  profileImageStyle,
  titleContainer,
  titleStyle,
} from "./PotCard.style";
import { useNavigate } from "react-router-dom";
import { roleImages } from "@constants/roleImage";
import { Role } from "types/role";
import routes from "@constants/routes";
import { SaveFilledIcon, SaveIcon } from "@assets/svgs";
import usePostSavePot from "apis/hooks/saves/useSavePot";
import { useSnackbar } from "providers";

interface PotCardProps {
  userId: number;
  potId: number;
  role: Role;
  nickname: string;
  dday: string;
  title: string;
  content: string;
  categories: string[];
  isSaved: boolean;
  potSaveCount: number;
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
  isSaved,
  potSaveCount,
}: PotCardProps) => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("accessToken"));
  const { mutate } = usePostSavePot();
  const { showSnackbar } = useSnackbar();

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
    if (isLoggedIn) {
      mutate(potId);
    } else {
      showSnackbar({
        message: "로그인 후 이용해주세요.",
        severity: "error",
      });
    }
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
            {isSaved === true ? <SaveFilledIcon /> : <SaveIcon />}
          </button>
          <p css={potSaveCountStyle}>{potSaveCount}</p>
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
