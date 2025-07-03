import { Role } from "types/role";
import {
  checkIconStyle,
  container,
  nicknameStyle,
  profileStyle,
  selectedContainerStyle,
  selectedNicknameStyle,
} from "./MemberCard.style";
import { CircleCheck, FillCircleCheck } from "@assets/svgs";
import { roleImages } from "@constants/roleImage";
import Badge from "@components/commons/Badge/Badge";
import { partKoreanNameMap } from "@constants/categories";

interface MemberCardProps {
  userId: number;
  nickname?: string;
  role?: Role;
  type: "selection" | "info" | "none";
  selected?: boolean;
  onClick: () => void;
  onProfileClick?: () => void;
}

const MemberCard: React.FC<MemberCardProps> = ({
  userId,
  nickname,
  role,
  type,
  selected,
  onClick,
  onProfileClick,
}: MemberCardProps) => {
  const handleOnClick = () => {
    onClick();
  };
  const handleProfileClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    onProfileClick && onProfileClick();
  };

  return (
    <div
      css={[container(type), selected && selectedContainerStyle]}
      onClick={handleOnClick}
    >
      {(type === "selection" || type === "none") &&
        (selected ? (
          <FillCircleCheck css={checkIconStyle} />
        ) : (
          <CircleCheck css={checkIconStyle} />
        ))}
      {type === "none" ? (
        <p css={selected ? selectedNicknameStyle : nicknameStyle}>없음</p>
      ) : (
        <>
          {typeof role !== "undefined" && (
            <>
              <img
                css={profileStyle}
                src={roleImages[role]}
                alt="profile"
                onClick={handleProfileClick}
              />
              <p css={selected ? selectedNicknameStyle : nicknameStyle}>
                {nickname}
              </p>
              <Badge content={partKoreanNameMap[role]} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MemberCard;
