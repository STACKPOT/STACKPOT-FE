import { MeatballIcon } from "@assets/svgs";
import React, { useState, useRef, useEffect } from "react";
import {
  dropdownStyle,
  topContainer,
  underContainer,
} from "./MyFeedDropdown.style";

const MyFeedDropdown: React.FC = () => {
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
      <MeatballIcon onClick={toggleDropdown}>
        {isDropdownOpen ? "Close Menu" : "Open Menu"}
      </MeatballIcon>
      {isDropdownOpen && (
        <div css={dropdownStyle}>
          <div css={topContainer}>수정하기</div>
          <div css={underContainer}>삭제하기</div>
        </div>
      )}
    </div>
  );
};
export default MyFeedDropdown;
