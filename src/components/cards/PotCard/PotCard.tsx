import Badge from "@components/commons/Badge/Badge";
import {
  cardStyle,
  categoriesContainer,
  contentStyle,
  nicknameDdayContainer,
  nicknameStyle,
  profileImageStyle,
  titleContainer,
  titleStyle,
} from "./PotCard.style";
import DdayBadge from "@components/commons/Badge/DdayBadge/DdayBadge";
import { useNavigate } from "react-router-dom";

interface PotCardProps {
  id: number;
  profileImage: string;
  nickname: string;
  dday: number;
  title: string;
  content: string;
  categories: string[];
}

const PotCard: React.FC<PotCardProps> = ({
  id,
  profileImage,
  nickname,
  dday,
  title,
  content,
  categories,
}: PotCardProps) => {
  const navigate = useNavigate();
  const handleClickCard = () => {
    navigate(`/pot/${id}`);
  }
  return (
    <>
      <div css={cardStyle} onClick={handleClickCard}>
        <div css={titleContainer}>
          <img css={profileImageStyle} src={profileImage} alt="profile" />
          <div css={nicknameDdayContainer}>
            <p css={nicknameStyle}>{nickname}</p>
            <DdayBadge days={dday} />
          </div>
        </div>
        <h1 css={titleStyle}>{title}</h1>
        <p css={contentStyle}>{content}</p>
        <div css={categoriesContainer}>
          {categories.map((category, index) => (
            <Badge key={index} content={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PotCard;
