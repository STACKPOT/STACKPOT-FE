import { useState } from "react";
import { buttonStyle, iconStyle, textStyle } from "./PostButton.style";
import { FillLikeIcon, FillSaveIcon, LikeIcon, SaveIcon } from "@assets/svgs";

interface PostButtonProps {
  postType: "like" | "save";
  initialState: boolean;
}

const PostButton: React.FC<PostButtonProps> = ({ postType, initialState }) => {
  const [isToggle, setIsToggle] = useState(initialState);
  const CurrentIcon = postType === "like" ? (isToggle ? FillLikeIcon : LikeIcon) : (isToggle ? FillSaveIcon : SaveIcon);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (postType === "like") {
      // 공감 post api
      setIsToggle(!isToggle);
    } else {
      // 저장하기 post api
      setIsToggle(!isToggle);
    }
  };

  return (
    <button css={buttonStyle} onClick={handleClick}>
      <p css={textStyle}>{postType === "like" ? "공감" : "저장하기"}</p>
      <CurrentIcon css={iconStyle} />
    </button>
  )
}
export default PostButton;