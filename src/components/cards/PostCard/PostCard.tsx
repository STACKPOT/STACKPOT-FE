import React from "react"
import { cardStyle, titleContainer, profileImageStyle, nicknameStyle, titleStyle, contentStyle, dateStyle, innerContainerStyle, contentContainer, buttonContainer, likeConatiner, likeTextStyle } from "./PostCard.style"
import { LikePostUnfilled, SavePostUnfilled } from "@assets/svgs";

interface PostCardProps {
    profileImage: string;
    nickname: string;
    createdAt: string;
    title: string;
    content: string;
    likeCount: number;
    saveCount: number;
}

const PostCard: React.FC<PostCardProps> = ({ profileImage, nickname, createdAt, title, content, likeCount, saveCount }: PostCardProps) => {

    return (
        <div css={cardStyle} >
            <div css={innerContainerStyle}>
                <div css={titleContainer}>
                    <img css={profileImageStyle} src={profileImage} />
                    <p css={nicknameStyle}>{nickname}</p>
                    <p css={dateStyle}>{createdAt}</p>
                </div>
                <div css={titleStyle}>{title}</div>
                <div css={contentContainer}>
                    <p css={contentStyle}>{content}</p>
                </div>
                <div css={buttonContainer}>
                    <div css={likeConatiner}>
                        <LikePostUnfilled />
                        <p css={likeTextStyle}>{likeCount}</p>
                    </div>
                    <div css={likeConatiner}>
                        <SavePostUnfilled />
                        <p css={likeTextStyle}>{saveCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;