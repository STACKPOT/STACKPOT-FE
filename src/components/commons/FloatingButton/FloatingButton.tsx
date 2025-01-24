import React from "react";
import { useNavigate } from "react-router-dom";
import { iconStyle, WriteButton } from "./FloatingButton.style";
import { PencilIcon } from "@assets/svgs";
const FloatingButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/writing-page");
  };

  return (
    <div css={WriteButton} onClick={handleClick}>
      <PencilIcon css={iconStyle} />
      피드 작성
    </div>
  );
};

export default FloatingButton;
