import { PlusButtonIcon } from "@assets/svgs";
import { container, contentStyle, dateStyle, editCommentContainer, editCommentTextAreaStyle, meatballIconStyle, nicknameContainer, nicknameStyle, openRecommentContainer, openRecommentIconStyle, openRecommentTextStyle, profileContainer, profileImageStyle, profileTextContainer, recommentCancelStyle, recommentContainer, submitButtonContainer, textAreaStyle } from "./Comment.style";
import Button from "../Button/Button";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import React, { useEffect, useRef, useState } from "react";
import MyFeedDropdown from "../Dropdown/MyFeedDropdown/MyFeedDropdown";
import CommentWriter from "./CommentWriter";

interface CommentProps {
  userId: number;
  role: Role;
  nickname: string;
  date: string;
  content: string;
  isMyComment: boolean;
  isRecomment: boolean;
}

const Comment: React.FC<CommentProps> = ({
  userId,
  role,
  nickname,
  date,
  content,
  isMyComment,
  isRecomment,
}: CommentProps) => {
  const navigate = useNavigate();
  const [openRecomment, setOpenRecomment] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);

  const editRef = useRef<HTMLTextAreaElement>(null);

  const handleNicknameClick = () => {
    navigate(`${routes.userProfile}/${userId}`)
  }
  const handleOpenRecomment = () => {
    setOpenRecomment(!openRecomment)
  }
  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditValue(content);
    }
  }
  const handleEditInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditValue(e.target.value);
    if (editRef.current) {
      editRef.current.style.height = "0px";
      editRef.current.style.height = editRef.current.scrollHeight + "px";
    }
  }

  useEffect(() => {
    if (isEditing) {
      if (editRef.current) {
        editRef.current.style.height = "0px";
        editRef.current.style.height = editRef.current.scrollHeight + "px";
      }
    }
  }, [isEditing])

  return (
    <div css={container(isRecomment)}>
      {!isEditing ?
        <>
          <div css={profileContainer}>
            <img css={profileImageStyle} src={roleImages[role]} />
            <div css={profileTextContainer}>
              <div css={nicknameContainer}>
                <a css={nicknameStyle(isMyComment)} onClick={handleNicknameClick}>{nickname}</a>
              </div>
              <p css={dateStyle}>{date}</p>
            </div>
            <div css={meatballIconStyle}
              onClick={(e) => { e.stopPropagation(); }}>
              <MyFeedDropdown
                topMessage="수정하기"
                bottomMessage="삭제하기"
                onTop={handleEdit}
                onBottom={() => { }}
              />
            </div>
          </div>
          <p css={contentStyle}>{content}</p>
          <button css={openRecommentContainer} onClick={handleOpenRecomment}>
            <PlusButtonIcon css={openRecommentIconStyle} />
            <p css={openRecommentTextStyle}>답글 달기</p>
          </button>
          {openRecomment &&
            <CommentWriter
              onSubmit={() => { }}
              onCancel={handleOpenRecomment}
              textAreaCustomStyle={textAreaStyle} />}
        </>
        :
        <>
          <div css={editCommentContainer}>
            <div css={profileContainer}>
              <img css={profileImageStyle} src={roleImages[role]} />
              <p css={nicknameStyle(isMyComment)}>{nickname}</p>
            </div>
            <textarea
              css={editCommentTextAreaStyle}
              ref={editRef}
              value={editValue}
              onChange={(e) => handleEditInputChange(e)}
            />
          </div>
          <div css={submitButtonContainer}>
            <button css={recommentCancelStyle} onClick={handleEdit}>취소</button>
            <Button variant="action" actionType="edit">댓글 작성</Button>
          </div>
        </>
      }
    </div>
  )
}
export default Comment;