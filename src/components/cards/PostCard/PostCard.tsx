import React, { useState } from "react"
import { cardStyle, titleContainer, profileImage, nicknameStyle, titleStyle, contentStyle, dateStyle, innerContainerStyle, contentContainer, buttonContainer, likeConatiner, likeTextStyle } from "./PostCard.style"
import { LikePostFilled, LikePostUnfilled, SavePostFilled, SavePostUnfilled } from "@assets/svgs";
import { MushRoomProfile } from "@assets/images";

interface PostCardProps {
    postId: number;
    profileImageUrl: string;
    nickname: string;
    createdAt: string;
    title: string;
    content: string;
    likeCount: number;
    saveCount: number;
}

const PostCard: React.FC<PostCardProps> = ({ postId, profileImageUrl, nickname, createdAt, title, content, likeCount, saveCount }: PostCardProps) => {
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)

    return (
        <div css={cardStyle} >
            <div css={innerContainerStyle}>
                <div css={titleContainer}>
                    <img css={profileImage} src={MushRoomProfile} />
                    <p css={nicknameStyle}>{nickname}</p>
                    <p css={dateStyle}>{createdAt}</p>
                </div>
                <div css={titleStyle}>{title}</div>
                <div css={contentContainer}>
                    <p css={contentStyle}>{content}</p>
                </div>
                <div css={buttonContainer}>
                    <div css={likeConatiner}>
                        {like ? <LikePostFilled /> : <LikePostUnfilled />}
                        <p css={likeTextStyle}>{likeCount}</p>
                    </div>
                    <div css={likeConatiner}>
                        {save ? <SavePostFilled /> : <SavePostUnfilled />}
                        <p css={likeTextStyle}>{saveCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;