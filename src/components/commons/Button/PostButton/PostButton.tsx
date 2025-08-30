import { buttonStyle, iconStyle, textStyle } from "./PostButton.style";
import { FillLikeIcon, FillSaveIcon, LikeIcon, SaveIcon } from "@assets/svgs";
import usePostFeedLike from "apis/hooks/feeds/usePostFeedLike";
import usePostFeedSave from "apis/hooks/feeds/usePostFeedSave";
import usePostSavePot from "apis/hooks/saves/useSavePot";

interface PostButtonProps {
  type: "pot" | "feed";
  postType: "like" | "save";
  isToggled: boolean;
  id: number;
}

const PostButton: React.FC<PostButtonProps> = ({
  type,
  postType,
  isToggled,
  id,
}) => {
  const CurrentIcon =
    postType === "like"
      ? isToggled
        ? FillLikeIcon
        : LikeIcon
      : isToggled
      ? FillSaveIcon
      : SaveIcon;
  console.log(CurrentIcon);

  const { mutate: like } = usePostFeedLike();
  const { mutate: save } =
    type === "feed" ? usePostFeedSave() : usePostSavePot();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (postType === "like") {
      like(id);
    } else {
      save(id);
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
