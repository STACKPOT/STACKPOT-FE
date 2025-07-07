import Button from "@components/commons/Button/Button";
import {
  bodyTextStyle,
  buttonContainer,
  container,
  profileImageStyle,
} from "./CtaCard.style";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { useEffect, useState } from "react";
import { roleImages } from "@constants/roleImage";

interface CtaCardProps {
  type: "pot" | "feed";
}

const CtaCard: React.FC<CtaCardProps> = ({ type }: CtaCardProps) => {
  const navigate = useNavigate();
  const [roleProfileImage, setRoleProfileImage] = useState<string>("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    const profileImage = roleImages[role as keyof typeof roleImages] || "";
    setRoleProfileImage(profileImage);
  }, [localStorage.getItem("role")]);

  const handleClick = () => {
    if (type === "feed") {
      navigate(routes.writePost);
    } else if (type === "pot") {
      navigate(routes.createPot);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div css={container} onClick={handleClick}>
      <img css={profileImageStyle} src={roleProfileImage} />
      <p css={bodyTextStyle}>
        {type == "feed"
          ? "오늘 작업하다가 무슨 일이 있었냐면..."
          : "꿈을 현실로 옮길 시간이에요. 팟을 만들고 팀원을 모집해 볼까요?"}
      </p>
      <div css={buttonContainer}>
        <Button variant="cta" onClick={handleClick}>
          {type == "feed" ? "피드 작성" : "팟 만들기"}
        </Button>
      </div>
    </div>
  );
};
export default CtaCard;
