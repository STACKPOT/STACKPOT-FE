import React, { useState, useEffect, useRef } from "react";
import { MeatballIcon } from "@assets/svgs";
import {
  badgeContainer,
  bottomContainer,
  cardStyle,
  contentContainer,
  contentTextStyle,
  dateTextStyle,
  innerContainer,
  lineStyle,
  moreButtonContainer,
  nicknameStyle,
  profileContainer,
  profileImageStyle,
  titleTextStyle,
  clickableIconStyle,
} from "./TaskCard.style";
import MemberGroup from "@components/commons/Badge/MemberGroup/MemberGroup";
import DdayBadge from "@components/commons/Badge/DdayBadge/DdayBadge";
import Badge from "@components/commons/Badge/Badge";
import FeedDropdown from "@components/commons/FeedDropdown/FeedDropdown";

interface TaskCardProps {
  title: string;
  dday: number;
  tag: string;
  content: string;
  date: string;
  profileImage: string;
  nickname: string;
  groupProfileImages: string[];
  onClick?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dday,
  tag,
  content,
  date,
  profileImage,
  nickname,
  groupProfileImages,
  onClick,
}: TaskCardProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    setIsDropdownOpen(false);
  };

  const handleDelete = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div css={cardStyle} onClick={onClick}>
      <div css={innerContainer}>
        <div css={moreButtonContainer} ref={dropdownRef}>
          <div css={badgeContainer}>
            <DdayBadge days={dday} />
            <Badge content={tag} />
          </div>
          <MeatballIcon css={clickableIconStyle} onClick={handleDropdownToggle} />
          {isDropdownOpen && (
            <FeedDropdown onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </div>
        <div css={contentContainer}>
          <p css={titleTextStyle}>{title}</p>
          <p css={contentTextStyle}>{content}</p>
        </div>
        <p css={dateTextStyle}>{date}</p>
        <div css={lineStyle} />
        <div css={bottomContainer}>
          <div css={profileContainer}>
            <img css={profileImageStyle} src={profileImage} />
            <p css={nicknameStyle}>{nickname}</p>
          </div>
          <MemberGroup profileImageList={groupProfileImages} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
