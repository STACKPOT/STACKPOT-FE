import { PlusButtonIcon } from "@assets/svgs";
import { container, contentStyle, dateStyle, deletedComment, deletedCommentText, editCommentContainer, editCommentTextAreaStyle, meatballIconStyle, nicknameContainer, nicknameStyle, openRecommentContainer, openRecommentIconStyle, openRecommentTextStyle, profileContainer, profileImageStyle, profileTextContainer, recommentCancelStyle, recommentContainer, submitButtonContainer, textAreaStyle } from "./Comment.style";
import Button from "../Button/Button";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import React, { useEffect, useRef, useState } from "react";
import MyFeedDropdown from "../Dropdown/MyFeedDropdown/MyFeedDropdown";
import CommentWriter from "./CommentWriter";
import Badge from "../Badge/Badge";

interface CommentProps {
  userId: number;
  role: Role;
  nickname: string;
  date: string;
  content: string;
  isMyComment: boolean;
  isRecomment: boolean;
  isDeleted: boolean;
  isWriter: boolean;
}

const Comment: React.FC<CommentProps> = ({
  userId,
  role,
  nickname,
  date,
  content,
  isMyComment,
  isRecomment,
  isDeleted,
  isWriter,
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
  const handleSubmitRecomment = (recomment: string) => {
    // api 호출
    setOpenRecomment(false);
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
  const handleSubmitEdit = () => {
    // 댓글 수정 api 호출
    setIsEditing(false);
  }
  const handleDelete = () => {
    // 삭제 api 호출
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
      {isDeleted ?
        <div css={deletedComment}>
          <p css={deletedCommentText}>삭제된 댓글입니다.</p>
        </div>
        :
        <>
          {!isEditing ?
            <>
              <div css={profileContainer}>
                <img css={profileImageStyle} src={roleImages[role]} />
                <div css={profileTextContainer}>
                  <div css={nicknameContainer}>
                    <a css={nicknameStyle(isMyComment)} onClick={handleNicknameClick}>{nickname}</a>
                    {isWriter && <Badge content="작성자" color="blue" />}
                  </div>
                  <p css={dateStyle}>{date}</p>
                </div>
                {isMyComment &&
                  <div css={meatballIconStyle}
                    onClick={(e) => { e.stopPropagation(); }}>
                    <MyFeedDropdown
                      topMessage="수정하기"
                      bottomMessage="삭제하기"
                      onTop={handleEdit}
                      onBottom={handleDelete}
                    />
                  </div>}
              </div>
              <p css={contentStyle}>{content}</p>
              <button css={openRecommentContainer} onClick={handleOpenRecomment}>
                <PlusButtonIcon css={openRecommentIconStyle} />
                <p css={openRecommentTextStyle}>답글 달기</p>
              </button>
              {openRecomment &&
                <CommentWriter
                  onSubmit={handleSubmitRecomment}
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
                <Button variant="action" onClick={handleSubmitEdit}>댓글 작성</Button>
              </div>
            </>
          }
        </>
      }
    </div>
  )
}
export default Comment;