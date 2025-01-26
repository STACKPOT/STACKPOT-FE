import { MeatballIcon } from "@assets/svgs";
import React, { useState, useRef, useEffect } from "react";
import {
  containerStyle,
  dropdownStyle,
  iconStyle,
} from "./MyFeedDropdown.style";
import theme from "@styles/theme";

interface FeedDropdownProps {
  onEdit: () => void;
  onDelete: () => void;
}

const MyFeedDropdown: React.FC<FeedDropdownProps> = ({ onDelete, onEdit }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <MeatballIcon css={iconStyle} onClick={toggleDropdown}>
        {isDropdownOpen ? "Close Menu" : "Open Menu"}
      </MeatballIcon>
      {isDropdownOpen && (
        <div css={dropdownStyle}>
          <div
            css={containerStyle({
              borderBottom: `1px solid ${theme.color.object.alternative}`,
              color: theme.color.point.gray,
            })}
            onClick={onEdit}
          >
            수정하기
          </div>
          <div
            css={containerStyle({
              color: theme.color.feedback.negative,
            })}
            onClick={onDelete}
          >
            삭제하기
          </div>
        </div>
      )}
    </div>
  );
};
export default MyFeedDropdown;
