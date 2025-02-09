import React from "react";
import { useNavigate } from "react-router-dom";
import { iconStyle, WriteButton } from "./FloatingButton.style";
import { AddIcon, PencilIcon } from "@assets/svgs";
import routes from "@constants/routes";

interface FloatingButtonProps {
  type: "feed" | "pot";
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ type = "feed" }: FloatingButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "feed") {
      navigate("/writing-page");
    } else {
      navigate(routes.createPot);
    }
  };

  return (
    <div css={WriteButton} onClick={handleClick}>
      {type === "feed" ? <PencilIcon css={iconStyle} /> : <AddIcon />}
      {type === "feed" ? "피드 작성" : "팟 만들기"}
    </div>
  );
};

export default FloatingButton;
