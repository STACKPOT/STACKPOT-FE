import React from "react";
import { dropdownMenuStyle, dropdownItemStyle, dropdownDeleteItemStyle, dropdownDividerStyle } from "./FeedDropdown.style";

interface FeedDropdownProps {
  onEdit: () => void;
  onDelete: () => void;
}

const FeedDropdown: React.FC<FeedDropdownProps> = ({ onEdit, onDelete }) => {
  return (
    <div css={dropdownMenuStyle}>
      <div css={dropdownItemStyle} onClick={onEdit}>
        수정하기
      </div>
      <div css={dropdownDividerStyle}></div>
      <div css={dropdownDeleteItemStyle} onClick={onDelete}>
        삭제하기
      </div>
    </div>
  );
};

export default FeedDropdown;
