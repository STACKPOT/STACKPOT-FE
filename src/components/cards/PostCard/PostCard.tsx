import React from "react"
import { cardStyle, profileContainer, profileImageStyle, nicknameStyle, titleStyle, contentStyle, dateStyle, innerContainerStyle, buttonContainer, likeConatiner, likeIconUnfilledStyle, profileDateContainer, likeTextStyle } from "./PostCard.style"
import { LikeIcon } from "@assets/svgs";

interface PostCardProps {
    profileImage: string;
    nickname: string;
    createdAt: string;
    title: string;
    content: string;
    likeCount: number;
}

const PostCard: React.FC<PostCardProps> = ({ profileImage, nickname, createdAt, title, content, likeCount }: PostCardProps) => {

    return (
        <div css={cardStyle} >
            <div css={innerContainerStyle}>
                <div css={profileDateContainer} >
                    <div css={profileContainer}>
                        <img css={profileImageStyle} src={profileImage} />
                        <p css={nicknameStyle}>{nickname}</p>
                    </div>
                    <p css={dateStyle}>{createdAt}</p>
                </div>
                <h1 css={titleStyle}>{title}</h1>
                <p css={contentStyle}>{content}</p>
                <div css={buttonContainer}>
                    <div css={likeConatiner}>
                        <LikeIcon css={likeIconUnfilledStyle} />
                        <p css={likeTextStyle}>{likeCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;