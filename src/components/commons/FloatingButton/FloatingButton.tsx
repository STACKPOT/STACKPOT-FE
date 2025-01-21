import React from "react";
import { useNavigate } from "react-router-dom";
import { WriteButton } from "./FloatingButton.style";
const FloatingButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/writePost");
  };

  return (
    <div css={WriteButton} onClick={handleClick}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4467_1468)">
          <path
            d="M4.68563 12.8218L0.875 13.125L1.45909 9.50084L9.23164 1.55937C9.65917 1.12116 10.2388 0.875 10.8432 0.875C11.4475 0.875 12.0271 1.12116 12.4547 1.55937C12.6672 1.77638 12.8357 2.03429 12.9507 2.31832C13.0658 2.60234 13.125 2.90689 13.125 3.21445C13.125 3.52202 13.0658 3.82654 12.9507 4.11057C12.8357 4.3946 12.6672 4.65251 12.4547 4.86951L4.68563 12.8218Z"
            stroke="#4EACFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.48047 2.5625L11.4642 5.62357"
            stroke="#4EACFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4467_1468">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      글쓰기
    </div>
  );
};

export default FloatingButton;
