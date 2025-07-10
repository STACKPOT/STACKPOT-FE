import { buttonStyle, iconStyle, textStyle } from "./PostButton.style";
import { FillLikeIcon, FillSaveIcon, LikeIcon, SaveIcon } from "@assets/svgs";
import usePostFeedLike from "apis/hooks/feeds/usePostFeedLike";

interface PostButtonProps {
  postType: "like" | "save";
  isToggled: boolean;
  id: number;
}

const PostButton: React.FC<PostButtonProps> = ({ postType, isToggled, id }) => {
  const CurrentIcon =
    postType === "like"
      ? isToggled
        ? FillLikeIcon
        : LikeIcon
      : isToggled
      ? FillSaveIcon
      : SaveIcon;

  const { mutate: likeFeed } = usePostFeedLike();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (postType === "like") {
      likeFeed(id);
    } else {
      // 저장하기 post api
      //setIsToggle(!isToggled);
    }
  };

  return (
    <button css={buttonStyle} onClick={handleClick}>
      <p css={textStyle}>{postType === "like" ? "공감" : "저장하기"}</p>
      <CurrentIcon css={iconStyle} />
    </button>
  );
};
export default PostButton;
