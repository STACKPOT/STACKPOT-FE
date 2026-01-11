import Button from "@components/commons/Button/Button";
import {
  bodyTextStyle,
  buttonContainer,
  container,
  profileImageStyle,
} from "./CtaCard.style";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import { useState } from "react";
import LoginModal from "@components/commons/Modal/LoginModal/LoginModal";
import { SproutImage } from "@assets/images";

interface CtaCardProps {
  type: "pot" | "feed";
}

const CtaCard: React.FC<CtaCardProps> = ({ type }: CtaCardProps) => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (token === null) {
      setIsLoginModalOpen(true);
    } else {
      if (type === "feed") {
        navigate(routes.writePost);
      } else if (type === "pot") {
        navigate(routes.createPot);
      }
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div css={container} onClick={handleClick}>
        <img css={profileImageStyle} src={SproutImage} />
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
      {isLoginModalOpen && (
        <LoginModal onCancel={() => setIsLoginModalOpen(false)} />
      )}
    </>
  );
};
export default CtaCard;
